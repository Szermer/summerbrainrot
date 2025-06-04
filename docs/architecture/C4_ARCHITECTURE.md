# C4 Architecture Model - Summer Brain Rot

This document describes the Summer Brain Rot platform architecture using the C4 (Context, Containers, Components, Code) model.

## Level 1: System Context

### Overview
Summer Brain Rot is an educational platform that teaches entrepreneurship through hands-on SaaS development.

### System Context Diagram

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  Parents &      │     │  Participants   │     │   Mentors &     │
│  Prospects      │     │                 │     │   Admins        │
│                 │     │                 │     │                 │
└────────┬────────┘     └────────┬────────┘     └────────┬────────┘
         │                       │                         │
         │                       │                         │
         ▼                       ▼                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    Summer Brain Rot Platform                    │
│                                                                 │
│  ┌─────────────┐           ┌─────────────┐                    │
│  │  Marketing  │           │   Portal    │                    │
│  │    Site     │           │     App     │                    │
│  └─────────────┘           └─────────────┘                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
         │                       │                         │
         ▼                       ▼                         ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│   Firebase      │     │    Payment      │     │   Analytics     │
│   Services      │     │   Provider      │     │   Services      │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

### External Systems
- **Firebase**: Complete platform for hosting, authentication, database, and storage
  - Hosting: Multi-site configuration for marketing and portal
  - Firestore: NoSQL database with real-time sync
  - Authentication: Google and email/password sign-in
  - Storage: User uploads and assets
- **Payment Provider**: Stripe/PayPal for program fees
- **Analytics**: Firebase Analytics + Google Analytics integration

## Level 2: Container Diagram

### Containers Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    Summer Brain Rot Platform                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────┐     ┌──────────────────────┐        │
│  │   Marketing Site     │     │    Portal App        │        │
│  │  (Static Export)     │     │    (SSR/Dynamic)     │        │
│  │                      │     │                      │        │
│  │  - Next.js 15       │     │  - Next.js 15       │        │
│  │  - Tailwind CSS     │     │  - Tailwind CSS     │        │
│  │  - MDX Content      │     │  - TanStack Table   │        │
│  │  - Streamline Template│     │  - shadcn Admin     │        │
│  └──────────┬───────────┘     └──────────┬──────────┘        │
│             │                             │                     │
│             └─────────────┬───────────────┘                    │
│                           │                                     │
│              ┌────────────▼────────────┐                       │
│              │   Shared Packages       │                       │
│              │                         │                       │
│              │  - Components Library   │                       │
│              │  - Brand Assets         │                       │
│              │  - Type Definitions     │                       │
│              │  - Configuration        │                       │
│              └─────────────────────────┘                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
                 ┌────────────────────────┐
                 │   Testing Infrastructure│
                 │                         │
                 │  - Vitest (Unit)       │
                 │  - Playwright (E2E)    │
                 │  - GitHub Actions      │
                 └─────────────────────────┘
```

### Container Descriptions

#### Marketing Site
- **Technology**: Next.js 15 with static export
- **Deployment**: Firebase Hosting (summerbrainrot.com)
- **Purpose**: Public information, lead generation
- **Base Template**: Streamline Next.js Template v1.1.0
- **Design System**: Citrus-themed with lime green (oklch(0.8719 0.1829 125.59)) primary, Alexandria typography
- **Key Features**: SEO optimization, performance, MDX content, carousel hero
- **Firebase Integration**: Analytics, performance monitoring

#### Portal App
- **Technology**: Next.js 15 with SSR
- **Deployment**: Firebase Web App Hosting with automatic deployments
- **Production URL**: https://summerbrainrot--summerbrainrot.us-central1.hosted.app
- **Purpose**: Authenticated user experience
- **Base Template**: shadcn Admin Template v1.0.0
- **Design System**: Subtle brand colors (purple primary, pink accent)
- **Authentication**: Firebase Auth with email/password and social login
- **Key Features**: Dashboard, progress tracking, collaboration tools, user management
- **Firebase Integration**: Auth, Firestore, Storage, Analytics, Web App Hosting
- **Security**: HTTP-only cookies, route protection middleware, role-based access
- **Environment Configuration**: Multi-environment support (development, production)

#### Shared Packages
- **Components**: Reusable UI components
- **Brand Assets**: Logos, colors, typography
- **Types**: TypeScript interfaces and types
- **Config**: Shared configuration and constants

#### Testing Infrastructure
- **Unit Tests**: Vitest with React Testing Library
- **E2E Tests**: Playwright with Page Object Model
- **CI/CD**: GitHub Actions for automated testing

## Level 3: Component Diagram (Portal App)

### Portal Components

```
┌─────────────────────────────────────────────────────────────────┐
│                         Portal App                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │    Auth      │  │  Dashboard   │  │   Learning    │        │
│  │  Component   │  │  Component   │  │   Modules     │        │
│  │              │  │              │  │               │        │
│  │ - Login     │  │ - Stats      │  │ - Tutorials   │        │
│  │ - Signup    │  │ - Charts     │  │ - Exercises   │        │
│  │ - OAuth     │  │ - Activity   │  │ - Projects    │        │
│  └──────────────┘  └──────────────┘  └──────────────┘        │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │   Progress   │  │   Social     │  │   Admin       │        │
│  │   Tracking   │  │  Features    │  │   Tools       │        │
│  │              │  │              │  │               │        │
│  │ - Metrics   │  │ - Forums     │  │ - User Mgmt   │        │
│  │ - Badges    │  │ - Chat       │  │ - Analytics   │        │
│  │ - Reports   │  │ - Teams      │  │ - Content     │        │
│  └──────────────┘  └──────────────┘  └──────────────┘        │
│                                                                 │
│  ┌─────────────────────────────────────────────────┐          │
│  │               Service Layer                      │          │
│  │                                                  │          │
│  │  - Firebase Auth Service                        │          │
│  │  - Firestore Data Service                       │          │
│  │  - Firebase Storage Service                     │          │
│  │  - Firebase Analytics Service                   │          │
│  │  - Cloud Functions Service                      │          │
│  └─────────────────────────────────────────────────┘          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Component Interactions
- Components communicate through React Context and props
- Service layer handles external API calls
- Shared state managed through contexts (Auth, Theme, etc.)

