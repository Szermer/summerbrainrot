# ADR-0003: Firebase Platform for Hosting and Backend Services

Date: 2025-01-06

## Status

Accepted

## Context

The Summer Brain Rot platform requires a comprehensive hosting and backend solution that supports:
- Multi-site hosting for marketing (summerbrainrot.com) and portal (summerbrainrot.camp) domains
- Real-time data synchronization for collaborative features
- User authentication and authorization
- File storage for user-generated content
- Scalable infrastructure that can grow with the platform
- Educational value - participants should learn industry-standard cloud services

## Decision

We will use Firebase as our primary platform for hosting and backend services with the following configuration:

1. **Firebase Hosting** with multi-site setup:
   - Marketing site: Static export hosted on `summerbrainrot.com`
   - Portal app: SSR via Firebase Framework Hosting on `summerbrainrot.camp`

2. **Firebase Services**:
   - Firestore: NoSQL database for user data, projects, and progress tracking
   - Authentication: Google and email/password sign-in methods
   - Storage: User uploads, project files, and portfolio assets
   - Analytics: User behavior tracking and learning outcome measurement
   - Functions: Server-side business logic and automation

3. **Security Model**:
   - Role-based access control (participants, mentors, admins)
   - Granular Firestore rules for data protection
   - Storage rules for file access control

## Consequences

### Positive
- **Unified Platform**: All services under one provider simplifies management
- **Real-time Features**: Built-in support for collaborative features
- **Scalability**: Automatic scaling handles growth from MVP to production
- **Developer Experience**: Excellent local emulator suite for development
- **Educational Value**: Industry-standard platform teaches cloud architecture
- **Cost Efficiency**: Generous free tier suitable for MVP phase
- **Security**: Enterprise-grade security with minimal configuration

### Negative
- **Vendor Lock-in**: Tied to Google Cloud ecosystem
- **Learning Curve**: Participants need to learn Firebase-specific patterns
- **Limited Customization**: Some features may require workarounds
- **Cold Starts**: Cloud Functions may have latency on first invocation

### Neutral
- **NoSQL Database**: Different paradigm from traditional SQL databases
- **Google Account Requirement**: Admin SDK requires Google Cloud account
- **Framework Limitations**: SSR support is relatively new in Firebase

## Implementation Details

1. **Project Structure**:
   ```
   firebase.json          # Multi-site hosting configuration
   .firebaserc           # Project aliases and targets
   firestore.rules       # Database security rules
   firestore.indexes.json # Database performance indexes
   storage.rules         # File storage security rules
   ```

2. **Environment Configuration**:
   - Shared Firebase project across both sites
   - Environment variables for API keys and configuration
   - Service account for server-side operations

3. **Deployment Pipeline**:
   - Automated deployments via npm scripts
   - GitHub Actions integration for CI/CD
   - Separate deployment targets for marketing and portal

## Related Decisions
- [ADR-0001: Monorepo Structure](./0001-monorepo-structure.md) - Firebase configuration shared across apps
- [ADR-0002: Testing Infrastructure](./0002-testing-infrastructure.md) - Firebase emulators for testing

## References
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Hosting Multi-site Guide](https://firebase.google.com/docs/hosting/multisites)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
- [Firebase Framework Hosting](https://firebase.google.com/docs/hosting/frameworks/nextjs)