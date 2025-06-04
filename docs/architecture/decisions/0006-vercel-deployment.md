# ADR-0006: Migration to Vercel for Marketing Site Deployment

## Status
Superseded by [ADR-0007: React Version Fix](./0007-react-version-fix.md)

## Date
2025-01-06

## Context
The marketing site deployment to Firebase Hosting as a static export was encountering persistent build failures with React error #31 (object as React child). This error appears to be related to Next.js 15 compatibility issues with the Button component's `asChild` prop pattern used throughout the Streamline template.

Key issues:
- Static export builds failing on error page generation
- React 19 compatibility issues with Radix UI components
- Limited debugging capability with minified production errors
- Build process blocking deployment of styling updates

## Decision
Migrate the marketing site deployment from Firebase Hosting (static export) to Vercel's platform, which provides:
1. Native Next.js support without requiring static export
2. Better error handling and build compatibility
3. Automatic deployments from Git
4. Edge functions and serverless capabilities

**Backend Strategy**: Continue using Firebase for authentication, database, and storage while using Vercel for hosting. This hybrid approach leverages the strengths of both platforms.

## Consequences

### Positive
- **Immediate Deployment**: Can deploy without fixing template compatibility issues
- **Better DX**: Native Next.js support with automatic optimizations
- **No Static Export**: Supports SSR, ISR, and dynamic routes
- **Git Integration**: Automatic preview deployments on PRs
- **Performance**: Edge network and optimized serving
- **Error Recovery**: More graceful handling of build issues

### Negative
- **Additional Platform**: One more service to manage
- **Cost Considerations**: Potential costs at scale (though free tier is generous)
- **Configuration Split**: Deployment config now split between platforms

### Neutral
- **Domain Management**: Need to update DNS from Firebase to Vercel
- **Environment Variables**: Need to sync between platforms
- **CI/CD Changes**: GitHub Actions may need updates

## Implementation Details

### Vercel Configuration
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "regions": ["iad1"]
}
```

### Architecture Impact
- Marketing site: Vercel (summerbrainrot.com)
- Portal app: Can remain on Firebase or also migrate
- Backend services: Firebase (Auth, Firestore, Storage)
- No changes to application code required

## Future Considerations

### Supabase Evaluation
While maintaining Firebase for now, we should evaluate Supabase for v2 when we need:
- Row-level security for multi-tenant data
- SQL database capabilities
- More control over auth flows
- Better TypeScript integration

### Portal Deployment
The portal app can remain on Firebase Framework Hosting or also migrate to Vercel based on similar build success criteria.

## Related Decisions
- [ADR-0003: Firebase Platform](./0003-firebase-platform.md) - Backend services remain on Firebase
- [ADR-0005: AssemblyAI Design System](./0005-assemblyai-design-system.md) - Styling updates that prompted deployment urgency

## References
- [Vercel Next.js Documentation](https://vercel.com/docs/frameworks/nextjs)
- [Firebase + Vercel Integration Guide](https://vercel.com/guides/using-firebase-with-vercel)
- [React Error #31](https://react.dev/errors/31) - Root cause of build failures