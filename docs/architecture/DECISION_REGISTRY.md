# Architecture Decision Registry

This registry provides a quick reference to all Architecture Decision Records (ADRs) in the Summer Brain Rot project. ADRs document significant architectural decisions and their rationale.

## Decision Index

| ADR | Title | Status | Date | Category |
|-----|-------|--------|------|----------|
| [ADR-0001](decisions/0001-monorepo-structure.md) | Monorepo Structure for Summer Brain Rot | Accepted | 2025-01-06 | Architecture |
| [ADR-0002](decisions/0002-testing-infrastructure.md) | Testing Infrastructure with Vitest and Playwright | Accepted | 2025-01-06 | Testing |
| [ADR-0003](decisions/0003-firebase-platform.md) | Firebase Platform for Hosting and Backend Services | Accepted | 2025-01-06 | Platform |
| [ADR-0004](decisions/0004-template-pattern-restoration.md) | Template Pattern Restoration | Accepted | 2025-01-06 | UI/Design |

## Categories

### Architecture
- **ADR-0001**: Monorepo structure using npm workspaces for managing multiple applications

### Testing
- **ADR-0002**: Dual-framework approach with Vitest for unit tests and Playwright for E2E tests

### Platform & Infrastructure
- **ADR-0003**: Firebase platform for hosting, authentication, database, and storage

### UI/Design
- **ADR-0004**: Restore original template patterns with minimal brand customization

### Authentication (Planned)
- Coming soon: Cross-domain authentication strategy

### Deployment
- **ADR-0003**: Firebase multi-site hosting with automated deployment pipelines

## Decision Relationships

### Dependencies
- ADR-0002 (Testing) depends on ADR-0001 (Monorepo) for workspace configuration
- ADR-0003 (Firebase) depends on ADR-0001 (Monorepo) for multi-site configuration
- ADR-0004 (Template Patterns) relates to ADR-0001 (Monorepo) for template preservation

### Related Decisions
- Testing infrastructure (ADR-0002) influences CI/CD pipeline design
- Monorepo structure (ADR-0001) affects all future architectural decisions
- Firebase platform (ADR-0003) provides infrastructure for authentication and data storage
- Template patterns (ADR-0004) guides UI development and maintenance strategies

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