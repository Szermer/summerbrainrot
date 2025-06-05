# 11. Social Authentication Documentation

Date: 2025-01-06

## Status

Accepted

## Context

The Summer Brain Rot portal application requires social authentication to provide users with convenient login options through Google, GitHub, and Facebook. While the implementation code was already present in the codebase (from ADR-0009), the configuration process for enabling these providers in Firebase Console was not documented.

### Current State

- Full social authentication implementation exists in the codebase
- Auth service supports Google, GitHub, and Facebook providers
- Login UI has social login buttons ready
- User profile creation in Firestore is handled
- Session management with HTTP-only cookies is implemented
- Protected routes and middleware are configured

### Missing Documentation

- How to enable providers in Firebase Console
- OAuth app creation process for GitHub and Facebook
- Callback URLs and authorized domains configuration
- Troubleshooting common issues
- Security considerations for OAuth apps

## Decision

Create comprehensive documentation for configuring social authentication providers in Firebase Console, including:

1. **Social Authentication Setup Guide** (`docs/SOCIAL_AUTH_SETUP.md`)
   - Step-by-step instructions for each provider
   - OAuth app creation guides
   - Troubleshooting section
   - Security considerations

2. **Firebase Quick Reference** (`docs/FIREBASE_QUICK_REFERENCE.md`)
   - Direct links to Firebase Console sections
   - OAuth callback URLs
   - Environment variables template
   - Testing checklist

## Consequences

### Positive

- **Self-Service Configuration**: Users can enable social auth without code changes
- **Educational Value**: Participants learn OAuth configuration process
- **Reduced Support**: Clear documentation reduces configuration questions
- **Security Awareness**: Guidelines help prevent common OAuth security issues
- **Testing Confidence**: Checklists ensure proper verification

### Negative

- **Maintenance Overhead**: Documentation must be updated with Firebase changes
- **Provider Changes**: OAuth provider interfaces may change over time
- **Multiple Steps**: Users must configure both Firebase and OAuth providers

### Neutral

- **External Dependencies**: Relies on Firebase Console and OAuth provider dashboards
- **Manual Process**: Configuration cannot be fully automated
- **Provider-Specific**: Each provider has unique requirements

## Implementation Details

### Documentation Structure

1. **Prerequisites Section**
   - Firebase Console access
   - Developer accounts for OAuth providers
   - Understanding of basic authentication concepts

2. **Provider-Specific Guides**
   - Google: Simplest setup, just enable in Firebase
   - GitHub: Requires OAuth app creation
   - Facebook: Requires Facebook app and review process

3. **Common Issues and Solutions**
   - Redirect URI mismatches
   - Domain authorization
   - Development vs production configuration

4. **Security Best Practices**
   - Client secret management
   - Domain restrictions
   - OAuth scope limitations

### Integration Points

- Links to existing Firebase authentication implementation (ADR-0009)
- References Firebase deployment configuration (ADR-0010)
- Supports both local development and production environments
- Compatible with Firebase Web App Hosting deployment

## Related Decisions

- [ADR-0003: Firebase Platform Selection](0003-firebase-platform.md) - Platform choice
- [ADR-0009: Firebase Authentication System](0009-firebase-authentication-system.md) - Auth implementation
- [ADR-0010: Firebase Web App Hosting Deployment](0010-firebase-web-app-hosting-deployment.md) - Deployment configuration

## References

- [Firebase Authentication Documentation](https://firebase.google.com/docs/auth)
- [OAuth 2.0 Specification](https://oauth.net/2/)
- [GitHub OAuth Apps](https://docs.github.com/en/developers/apps/building-oauth-apps)
- [Facebook Login](https://developers.facebook.com/docs/facebook-login)