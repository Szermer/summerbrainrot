# Firebase Implementation Strategy for Summer Brain Rot

## Project Structure

### Firebase Multi-Site Configuration
```
firebase.json
{
  "hosting": [
    {
      "site": "summerbrainrot-marketing",
      "target": "marketing",
      "public": "apps/marketing/out",
      "cleanUrls": true,
      "trailingSlash": false,
      "headers": [
        {
          "source": "**/*.@(jpg|jpeg|gif|png|svg|webp|css|js)",
          "headers": [
            {
              "key": "Cache-Control",
              "value": "max-age=31536000"
            }
          ]
        }
      ],
      "rewrites": [
        {
          "source": "**",
          "destination": "/index.html"
        }
      ]
    },
    {
      "site": "summerbrainrot-portal",
      "target": "portal", 
      "source": "apps/portal",
      "frameworksBackend": {
        "region": "us-central1"
      }
    }
  ],
  "firestore": {
    "rules": "firestore.rules",
    "indexes": "firestore.indexes.json"
  },
  "functions": {
    "source": "firebase-functions",
    "runtime": "nodejs18"
  },
  "storage": {
    "rules": "storage.rules"
  },
  "emulators": {
    "auth": {
      "port": 9099
    },
    "firestore": {
      "port": 8080
    },
    "hosting": {
      "port": 5000
    },
    "functions": {
      "port": 5001
    },
    "storage": {
      "port": 9199
    },
    "ui": {
      "enabled": true,
      "port": 4000
    }
  }
}
```

## Firestore Data Model

### User Management
```typescript
// Users Collection
interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role: 'participant' | 'mentor' | 'admin';
  cohort: string;
  joinedAt: Timestamp;
  profile: {
    age: number;
    interests: string[];
    goals: string[];
    parentEmail?: string;
  };
  progress: {
    currentWeek: number;
    completedModules: string[];
    projectsCompleted: number;
    skillsAcquired: string[];
  };
  settings: {
    notifications: boolean;
    publicProfile: boolean;
    theme: 'light' | 'dark';
  };
}
```

### Learning Progress
```typescript
// Progress Collection
interface Progress {
  id: string;
  userId: string;
  cohortId: string;
  moduleId: string;
  completedAt?: Timestamp;
  timeSpent: number; // minutes
  artifacts: {
    type: 'code' | 'design' | 'presentation' | 'project';
    url: string;
    description: string;
  }[];
  peerFeedback: {
    fromUserId: string;
    rating: number;
    comments: string;
    createdAt: Timestamp;
  }[];
  mentorFeedback?: {
    fromUserId: string;
    rating: number;
    comments: string;
    suggestions: string[];
    createdAt: Timestamp;
  };
}
```

### Projects and Portfolios
```typescript
// Projects Collection
interface Project {
  id: string;
  title: string;
  description: string;
  ownerId: string;
  collaborators: string[];
  cohortId: string;
  type: 'individual' | 'team' | 'cohort';
  status: 'planning' | 'development' | 'testing' | 'launched' | 'completed';
  technologies: string[];
  repositoryUrl?: string;
  liveUrl?: string;
  metrics: {
    users?: number;
    revenue?: number;
    engagement?: number;
  };
  createdAt: Timestamp;
  updatedAt: Timestamp;
  milestones: {
    title: string;
    description: string;
    dueDate: Timestamp;
    completedAt?: Timestamp;
    artifacts: string[];
  }[];
}
```

### Cohort Management
```typescript
// Cohorts Collection
interface Cohort {
  id: string;
  name: string;
  startDate: Timestamp;
  endDate: Timestamp;
  maxParticipants: number;
  currentParticipants: number;
  status: 'recruiting' | 'active' | 'completed';
  curriculum: {
    moduleId: string;
    title: string;
    weekNumber: number;
    learningObjectives: string[];
    deliverables: string[];
  }[];
  mentors: string[];
  schedule: {
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    type: 'workshop' | 'mentorship' | 'showcase';
  }[];
}
```

## Security Rules

