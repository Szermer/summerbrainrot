# 14. Portal Redirect Strategy

Date: 2025-01-06

## Status

Accepted

## Context

The Summer Brain Rot platform consists of two separate applications:
- Marketing site (summerbrainrot.com) - Static Next.js site for public information
- Portal application (summerbrainrot.camp) - SSR Next.js app for authenticated users

The marketing site includes navigation links for "Login", "Sign up", and "Apply Now" that need to direct users to the portal application. However, the portal is currently deployed to Firebase Web App Hosting with a temporary URL while the custom domain configuration is pending.

### Current Situation

- Marketing site is live at summerbrainrot.com
- Portal is accessible at summerbrainrot--summerbrainrot.us-central1.hosted.app
- Custom domain summerbrainrot.camp shows "Site Not Found" (configuration pending)
- Users clicking login/signup on marketing site get 404 errors

## Decision

Implement server-side redirects from marketing site authentication pages to the portal application:

1. Convert marketing `/login`, `/signup`, and `/apply` pages to redirect components
2. Use Next.js `redirect()` function for server-side redirects
3. Create centralized portal configuration for easy URL management
4. Maintain redirect pages until custom domain is configured

### Implementation Details

```typescript
// apps/marketing/src/config/portal.ts
export const PORTAL_URL = 'https://summerbrainrot--summerbrainrot.us-central1.hosted.app';
export const PORTAL_ROUTES = {
  login: `${PORTAL_URL}/login`,
  register: `${PORTAL_URL}/register`,
  dashboard: `${PORTAL_URL}`,
};

// apps/marketing/src/app/login/page.tsx
import { redirect } from 'next/navigation';
import { PORTAL_ROUTES } from '@/config/portal';

export default function Login() {
  redirect(PORTAL_ROUTES.login);
}
```

## Consequences

### Positive

- **Immediate Solution**: Users can access portal authentication without waiting for domain configuration
- **Seamless Experience**: Server-side redirects are instant and transparent
- **Maintainable**: Centralized configuration makes future URL updates simple
- **SEO Friendly**: Proper HTTP redirects maintain search engine understanding
- **User Friendly**: No broken links or error pages for users

### Negative

- **Temporary URLs**: Users see the Web App Hosting URL instead of custom domain
- **Extra Hop**: Adds a redirect step in the user journey
- **Maintenance**: Requires updating when custom domain is configured

### Neutral

- **Deployment**: Marketing site needs redeployment for redirect changes
- **Testing**: Redirect behavior needs monitoring
- **Documentation**: Team needs awareness of redirect strategy

## Alternatives Considered

1. **Client-Side Navigation**: Use JavaScript to redirect
   - Rejected: Slower, not SEO-friendly, requires JavaScript

2. **Remove Auth Pages**: Remove login/signup from marketing site
   - Rejected: Would break user expectations and navigation flow

3. **Proxy Configuration**: Configure Firebase Hosting to proxy to portal
   - Rejected: More complex, requires additional Firebase configuration

4. **Wait for Domain**: Keep broken links until domain is configured
   - Rejected: Poor user experience, blocks user access

## Implementation Checklist

- [x] Create portal configuration file
- [x] Implement redirect pages for login, signup, apply
- [x] Test redirects work correctly
- [x] Deploy to Firebase Hosting
- [x] Verify social authentication options available
- [x] Document deployment status

## Future Migration

When summerbrainrot.camp custom domain is configured:

1. Update `PORTAL_URL` in configuration
2. Rebuild and redeploy marketing site
3. Consider keeping redirects for backward compatibility
4. Update documentation and user communications

## Related Decisions

- [ADR-0003: Firebase Platform](0003-firebase-platform.md) - Platform architecture
- [ADR-0010: Firebase Web App Hosting](0010-firebase-web-app-hosting-deployment.md) - Portal deployment
- [ADR-0013: Domain Mapping](0013-domain-mapping-completion.md) - Custom domain configuration

## References

- [Next.js Redirects](https://nextjs.org/docs/app/building-your-application/routing/redirecting)
- [Firebase Web App Hosting](https://firebase.google.com/docs/hosting/web-app-hosting)
- [HTTP Redirect Best Practices](https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections)