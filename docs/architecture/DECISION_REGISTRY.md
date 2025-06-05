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
| [ADR-0010](decisions/0010-firebase-web-app-hosting-deployment.md) | Firebase Web App Hosting Deployment | Accepted | 2025-01-06 | Deployment |
| [ADR-0011](decisions/0011-social-authentication-documentation.md) | Social Authentication Documentation | Accepted | 2025-01-06 | Documentation |
| [ADR-0012](decisions/0012-template-customization-guidelines.md) | Template Customization Guidelines | Accepted | 2025-01-06 | Architecture |
| [ADR-0013](decisions/0013-domain-mapping-completion.md) | Domain Mapping Completion | Accepted | 2025-01-06 | Deployment |
| [ADR-0014](decisions/0014-portal-redirect-strategy.md) | Portal Redirect Strategy | Accepted | 2025-01-06 | Architecture |

## Categories

### Architecture
- **ADR-0001**: Monorepo structure using npm workspaces for managing multiple applications
- **ADR-0012**: Guidelines for customizing premium templates while maintaining quality
- **ADR-0014**: Server-side redirect strategy for portal authentication flow

### Testing
- **ADR-0002**: Dual-framework approach with Vitest for unit tests and Playwright for E2E tests

### Platform & Infrastructure
- **ADR-0003**: Firebase platform for hosting, authentication, database, and storage

### Authentication
- **ADR-0009**: Comprehensive Firebase authentication system with social login and session management
- **ADR-0011**: Documentation for configuring social authentication providers

### UI/Design
- **ADR-0004**: Restore original template patterns with minimal brand customization
- **ADR-0005**: Adopt AssemblyAI-inspired design system for modern, professional aesthetic (Superseded by ADR-0008)
- **ADR-0008**: Migrate to vibrant citrus-themed design system using OKLCH color space


### Deployment
- **ADR-0003**: Firebase multi-site hosting with automated deployment pipelines
- **ADR-0006**: Vercel deployment consideration (Superseded by ADR-0007)
- **ADR-0010**: Firebase Web App Hosting for portal application with GitHub integration
- **ADR-0013**: Custom domain mapping for production sites (summerbrainrot.com and .camp)

### Documentation
- **ADR-0011**: Comprehensive guides for social authentication configuration
- **ADR-0012**: Template customization patterns and best practices

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
- ADR-0010 (Web App Hosting) extends ADR-0003 (Firebase Platform) for portal deployment
- ADR-0011 (Social Auth Docs) documents configuration for ADR-0009 (Authentication)
- ADR-0012 (Template Guidelines) supports ADR-0004 (Template Patterns) and ADR-0001 (Monorepo)
- ADR-0013 (Domain Mapping) completes ADR-0003 (Firebase Platform) deployment configuration
- ADR-0014 (Portal Redirect) provides interim solution while ADR-0013 (Domain Mapping) is pending for portal

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