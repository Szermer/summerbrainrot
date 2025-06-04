# Firebase Deployment Guide

## 🚀 Quick Start Deployment

### Prerequisites
1. **Node.js 18+** installed
2. **Firebase CLI** installed globally: `npm install -g firebase-tools`
3. **Google account** with Firebase access

### Initial Setup

```bash
# 1. Clone and install dependencies
git clone https://github.com/stephenszermer/summerbrainrot.git
cd summerbrainrot
npm run install:all

# 2. Login to Firebase
npm run firebase:login

# 3. Initialize Firebase project
npm run firebase:init
# Select:
# - Hosting: Configure files for Firebase Hosting
# - Firestore: Deploy rules and create indexes
# - Functions: Configure a Cloud Functions directory
# - Storage: Configure a Cloud Storage security rules file

# 4. Add Firebase project
npm run firebase:setup
# Select your Firebase project or create a new one

# 5. Build and deploy
npm run deploy
```

## 🏗️ Architecture Overview

### Hosting Configuration
- **Marketing Site**: `summerbrainrot.com` → Static Next.js build
- **Portal App**: `summerbrainrot.camp` → Server-side rendered Next.js
- **Shared Assets**: Brand components and Firebase configuration

### Firebase Services Used
- **Hosting**: Multi-site hosting for both applications
- **Firestore**: User data, progress tracking, projects
- **Authentication**: Google/email sign-in with role-based access
- **Storage**: File uploads, portfolio assets, project files
- **Functions**: Server-side business logic and automation
- **Analytics**: User behavior and learning outcome tracking

## 📦 Build Process

### Marketing Site Build
```bash
# Static export optimized for CDN
cd apps/marketing
npm run build
# Output: apps/marketing/out/
```

### Portal App Build
```bash
# Server-side rendering build
cd apps/portal  
pnpm run build
# Output: apps/portal/.next/
```

### Shared Components Build
```bash
# Component library compilation
cd packages/shared-components
npm run build
# Output: packages/shared-components/dist/

cd packages/types
npm run build
# Output: packages/types/dist/
```

## 🔧 Environment Configuration

### Firebase Configuration
Create `.env.local` files in both applications:

```bash
# apps/marketing/.env.local
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=summerbrainrot.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=summerbrainrot
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=summerbrainrot.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

# apps/portal/.env.local
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=summerbrainrot.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=summerbrainrot
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=summerbrainrot.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

### Domain Configuration
1. **Purchase domains** through your preferred registrar
2. **Add custom domains** in Firebase Console:
   - Go to Hosting → Add custom domain
   - Follow DNS configuration instructions
3. **SSL certificates** are automatically provisioned by Firebase

## 🚀 Deployment Commands

### Full Deployment
```bash
npm run deploy
# Deploys everything: hosting, functions, firestore rules, storage rules
```

### Selective Deployment
```bash
# Marketing site only
npm run deploy:marketing

# Portal app only  
npm run deploy:portal

# Functions only
npm run deploy:functions

# Database rules and indexes
npm run deploy:firestore
```

## 🔐 Security Configuration

### Firestore Rules
- Users can only access their own data
- Cohort members can view each other's basic profiles
- Mentors can view participant progress
- Admins have full access to cohort management

### Storage Rules
- Profile images: User-owned, private
- Project files: Collaborative access within projects
- Portfolio assets: Public read, owner write
- Cohort resources: Shared access within cohorts

### Authentication Setup
1. **Enable sign-in methods** in Firebase Console:
   - Email/Password
   - Google Sign-In
   - (Optional) GitHub for developers

2. **Configure authorized domains**:
   - `localhost` (development)
   - `summerbrainrot.com`
   - `summerbrainrot.camp`

## 📊 Monitoring and Analytics

### Firebase Analytics
- **User engagement**: Session duration, page views, retention
- **Learning metrics**: Module completion, project creation
- **Business metrics**: Application conversion, program completion

### Performance Monitoring
- **Web vitals**: Core Web Vitals tracking
- **Error tracking**: Automatic crash reporting
- **Custom metrics**: Learning outcome measurement

### Cost Monitoring
- **Usage alerts**: Set up billing alerts in Google Cloud Console
- **Resource optimization**: Monitor Firestore reads/writes, storage usage
- **Function costs**: Track invocations and execution time

## 🔄 CI/CD Pipeline

### GitHub Actions Integration
```yaml
# .github/workflows/deploy.yml
name: Deploy to Firebase
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm run install:all
      - run: npm run build
      - run: npm run test:ci
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          projectId: summerbrainrot
```

## 🧪 Development Workflow

### Local Development with Emulators
```bash
# Start Firebase emulators
npm run dev:firebase

# In separate terminals:
npm run dev:marketing  # localhost:3000
npm run dev:portal     # localhost:3001

# Emulator UI available at: localhost:4000
```

### Testing Strategy
```bash
# Unit tests
npm run test:unit

# E2E tests
npm run test:e2e

# Full test suite
npm run test:all
```

## 📈 Scaling Considerations

### Performance Optimization
- **CDN caching**: Marketing site served from global CDN
- **Image optimization**: Automatic WebP conversion and resizing
- **Code splitting**: Automatic chunk optimization in Next.js
- **Database indexes**: Optimized queries for user and cohort data

### Cost Optimization
- **Free tier usage**: Designed to maximize Firebase free tier
- **Efficient queries**: Minimized Firestore reads/writes
- **Function optimization**: Cold start minimization
- **Storage lifecycle**: Automatic cleanup of old files

### Security Best Practices
- **Role-based access**: Granular permissions system
- **Data encryption**: End-to-end encryption for sensitive data
- **Input validation**: Server-side validation in Cloud Functions
- **Rate limiting**: Built-in Firebase security rules

## 🎓 Educational Value

### Learning Opportunities
- **Modern deployment practices**: Git-based CI/CD workflows
- **Cloud architecture**: Understanding serverless and NoSQL databases
- **Performance optimization**: Real-world optimization techniques
- **Security patterns**: Authentication, authorization, and data protection
- **Cost management**: Understanding cloud service pricing

### Business Skills
- **Analytics interpretation**: Understanding user behavior data
- **A/B testing**: Feature flag and configuration management
- **Scalability planning**: Preparing for growth
- **Cost analysis**: Business impact of technical decisions

This Firebase deployment provides a production-ready, scalable foundation for Summer Brain Rot while teaching participants industry-standard cloud development practices.
