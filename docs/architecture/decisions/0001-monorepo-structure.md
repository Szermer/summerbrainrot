# ADR-0001: Monorepo Structure for Summer Brain Rot

**Status**: Accepted  
**Date**: 2025-01-06  
**Deciders**: Development Team

## Context

Summer Brain Rot requires two distinct web applications:
1. A marketing site for public information and applications (summerbrainrot.com)
2. A participant portal for authenticated users (summerbrainrot.camp)

These applications share branding, components, and business logic while maintaining separate deployment targets and feature sets. We need a structure that supports code sharing, independent deployment, and educational clarity.

## Decision

We will use a monorepo structure with npm workspaces to manage both applications and shared packages.

### Structure:
```
summerbrainrot/
├── apps/
│   ├── marketing/          # Static marketing site
│   └── portal/            # Dynamic participant portal
├── packages/
│   ├── shared-components/ # Shared UI components
│   ├── brand-assets/      # Logos, colors, fonts
│   ├── types/            # TypeScript definitions
│   └── config/           # Shared configuration
└── tools/                # Build and deployment scripts
```

## Rationale

### Why Monorepo?

1. **Code Sharing**: Easily share components, types, and utilities between applications
2. **Consistent Branding**: Single source of truth for brand assets
3. **Atomic Changes**: Update shared code and both apps in one commit
4. **Educational Value**: Participants learn modern monorepo practices
5. **Simplified Dependencies**: Manage versions in one place

### Why This Structure?

1. **Clear Separation**: Apps are clearly separated from shared code
2. **Scalability**: Easy to add new apps or packages
3. **Industry Standard**: Follows patterns used by major tech companies
4. **Tool Support**: Works well with Vercel, Netlify, and other platforms

### Alternative Considered: Separate Repositories

**Pros:**
- Simpler individual setup
- Independent versioning
- Smaller clone size

**Cons:**
- Difficult to share code
- Version synchronization issues
- Multiple PRs for related changes
- Harder to maintain consistency

## Consequences

### Positive
- Unified development experience
- Easier code sharing and reuse
- Single CI/CD pipeline
- Better for educational purposes (see everything in one place)
- Simplified dependency management

### Negative
- Initial setup complexity
- Larger repository size
- Need to understand workspace concepts
- Potential for accidental cross-dependencies

### Neutral
- Requires workspace-aware tooling
- Different package managers per app (respecting template defaults)
- Need clear boundaries between packages

## Implementation

1. Set up npm workspaces in root `package.json`
2. Configure TypeScript with project references
3. Set up shared build commands
4. Configure CI/CD for monorepo
5. Document workspace commands in README

## Educational Considerations

This decision provides learning opportunities in:
- Modern JavaScript tooling
- Dependency management
- Code organization at scale
- Cross-project collaboration
- Build optimization strategies

## Review Schedule

Review this decision after:
- 3 months of active development
- Onboarding 10+ participants
- Reaching 50+ components

## Related ADRs

- [ADR-0002](0002-testing-infrastructure.md): Testing Infrastructure - Leverages monorepo structure for shared test utilities
- [ADR-0003](0003-firebase-platform.md): Firebase Platform - Multi-site hosting configuration benefits from monorepo structure

## References

- [npm Workspaces Documentation](https://docs.npmjs.com/cli/v7/using-npm/workspaces)
- [Monorepo Explained](https://monorepo.tools/)
- [Vercel Monorepo Guide](https://vercel.com/docs/concepts/monorepos)