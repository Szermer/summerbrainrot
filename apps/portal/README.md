# Summer Brain Rot - Participant Portal

The authenticated participant experience platform for the Summer Brain Rot entrepreneurial education program.

## Overview

This portal serves as the central hub for program participants, mentors, and administrators. Built on the shadcn-admin template, it provides:

- **Authentication System**: Firebase Auth with email/password and social login
- **Role-Based Access**: Participant, mentor, and admin roles
- **Dashboard Analytics**: Progress tracking and performance metrics
- **Learning Management**: Educational modules and project tracking
- **Collaboration Tools**: Team features and mentor interactions

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm
- Firebase project with Authentication enabled
- Environment variables configured

### Installation

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Firebase configuration
```

### Development

```bash
# Start development server
pnpm run dev

# Build for production
pnpm run build

# Run linter
pnpm run lint
```

The portal will be available at http://localhost:3001

## Authentication

### Firebase Setup

The portal uses Firebase Authentication with the following features:

- **Email/Password Authentication**: Traditional signup/login
- **Social Authentication**: Google, GitHub, Facebook (when configured)
- **Password Reset**: Email-based password recovery
- **Session Management**: Secure HTTP-only cookies
- **User Profiles**: Firestore-based user data storage

### Social Authentication

Social authentication is fully implemented in the codebase. To enable:

1. Go to [Firebase Console](https://console.firebase.google.com) → Authentication → Sign-in method
2. Enable desired providers (Google, GitHub, Facebook)
3. Follow the setup guides:
   - [Social Authentication Setup Guide](../../docs/SOCIAL_AUTH_SETUP.md)
   - [Firebase Quick Reference](../../docs/FIREBASE_QUICK_REFERENCE.md)

The login UI automatically shows enabled providers with appropriate buttons and handles the OAuth flow.

### Environment Configuration

Required environment variables in `.env.local`:

```env
# Firebase Client Configuration (Public)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Firebase Admin Configuration (Server-side)
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_service_account_email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

### User Roles

- **Participant**: Default role for program participants
- **Mentor**: Assigned to program mentors and advisors
- **Admin**: Full access to platform administration

### Authentication Flow

1. User visits protected route
2. AuthProvider checks authentication state
3. Redirects to `/login` if not authenticated
4. After successful login, redirects to intended destination
5. Session maintained with HTTP-only cookies

## Tech Stack

### Core Framework
- **Next.js 15**: App Router with TypeScript
- **React 19**: Latest React features
- **TypeScript**: Strict type checking

### Authentication & Backend
- **Firebase Auth**: Authentication service
- **Firebase Firestore**: User profiles and data
- **Firebase Admin SDK**: Server-side operations

### UI & Styling
- **shadcn/ui**: Component library
- **Tailwind CSS v4**: Utility-first styling
- **Radix UI**: Accessible primitives
- **Lucide Icons**: Icon system

### Development Tools
- **ESLint v9**: Code linting
- **Prettier**: Code formatting
- **pnpm**: Package management