## Level 4: Code Structure

### Code Organization

```
apps/portal/src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Auth group routes
│   ├── (dashboard)/       # Dashboard routes
│   └── (errors)/          # Error pages
├── components/            # React components
│   ├── ui/               # Base UI components
│   ├── dashboard/        # Dashboard-specific
│   └── learning/         # Learning modules
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and helpers
├── services/             # API and service layer
└── types/                # TypeScript definitions
```

### Testing Structure

```
tests/
├── unit/                 # Unit tests (Vitest)
│   ├── components/      # Component tests
│   └── services/        # Service tests
├── integration/         # Integration tests
└── e2e/                 # E2E tests (Playwright)
    ├── specs/          # Test specifications
    ├── page-objects/   # Page Object Model
    └── fixtures/       # Test data
```

## Architectural Principles

### 1. Separation of Concerns
- Clear boundaries between marketing and portal
- Shared code in packages
- Service layer for external integrations

### 2. Educational First
- Code is written to be readable and learnable
- Comments explain business logic
- Progressive complexity in features
- Template patterns teach industry standards

### 3. Scalability
- Stateless components
- CDN-friendly marketing site
- Horizontal scaling for portal

### 4. Testability
- Components designed for testing
- Dependency injection where needed
- Mock-friendly service layer

## Security Considerations

### Authentication & Authorization
- **Firebase Authentication**: Multi-provider authentication (email/password, Google, GitHub, Facebook)
- **Session Management**: HTTP-only cookies with 5-day expiration and automatic renewal
- **JWT Tokens**: Firebase ID tokens for secure client-server communication
- **Role-Based Access Control**: Participant, mentor, and admin roles with granular permissions
- **Route Protection**: Next.js middleware validates sessions for protected routes
- **User Profiles**: Extended user data stored in Firestore with automatic profile creation
- **Password Security**: Firebase-managed password policies and reset functionality

### Data Protection
- HTTPS everywhere
- Environment variables for secrets
- Input validation and sanitization

### Compliance
- COPPA compliance for young users
- GDPR-ready data handling
- Privacy-first design

## Performance Targets

### Marketing Site
- Lighthouse score: >95
- First Contentful Paint: <1.5s
- Time to Interactive: <3s

### Portal App
- Initial load: <2s
- API response: <200ms
- 60fps animations

## Monitoring and Observability

### Application Monitoring
- Error tracking with Sentry
- Performance monitoring
- User analytics

### Infrastructure Monitoring
- Uptime monitoring
- Resource utilization
- Cost tracking

## Future Considerations

### Planned Enhancements
1. Mobile applications
2. Real-time collaboration features
3. AI-powered learning assistance
4. Advanced analytics dashboard

### Scalability Planning
- Microservices architecture consideration
- GraphQL API layer
- Edge computing for global performance

### Design System Evolution
- **Phase 1**: Template restoration with minimal branding
- **Phase 2**: AssemblyAI-inspired professional design (superseded)
- **Phase 3**: Citrus-themed vibrant design with OKLCH colors (current)
- Modern pricing component with monthly/yearly toggle
- Enhanced typography with Alexandria font family

### Deployment Evolution
- **Phase 1**: Local development with Firebase emulators
- **Phase 2**: Firebase static hosting for marketing site
- **Phase 3**: Firebase Web App Hosting for portal with automatic deployments (current)
  - Requires `apphosting.yaml` configuration file in repository root
  - Node.js 20 runtime with pnpm package management
  - Multi-environment configuration with seamless production deployment
  - Automatic GitHub integration with build and deploy pipeline
  - Production URL: https://summerbrainrot--summerbrainrot.us-central1.hosted.app

---

This C4 model will evolve as the platform grows and new requirements emerge.