### Firestore Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
      
      // Allow cohort members to read basic profile info
      allow read: if request.auth != null && 
        request.auth.uid in get(/databases/$(database)/documents/cohorts/$(resource.data.cohort)).data.participants;
    }
    
    // Progress tracking
    match /progress/{progressId} {
      allow read, write: if request.auth != null && 
        (request.auth.uid == resource.data.userId || 
         request.auth.uid in get(/databases/$(database)/documents/cohorts/$(resource.data.cohortId)).data.mentors);
    }
    
    // Projects - visible to cohort members
    match /projects/{projectId} {
      allow read: if request.auth != null && 
        (request.auth.uid == resource.data.ownerId ||
         request.auth.uid in resource.data.collaborators ||
         request.auth.uid in get(/databases/$(database)/documents/cohorts/$(resource.data.cohortId)).data.participants);
      
      allow write: if request.auth != null && 
        (request.auth.uid == resource.data.ownerId ||
         request.auth.uid in resource.data.collaborators);
    }
    
    // Cohorts - readable by participants, writable by admins
    match /cohorts/{cohortId} {
      allow read: if request.auth != null && 
        (request.auth.uid in resource.data.participants ||
         request.auth.uid in resource.data.mentors ||
         get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin');
      
      allow write: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}
```

### Storage Rules
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // User profile images
    match /users/{userId}/profile/{filename} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Project files - accessible to project collaborators
    match /projects/{projectId}/{allPaths=**} {
      allow read, write: if request.auth != null && 
        (request.auth.uid in firestore.get(/databases/(default)/documents/projects/$(projectId)).data.collaborators ||
         request.auth.uid == firestore.get(/databases/(default)/documents/projects/$(projectId)).data.ownerId);
    }
    
    // Portfolio assets - public but only writable by owner
    match /portfolios/{userId}/{allPaths=**} {
      allow read: if true; // Public portfolio access
      allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Cloud Functions

### User Onboarding
```typescript
// functions/src/onboarding.ts
import { onCall, HttpsError } from 'firebase-functions/v2/https';
import { getFirestore } from 'firebase-admin/firestore';

export const createUserProfile = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'User must be authenticated');
  }
  
  const { cohortId, profile } = request.data;
  const db = getFirestore();
  
  // Validate cohort capacity
  const cohortRef = db.collection('cohorts').doc(cohortId);
  const cohort = await cohortRef.get();
  
  if (!cohort.exists) {
    throw new HttpsError('not-found', 'Cohort not found');
  }
  
  const cohortData = cohort.data()!;
  if (cohortData.currentParticipants >= cohortData.maxParticipants) {
    throw new HttpsError('resource-exhausted', 'Cohort is full');
  }
  
  // Create user profile
  await db.collection('users').doc(request.auth.uid).set({
    id: request.auth.uid,
    email: request.auth.token.email,
    displayName: request.auth.token.name,
    photoURL: request.auth.token.picture,
    role: 'participant',
    cohort: cohortId,
    joinedAt: new Date(),
    profile,
    progress: {
      currentWeek: 1,
      completedModules: [],
      projectsCompleted: 0,
      skillsAcquired: []
    },
    settings: {
      notifications: true,
      publicProfile: false,
      theme: 'light'
    }
  });
  
  // Update cohort participant count
  await cohortRef.update({
    currentParticipants: cohortData.currentParticipants + 1,
    participants: [...(cohortData.participants || []), request.auth.uid]
  });
  
  return { success: true };
});
```

### Progress Tracking
```typescript
// functions/src/progress.ts
import { onDocumentCreate } from 'firebase-functions/v2/firestore';
import { getFirestore } from 'firebase-admin/firestore';

export const updateUserProgress = onDocumentCreate(
  'progress/{progressId}',
  async (event) => {
    const progressData = event.data!.data();
    const db = getFirestore();
    
    // Update user's overall progress
    const userRef = db.collection('users').doc(progressData.userId);
    const user = await userRef.get();
    
    if (user.exists) {
      const userData = user.data()!;
      const updatedProgress = {
        ...userData.progress,
        completedModules: [...userData.progress.completedModules, progressData.moduleId].filter((value, index, self) => self.indexOf(value) === index)
      };
      
      await userRef.update({ progress: updatedProgress });
    }
  }
);
```

## Development Workflow

### Local Development
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login and initialize
firebase login
firebase init

# Start emulators
firebase emulators:start

# Development with emulators
npm run dev:marketing  # localhost:3000 → Firebase Hosting emulator
npm run dev:portal     # localhost:3001 → Firebase Hosting emulator
```

### Environment Configuration
```bash
# .env.local (marketing)
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=summerbrainrot.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=summerbrainrot
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=summerbrainrot.appspot.com

# .env.local (portal)
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=summerbrainrot.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=summerbrainrot
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=summerbrainrot.appspot.com
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

### Deployment Pipeline
```bash
# Build and deploy marketing
npm run build:marketing
firebase deploy --only hosting:marketing

# Build and deploy portal
npm run build:portal
firebase deploy --only hosting:portal

# Deploy everything
firebase deploy
```

## Cost Optimization Strategy

### Firebase Pricing Tiers
- **Spark Plan (Free)**: Development and small-scale testing
- **Blaze Plan (Pay-as-go)**: Production with automatic scaling

### Expected Usage (100 participants)
```
Firestore: ~500K reads/month, ~100K writes/month = ~$2/month
Storage: ~10GB files = ~$0.25/month
Functions: ~100K invocations = ~$0.40/month
Hosting: ~100GB bandwidth = ~$15/month
Authentication: Free (Firebase Auth)

Total: ~$18/month for 100 active participants
```

### Educational Cost Management
- Teach participants about cloud cost optimization
- Monitor usage through Firebase console
- Implement efficient data queries
- Use Firebase Performance Monitoring

## Analytics and Insights

### Learning Analytics
```typescript
// Track learning milestones
await logEvent('module_completed', {
  userId: user.uid,
  moduleId: 'react-fundamentals',
  timeSpent: 180, // minutes
  skillsLearned: ['components', 'hooks', 'state']
});

// Track collaboration
await logEvent('peer_collaboration', {
  projectId: 'discord-bot',
  participants: ['user1', 'user2'],
  collaborationType: 'code_review'
});
```

### Business Metrics
- User engagement and retention
- Learning progression rates
- Project completion statistics
- Mentor effectiveness metrics
- Parent satisfaction indicators

This comprehensive Firebase architecture provides a scalable, educational, and cost-effective foundation for Summer Brain Rot while teaching participants industry-standard Google Cloud practices.
