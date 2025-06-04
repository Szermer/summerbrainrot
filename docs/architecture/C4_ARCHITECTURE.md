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
- **Firebase**: Authentication, database, and hosting
- **Payment Provider**: Stripe/PayPal for program fees
- **Analytics**: Google Analytics, Mixpanel for usage tracking

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
- **Deployment**: CDN (Vercel/Netlify)
- **Purpose**: Public information, lead generation
- **Key Features**: SEO optimization, performance, MDX content

#### Portal App
- **Technology**: Next.js 15 with SSR
- **Deployment**: Node.js server (Vercel/Cloud Run)
- **Purpose**: Authenticated user experience
- **Key Features**: Dashboard, progress tracking, collaboration tools

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
│  │  - Authentication Service                        │          │
│  │  - Data Persistence Service                     │          │
│  │  - Analytics Service                            │          │
│  │  - Notification Service                         │          │
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

### 3. Scalability
- Stateless components
- CDN-friendly marketing site
- Horizontal scaling for portal

### 4. Testability
- Components designed for testing
- Dependency injection where needed
- Mock-friendly service layer

## Security Considerations

### Authentication
- Firebase Auth for secure authentication
- JWT tokens for session management
- Role-based access control (RBAC)

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

---

This C4 model will evolve as the platform grows and new requirements emerge.