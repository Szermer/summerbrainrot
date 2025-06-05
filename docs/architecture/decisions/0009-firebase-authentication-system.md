# ADR-0009: Firebase Authentication System Implementation

## Status
Accepted

## Date
2025-01-06

## Context
The Summer Brain Rot portal required a comprehensive authentication system to support participant, mentor, and administrator access. The platform needed to handle user registration, login, password management, and session management securely while integrating with the existing Firebase platform infrastructure.

Key requirements:
- **Multi-Role Support**: Participants, mentors, and admins with different access levels
- **Multiple Auth Methods**: Email/password and social authentication (Google, GitHub, Facebook)
- **Secure Session Management**: HTTP-only cookies for secure session handling
- **Password Recovery**: Email-based password reset functionality
- **User Profiles**: Integration with Firestore for extended user data
- **Route Protection**: Middleware-based access control for protected routes
- **Educational Context**: User-friendly for young entrepreneurs (age 13-18)

## Decision
We will implement Firebase Authentication as the primary authentication system for the portal application with the following architecture:

### Core Authentication Service
- **Firebase Client SDK**: For frontend authentication operations
- **Firebase Admin SDK**: For server-side token verification and session management
- **Custom Auth Service**: Wrapper around Firebase Auth with enhanced features
- **React Context Provider**: Global authentication state management

### Authentication Methods
1. **Email/Password Authentication**: Primary signup/login method
2. **Social Authentication**: Google, GitHub, Facebook integration
3. **Password Reset**: Email-based recovery with custom UI
4. **Session Persistence**: "Remember me" functionality with configurable persistence

### Security Implementation
- **HTTP-Only Cookies**: Secure session management via API routes
- **Session Verification**: Firebase Admin SDK validates session cookies
- **Route Protection**: Next.js middleware for protected route access
- **CSRF Protection**: Built-in Next.js CSRF protection
- **Environment Security**: Separate client and server environment variables

### User Profile Management
- **Firestore Integration**: Extended user profiles stored in Firestore
- **Role-Based Access**: Participant, mentor, admin roles
- **Onboarding State**: Track completion of user onboarding
- **User Settings**: Preferences for notifications, theme, etc.

## Implementation Details

### File Structure
```
apps/portal/src/
├── lib/firebase/
│   ├── client.ts          # Firebase client configuration
│   ├── admin.ts           # Firebase admin configuration  
│   └── auth.ts            # Authentication service layer
├── components/auth/
│   └── auth-provider.tsx  # React authentication context
├── app/(auth)/            # Authentication pages
│   ├── login/             # Login form with social options
│   ├── register/          # Registration form
│   └── forgot-password/   # Password reset form
├── app/api/auth/
│   └── session/           # Session management API
└── middleware.ts          # Route protection middleware
```

### Environment Configuration
```env
# Client-side Firebase config (public)
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=

# Server-side Firebase config (private)
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

### Authentication Flow
1. User accesses protected route
2. Middleware checks for session cookie
3. If no session, redirect to `/login`
4. User completes authentication form
5. Firebase Auth validates credentials
6. Create session cookie via API route
7. Redirect to intended destination
8. Subsequent requests authenticated via session cookie

### User Profile Schema
```typescript
interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  role: 'participant' | 'mentor' | 'admin';
  createdAt: Timestamp;
  updatedAt: Timestamp;
  onboardingComplete: boolean;
  settings: {
    notifications: boolean;
    theme: 'light' | 'dark' | 'system';
  };
}
```

## Consequences

### Positive
- **Robust Security**: Firebase Auth provides enterprise-grade security
- **Scalable**: Handles authentication for thousands of concurrent users
- **Multiple Auth Methods**: Supports social login reducing friction for young users
- **Integrated Ecosystem**: Seamless integration with existing Firebase infrastructure
- **Developer Experience**: Well-documented APIs and extensive React integration
- **Session Management**: Secure HTTP-only cookies prevent XSS attacks
- **Educational Value**: Exposes participants to industry-standard authentication patterns

### Negative
- **Firebase Dependency**: Tight coupling to Firebase ecosystem
- **Cost Implications**: Firebase pricing scales with user authentication volume
- **Learning Curve**: Team needs to understand Firebase Auth patterns and limitations
- **Social Auth Complexity**: Each social provider requires separate configuration
- **Admin SDK Complexity**: Server-side authentication requires careful environment management

### Neutral
- **Authentication State**: Global state management via React Context
- **Form Libraries**: Continues use of React Hook Form + Zod validation pattern
- **UI Components**: Authentication forms built with existing shadcn/ui components

## Technical Considerations

### Firebase Admin SDK Integration
- **Edge Runtime Limitations**: Admin SDK requires Node.js runtime (not Edge)
- **Dynamic Imports**: Load Firebase Admin dynamically in API routes
- **Environment Variables**: Secure handling of Firebase service account credentials
- **Session Cookie Management**: 5-day expiration with automatic renewal

### Route Protection Strategy
- **Client-Side Guards**: AuthProvider handles redirects and loading states
- **Server-Side Validation**: Middleware validates session cookies
- **Public Routes**: Login, register, forgot-password, error pages
- **Protected Routes**: All dashboard and application routes

### Error Handling
- **Firebase Error Codes**: Custom error message mapping for user-friendly feedback
- **Form Validation**: Real-time validation with Zod schemas
- **Network Errors**: Graceful handling of offline/network issues
- **Rate Limiting**: Firebase built-in protection against brute force attacks

## Educational Considerations
- **User-Friendly Errors**: Clear, actionable error messages for young users
- **Progressive Enhancement**: Works without JavaScript for basic functionality
- **Accessibility**: WCAG compliant authentication forms
- **Security Education**: Demonstrates secure authentication practices to participants

## Future Enhancements
- **Multi-Factor Authentication**: SMS or app-based 2FA for enhanced security
- **Single Sign-On**: Integration with school district authentication systems
- **Identity Verification**: Age verification for COPPA compliance
- **Advanced Analytics**: User behavior tracking for program optimization

## Related Decisions
- [ADR-0003: Firebase Platform](./0003-firebase-platform.md) - Platform choice enables authentication
- [ADR-0001: Monorepo Structure](./0001-monorepo-structure.md) - Authentication fits within portal app
- [ADR-0004: Template Pattern Restoration](./0004-template-pattern-restoration.md) - Auth UI follows template patterns

## Related Decisions
- [ADR-0011: Social Authentication Documentation](0011-social-authentication-documentation.md) - Configuration guides

## References
- [Firebase Authentication Documentation](https://firebase.google.com/docs/auth)
- [Next.js Authentication Patterns](https://nextjs.org/docs/authentication)
- [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup)
- [React Context Patterns](https://react.dev/reference/react/useContext)