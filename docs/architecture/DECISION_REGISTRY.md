# Architecture Decision Registry

This registry provides a quick reference to all Architecture Decision Records (ADRs) in the Summer Brain Rot project. ADRs document significant architectural decisions and their rationale.

## Decision Index

| ADR | Title | Status | Date | Category |
|-----|-------|--------|------|----------|
| [ADR-0001](decisions/0001-monorepo-structure.md) | Monorepo Structure for Summer Brain Rot | Accepted | 2025-01-06 | Architecture |
| [ADR-0002](decisions/0002-testing-infrastructure.md) | Testing Infrastructure with Vitest and Playwright | Accepted | 2025-01-06 | Testing |
| [ADR-0003](decisions/0003-firebase-platform.md) | Firebase Platform for Hosting and Backend Services | Accepted | 2025-01-06 | Platform |
| [ADR-0004](decisions/0004-template-pattern-restoration.md) | Template Pattern Restoration | Accepted | 2025-01-06 | UI/Design |
| [ADR-0005](decisions/0005-assemblyai-design-system.md) | AssemblyAI-Inspired Design System | Superseded | 2025-01-06 | UI/Design |
| [ADR-0006](decisions/0006-vercel-deployment.md) | Migration to Vercel for Marketing Site Deployment | Superseded | 2025-01-06 | Deployment |
| [ADR-0007](decisions/0007-react-version-fix.md) | React Version Downgrade to Fix Build Issues | Accepted | 2025-01-06 | Dependencies |
| [ADR-0008](decisions/0008-citrus-design-system.md) | Citrus-Themed Design System | Accepted | 2025-01-06 | UI/Design |
| [ADR-0009](decisions/0009-firebase-authentication-system.md) | Firebase Authentication System Implementation | Accepted | 2025-01-06 | Authentication |

## Categories

### Architecture
- **ADR-0001**: Monorepo structure using npm workspaces for managing multiple applications

### Testing
- **ADR-0002**: Dual-framework approach with Vitest for unit tests and Playwright for E2E tests

### Platform & Infrastructure
- **ADR-0003**: Firebase platform for hosting, authentication, database, and storage

### Authentication
- **ADR-0009**: Comprehensive Firebase authentication system with social login and session management

### UI/Design
- **ADR-0004**: Restore original template patterns with minimal brand customization
- **ADR-0005**: Adopt AssemblyAI-inspired design system for modern, professional aesthetic (Superseded by ADR-0008)
- **ADR-0008**: Migrate to vibrant citrus-themed design system using OKLCH color space


### Deployment
- **ADR-0003**: Firebase multi-site hosting with automated deployment pipelines
- **ADR-0006**: Vercel deployment consideration (Superseded by ADR-0007)

### Dependencies
- **ADR-0007**: React 18.3.1 version lock to resolve build compatibility issues

## Decision Relationships

### Dependencies
- ADR-0002 (Testing) depends on ADR-0001 (Monorepo) for workspace configuration
- ADR-0003 (Firebase) depends on ADR-0001 (Monorepo) for multi-site configuration
- ADR-0004 (Template Patterns) relates to ADR-0001 (Monorepo) for template preservation
- ADR-0005 (Design System) builds upon ADR-0004 (Template Patterns) while enhancing visual design
- ADR-0007 (React Version) supersedes ADR-0006 (Vercel) by fixing the root cause
- ADR-0008 (Citrus Design) supersedes ADR-0005 (AssemblyAI) with more vibrant branding
- ADR-0009 (Authentication) builds on ADR-0003 (Firebase Platform) for authentication services

### Related Decisions
- Testing infrastructure (ADR-0002) influences CI/CD pipeline design
- Monorepo structure (ADR-0001) affects all future architectural decisions
- Firebase platform (ADR-0003) provides infrastructure for authentication and data storage
- Template patterns (ADR-0004) guides UI development and maintenance strategies
- Design system (ADR-0005) enhances template patterns with professional aesthetics
- Authentication system (ADR-0009) provides security foundation for all portal features

## Review Schedule

Decisions should be reviewed:
- After significant changes to requirements
- When performance or scalability issues arise
- During quarterly architecture reviews
- Before major version releases

## Making New Decisions

When creating new ADRs:
1. Use the next sequential number
2. Follow the standard ADR template
3. Update this registry
4. Cross-link related ADRs
5. Consider educational impact

## Educational Context

These decisions serve dual purposes:
1. **Technical**: Guide development and maintain consistency
2. **Educational**: Teach participants about architectural thinking and decision-making

Each ADR includes an "Educational Considerations" section to highlight learning opportunities.