### Data & State
- **React Hook Form**: Form handling
- **Zod**: Schema validation
- **TanStack Table**: Data tables
- **Recharts**: Data visualization

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   │   ├── login/         # Login form
│   │   ├── register/      # Registration form
│   │   └── forgot-password/ # Password reset
│   ├── (dashboard)/       # Protected dashboard routes
│   │   ├── youth-dashboard/ # Gamified youth interface
│   ├── api/               # API routes
│   │   └── auth/          # Authentication endpoints
│   └── globals.css        # Global styles
├── components/
│   ├── auth/              # Authentication components
│   │   └── auth-provider.tsx # Auth context provider
│   ├── layout/            # Layout components
│   └── ui/                # shadcn/ui components
├── lib/
│   └── firebase/          # Firebase configuration
│       ├── client.ts      # Client-side Firebase
│       ├── admin.ts       # Server-side Firebase
│       └── auth.ts        # Authentication service
└── middleware.ts          # Route protection
```

## Features

### Authentication Features
- ✅ Email/password registration and login
- ✅ Social authentication (Google, GitHub, Facebook)
- ✅ Password reset functionality
- ✅ Session management with HTTP-only cookies
- ✅ Route protection middleware
- ✅ User profile management
- ✅ Role-based access control

### Dashboard Features
- 🚀 Youth Dashboard - Gamified interface for young participants
- 📊 Multiple dashboard layouts
- 📈 Analytics and reporting
- 👥 User management
- 📋 Task management with data tables
- ⚙️ Settings and preferences
- 🔧 Developer tools (API keys, webhooks)

### Youth Dashboard
The Youth Dashboard provides a gamified, age-appropriate interface designed specifically for young participants (ages 12-17):

#### Features:
- **Welcome Card**: Personalized greeting with XP progress and level system
- **Daily Challenges**: Fun coding/design tasks with step-by-step guidance
- **Skill Progression**: Visual skill trees with locked/unlocked content
- **Quick Actions**: Large, colorful buttons for common tasks
- **Achievement System**: Badges and rewards for milestones
- **Team Chat**: Safe, moderated messaging with mentors and peers
- **Leaderboard**: Weekly rankings to encourage friendly competition
- **Activity Calendar**: Upcoming workshops, challenges, and social events

#### Gamification Elements:
- XP (Experience Points) system
- Level progression (1-20)
- Achievement badges
- Daily login streaks
- Team competitions
- Skill unlocking

### Planned Features
- 🎓 Learning modules and progress tracking
- 💬 Enhanced collaboration and messaging
- 🏆 Expanded achievement and badge system
- 📱 Mobile responsiveness improvements
- 🔔 Real-time notifications

## Development

### Authentication Testing

Test accounts for development:
- Email: test@example.com
- Password: test123456

### Build and Deployment

```bash
# Build for production
pnpm run build

# Test production build locally
pnpm run start

# Deploy to Firebase (from root directory)
firebase deploy --only hosting:portal
```

### Code Quality

```bash
# Run linter
pnpm run lint

# Fix linting issues  
pnpm run lint:fix

# Check formatting
pnpm run format

# Fix formatting
pnpm run format:fix
```

## Deployment

### Production URLs

- **Live Portal**: https://summerbrainrot--summerbrainrot.us-central1.hosted.app
- **Development**: http://localhost:3001

### Firebase Web App Hosting

The portal is deployed using Firebase Web App Hosting, which provides:

- **Automatic Deployments**: Triggered by commits to `main` branch
- **Environment Variables**: Automatically injected via `FIREBASE_WEBAPP_CONFIG`
- **Server-Side Rendering**: Full Next.js SSR support
- **Global CDN**: Optimized content delivery
- **Custom Domains**: Support for `summerbrainrot.camp` domain

#### Configuration Requirements

Firebase Web App Hosting requires an `apphosting.yaml` file in the repository root:

```yaml
# Firebase Web App Hosting configuration
runConfig:
  runtime: nodejs20

buildConfig:
  rootDirectory: apps/portal
  commands:
    - name: install
      command: pnpm install --frozen-lockfile
    - name: build
      command: pnpm run build
  outputDirectory: .next
```

This configuration tells Firebase how to build and deploy the portal application.

### Deployment Process

1. **Local Build**: 
   ```bash
   pnpm run build
   ```

2. **Automatic Deployment**: 
   - Push changes to `main` branch
   - Firebase Web App Hosting detects changes
   - Builds and deploys automatically
   - Available at production URL

3. **Environment Configuration**:
   - Firebase configuration is automatically injected
   - No manual environment setup required in production
   - Falls back to local `.env.local` for development

### Deployment Architecture

```
GitHub Repository (main branch)
        ↓
Firebase Web App Hosting
        ↓
Next.js Build Process
        ↓
Production Deployment
        ↓ 
https://summerbrainrot--summerbrainrot.us-central1.hosted.app
```

## Contributing

1. Follow the existing code style and patterns
2. Use TypeScript strict mode
3. Add proper error handling
4. Test authentication flows thoroughly
5. Update documentation for new features

## License

This project is part of the Summer Brain Rot educational platform.