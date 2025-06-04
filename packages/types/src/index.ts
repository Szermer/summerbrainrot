import { Timestamp } from 'firebase/firestore';

// User Management Types
export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role: 'participant' | 'mentor' | 'admin';
  cohort: string;
  joinedAt: Timestamp;
  profile: UserProfile;
  progress: UserProgress;
  settings: UserSettings;
}

export interface UserProfile {
  age: number;
  interests: string[];
  goals: string[];
  parentEmail?: string;
  school?: string;
  location?: {
    city: string;
    state: string;
    country: string;
  };
  socialLinks?: {
    github?: string;
    linkedin?: string;
    portfolio?: string;
  };
}

export interface UserProgress {
  currentWeek: number;
  completedModules: string[];
  projectsCompleted: number;
  skillsAcquired: string[];
  totalTimeSpent: number; // minutes
  lastActivityAt: Timestamp;
  achievements: Achievement[];
}

export interface UserSettings {
  notifications: boolean;
  publicProfile: boolean;
  theme: 'light' | 'dark' | 'system';
  language: string;
  timezone: string;
}

// Achievement System
export interface Achievement {
  id: string;
  title: string;
  description: string;
  iconUrl: string;
  earnedAt: Timestamp;
  category: 'technical' | 'collaboration' | 'business' | 'milestone';
}

// Learning Progress Types
export interface Progress {
  id: string;
  userId: string;
  cohortId: string;
  moduleId: string;
  completedAt?: Timestamp;
  timeSpent: number; // minutes
  artifacts: Artifact[];
  peerFeedback: PeerFeedback[];
  mentorFeedback?: MentorFeedback;
  selfAssessment?: SelfAssessment;
}

export interface Artifact {
  id: string;
  type: 'code' | 'design' | 'presentation' | 'project' | 'reflection';
  title: string;
  description: string;
  url: string;
  fileSize?: number;
  mimeType?: string;
  createdAt: Timestamp;
  tags: string[];
}

export interface PeerFeedback {
  id: string;
  fromUserId: string;
  rating: number; // 1-5
  comments: string;
  categories: {
    technical: number;
    collaboration: number;
    communication: number;
    creativity: number;
  };
  createdAt: Timestamp;
  helpful: boolean;
}

export interface MentorFeedback {
  id: string;
  fromUserId: string;
  rating: number; // 1-5
  comments: string;
  suggestions: string[];
  skillsAssessment: {
    [skill: string]: number; // 1-5 rating
  };
  nextSteps: string[];
  createdAt: Timestamp;
}

export interface SelfAssessment {
  confidence: number; // 1-5
  difficulty: number; // 1-5
  enjoyment: number; // 1-5
  timeSpent: number; // minutes
  challenges: string[];
  learnings: string[];
  reflections: string;
}

// Project Types
export interface Project {
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
  demoUrl?: string;
  metrics: ProjectMetrics;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  milestones: Milestone[];
  tags: string[];
  visibility: 'public' | 'cohort' | 'private';
}

export interface ProjectMetrics {
  users?: number;
  revenue?: number;
  engagement?: number;
  downloads?: number;
  stars?: number;
  forks?: number;
  pageViews?: number;
  conversionRate?: number;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  dueDate: Timestamp;
  completedAt?: Timestamp;
  artifacts: string[];
  assignedTo: string[];
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'in-progress' | 'completed' | 'blocked';
}

