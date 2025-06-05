# ADR-0010: Firebase Web App Hosting Deployment Configuration

## Status
Accepted

## Date
2025-01-06

## Context
The Summer Brain Rot portal required deployment to production with Firebase Web App Hosting. Initial attempts failed due to Firebase configuration mismatches and build-time environment variable issues. The portal needed to handle both development and production environments seamlessly while maintaining authentication functionality.

Key challenges:
- **Environment Variable Mismatch**: Local `.env.local` used different Firebase app ID than Web App Hosting
- **Build-time Firebase Initialization**: Firebase client attempting to initialize during static generation
- **Multi-environment Configuration**: Need to support both local development and Firebase Web App Hosting environments
- **Null Safety**: Firebase services needed proper null checks for build process
- **Missing Configuration File**: Firebase Web App Hosting requires `apphosting.yaml` in repository root

## Decision
We will implement a robust Firebase configuration system that handles multiple deployment environments with the following architecture:

### Environment-Aware Firebase Configuration
- **Primary**: Firebase Web App Hosting `FIREBASE_WEBAPP_CONFIG` environment variable
- **Fallback**: Local development `.env.local` environment variables
- **Build Safety**: Proper null checks and graceful degradation during build process

### Configuration Hierarchy
1. **Firebase Web App Hosting Environment**: `FIREBASE_WEBAPP_CONFIG` JSON from hosting platform
2. **Browser Environment**: Window-injected configuration for client-side
3. **Development Environment**: Standard `NEXT_PUBLIC_*` environment variables
4. **Build Process**: Graceful handling when no configuration is available

### Implementation Details
```typescript
// Multi-environment configuration detection
function getFirebaseConfig() {
  // Try Firebase Web App Hosting environment first
  if (typeof window !== 'undefined') {
    const windowWithFirebase = window as WindowWithFirebase;
    if (windowWithFirebase.FIREBASE_WEBAPP_CONFIG) {
      return JSON.parse(windowWithFirebase.FIREBASE_WEBAPP_CONFIG);
    }
  }
  
  // Try environment variable for Firebase Web App Hosting
  if (process.env.FIREBASE_WEBAPP_CONFIG) {
    return JSON.parse(process.env.FIREBASE_WEBAPP_CONFIG);
  }
  
  // Fallback to standard environment variables
  return {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    // ... other config
  };
}
```

### Build-Safe Service Initialization
```typescript
// Initialize Firebase only if we have a valid config
let app: FirebaseApp | null = null;
try {
  app = !getApps().length && firebaseConfig.apiKey ? 
    initializeApp(firebaseConfig) : getApp();
} catch (error) {
  console.warn('Failed to initialize Firebase:', error);
}

// Initialize services with null safety
export const auth: Auth | null = app ? getAuth(app) : null;
export const db: Firestore | null = app ? getFirestore(app) : null;
```

## Consequences

### Positive
- **Multi-Environment Support**: Seamless operation in development, staging, and production
- **Build Reliability**: No more build failures due to missing Firebase configuration
- **Automatic Configuration**: Firebase Web App Hosting automatically provides correct config
- **Graceful Degradation**: Application continues to function even with partial Firebase setup
- **Type Safety**: Full TypeScript support with proper null checking
- **Developer Experience**: Local development unchanged, production "just works"

### Negative
- **Complexity**: Additional configuration logic increases codebase complexity
- **Multiple Code Paths**: Different initialization paths may lead to subtle bugs
- **Error Handling**: More extensive error handling required throughout auth service
- **Testing Complexity**: Need to test multiple configuration scenarios

### Neutral
- **Environment Variables**: Still requires proper local environment setup for development
- **Firebase Dependencies**: Maintains dependency on Firebase platform architecture
- **Build Process**: Requires understanding of Next.js static generation lifecycle

## Implementation Strategy

### Phase 1: Configuration System
- ✅ Implement multi-environment configuration detection
- ✅ Add proper TypeScript types for all configuration paths
- ✅ Ensure backward compatibility with existing development setup

### Phase 2: Service Initialization
- ✅ Add null safety to all Firebase service exports
- ✅ Update authentication service with null checks
- ✅ Implement graceful error handling throughout

### Phase 3: Deployment Integration
- ✅ Configure Firebase Web App Hosting with correct app ID
- ✅ Create `apphosting.yaml` configuration file in repository root
- ✅ Test automatic deployment from GitHub main branch
- ✅ Verify production authentication functionality

### Firebase Web App Hosting Configuration
The deployment requires an `apphosting.yaml` file in the repository root:

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

This configuration:
- Specifies Node.js 20 runtime for optimal performance
- Points to the portal app in the monorepo structure
- Uses pnpm as the package manager (matching the portal template)
- Outputs the Next.js build to the `.next` directory

## Technical Considerations

### Firebase App ID Alignment
- **Local Development**: `1:247635489801:web:e94c7065fe85fc6b6734d8`
- **Production**: Same app ID via `FIREBASE_WEBAPP_CONFIG`
- **Consistency**: Ensures seamless authentication across environments

### Build Process Optimization
- **Static Generation**: Error pages and auth pages build successfully
- **Dynamic Routes**: Protected routes maintain authentication requirements
- **Performance**: No impact on runtime performance with null checks

### Error Boundaries
- **Development**: Console warnings for missing configuration
- **Production**: Silent fallbacks with monitoring integration
- **Authentication**: Clear error messages for users when services unavailable

## Monitoring and Observability

### Success Metrics
- ✅ Build success rate: 100% (previously failing)
- ✅ Deployment automation: Fully automated from GitHub
- ✅ Authentication functionality: Working in production
- ✅ Configuration detection: Multi-environment support verified

### Failure Scenarios
- **Network Issues**: Firebase initialization failures handled gracefully
- **Configuration Missing**: Clear error messages and fallback behavior
- **Build Process**: No longer blocks on missing environment variables

## Related Decisions
- [ADR-0003: Firebase Platform](./0003-firebase-platform.md) - Platform choice enables Web App Hosting
- [ADR-0009: Firebase Authentication System](./0009-firebase-authentication-system.md) - Authentication implementation that requires this deployment
- [ADR-0001: Monorepo Structure](./0001-monorepo-structure.md) - Portal deployment within monorepo structure
- [ADR-0014: Portal Redirect Strategy](./0014-portal-redirect-strategy.md) - Handles portal access until domain configured

## References
- [Firebase Web App Hosting Documentation](https://firebase.google.com/docs/hosting/frameworks)
- [Next.js Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)
- [Firebase Configuration](https://firebase.google.com/docs/web/setup)
- [Static Generation Considerations](https://nextjs.org/docs/app/building-your-application/rendering/static-exports)