# ADR-0007: React Version Downgrade to Fix Build Issues

## Status
Accepted

## Date
2025-01-06

## Context
The marketing site was experiencing persistent build failures with React error #31 (Objects are not valid as a React child). This error was blocking the deployment of the AssemblyAI-inspired design system updates.

Investigation revealed:
- The project had React 19.1.0 installed while package.json specified React 18.3.1
- React 19 introduced breaking changes incompatible with Radix UI's `asChild` pattern
- The Streamline template's extensive use of `asChild` props made wholesale refactoring impractical
- Both Next.js and Astro versions of the template experienced the same issue

## Decision
Downgrade React and React DOM to version 18.3.1 to match the template's requirements:
```bash
npm install react@18.3.1 react-dom@18.3.1 --save-exact
```

This allows us to:
1. Keep the existing template code unchanged
2. Deploy immediately with the new design system
3. Maintain compatibility with all Radix UI components
4. Stay on Firebase Hosting as originally planned

## Consequences

### Positive
- **Immediate Resolution**: Build errors resolved without code changes
- **Template Integrity**: Original template patterns remain intact
- **Time Savings**: No need to refactor dozens of components
- **Firebase Continuity**: Can continue with original hosting plan
- **Design Deployment**: AssemblyAI styling now successfully deployed

### Negative
- **Version Lock**: Pinned to React 18.3.1 until template is updated
- **Future Upgrades**: Will need careful migration strategy for React 19
- **Feature Limitations**: Cannot use React 19's new features

### Neutral
- **Dependency Management**: Must ensure all React-related packages stay compatible
- **Documentation**: Need to document version requirements clearly

## Implementation Details

### Package.json Update
```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}
```

### Verification Steps
1. Clear node_modules and package-lock.json
2. Run `npm install react@18.3.1 react-dom@18.3.1 --save-exact`
3. Build with `npm run build`
4. Deploy with `firebase deploy --only hosting:marketing`

## Related Decisions
- [ADR-0005: AssemblyAI Design System](./0005-assemblyai-design-system.md) - Design updates that needed deployment
- [ADR-0006: Vercel Deployment](./0006-vercel-deployment.md) - Alternative approach considered but not needed

## References
- [React 19 Breaking Changes](https://react.dev/blog/2024/12/05/react-19)
- [Radix UI asChild Pattern](https://www.radix-ui.com/primitives/docs/guides/composition)
- [Next.js 15 Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)