// Cohort Management Types
export interface Cohort {
  id: string;
  name: string;
  description: string;
  startDate: Timestamp;
  endDate: Timestamp;
  maxParticipants: number;
  currentParticipants: number;
  status: 'recruiting' | 'active' | 'completed' | 'cancelled';
  curriculum: CurriculumModule[];
  participants: string[];
  mentors: string[];
  schedule: ScheduleEntry[];
  settings: CohortSettings;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface CurriculumModule {
  id: string;
  title: string;
  description: string;
  weekNumber: number;
  duration: number; // hours
  learningObjectives: string[];
  deliverables: string[];
  resources: Resource[];
  prerequisites: string[];
  assessmentCriteria: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Resource {
  id: string;
  title: string;
  type: 'video' | 'article' | 'tutorial' | 'tool' | 'template' | 'book';
  url: string;
  description: string;
  estimatedTime: number; // minutes
  required: boolean;
  tags: string[];
}

export interface ScheduleEntry {
  id: string;
  title: string;
  description: string;
  dayOfWeek: number; // 0-6 (Sunday-Saturday)
  startTime: string; // HH:MM format
  endTime: string; // HH:MM format
  type: 'workshop' | 'mentorship' | 'showcase' | 'standup' | 'review';
  location: 'online' | 'in-person' | 'hybrid';
  meetingUrl?: string;
  maxAttendees?: number;
  required: boolean;
}

export interface CohortSettings {
  allowPeerFeedback: boolean;
  allowPublicProjects: boolean;
  enableLeaderboard: boolean;
  requireParentConsent: boolean;
  timezone: string;
  communicationChannels: {
    slack?: string;
    discord?: string;
    email: string;
  };
}

// Application Types
export interface Application {
  id: string;
  applicantId?: string; // Only set after account creation
  email: string;
  personalInfo: {
    firstName: string;
    lastName: string;
    age: number;
    school: string;
    grade: string;
    location: {
      city: string;
      state: string;
      country: string;
    };
  };
  parentInfo: {
    name: string;
    email: string;
    phone: string;
    relationship: string;
  };
  background: {
    programmingExperience: 'none' | 'beginner' | 'intermediate' | 'advanced';
    interests: string[];
    goals: string[];
    motivation: string;
    timeCommitment: number; // hours per week
  };
  portfolio?: {
    githubUrl?: string;
    portfolioUrl?: string;
    projectDescriptions: string[];
  };
  status: 'submitted' | 'under-review' | 'interview-scheduled' | 'accepted' | 'rejected' | 'waitlisted';
  cohortPreferences: string[];
  submittedAt: Timestamp;
  reviewedAt?: Timestamp;
  reviewedBy?: string;
  reviewNotes?: string;
  interviewScheduledAt?: Timestamp;
  decisionAt?: Timestamp;
  decisionReason?: string;
}

// Analytics and Metrics
export interface LearningAnalytics {
  userId: string;
  cohortId: string;
  period: 'daily' | 'weekly' | 'monthly';
  date: Timestamp;
  metrics: {
    timeSpent: number; // minutes
    modulesCompleted: number;
    projectsWorkedOn: number;
    peerInteractions: number;
    mentorInteractions: number;
    skillsAcquired: string[];
    achievements: string[];
  };
}

export interface CohortAnalytics {
  cohortId: string;
  period: 'daily' | 'weekly' | 'monthly';
  date: Timestamp;
  metrics: {
    activeParticipants: number;
    totalTimeSpent: number; // minutes
    completionRate: number; // percentage
    projectsCreated: number;
    projectsCompleted: number;
    peerFeedbackGiven: number;
    averageEngagement: number; // 1-5 scale
    retentionRate: number; // percentage
  };
}

// Notification Types
export interface Notification {
  id: string;
  userId: string;
  type: 'milestone' | 'feedback' | 'project' | 'cohort' | 'system';
  title: string;
  message: string;
  actionUrl?: string;
  read: boolean;
  createdAt: Timestamp;
  expiresAt?: Timestamp;
  metadata?: Record<string, any>;
}

// Search and Discovery
export interface SearchResult {
  id: string;
  type: 'user' | 'project' | 'cohort' | 'resource';
  title: string;
  description: string;
  imageUrl?: string;
  relevanceScore: number;
  metadata: Record<string, any>;
}

export interface SearchFilters {
  type?: string[];
  cohort?: string[];
  skills?: string[];
  technologies?: string[];
  status?: string[];
  dateRange?: {
    start: Timestamp;
    end: Timestamp;
  };
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  metadata?: {
    total?: number;
    page?: number;
    limit?: number;
    hasMore?: boolean;
  };
}

// Real-time Types
export interface RealtimeUpdate {
  type: 'create' | 'update' | 'delete';
  collection: string;
  documentId: string;
  data?: any;
  timestamp: Timestamp;
}

// Export all types
export type {
  User,
  UserProfile,
  UserProgress,
  UserSettings,
  Achievement,
  Progress,
  Artifact,
  PeerFeedback,
  MentorFeedback,
  SelfAssessment,
  Project,
  ProjectMetrics,
  Milestone,
  Cohort,
  CurriculumModule,
  Resource,
  ScheduleEntry,
  CohortSettings,
  Application,
  LearningAnalytics,
  CohortAnalytics,
  Notification,
  SearchResult,
  SearchFilters,
  ApiResponse,
  RealtimeUpdate,
};
