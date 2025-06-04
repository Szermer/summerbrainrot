# Architecture Decision Registry

This registry provides a quick reference to all Architecture Decision Records (ADRs) in the Summer Brain Rot project. ADRs document significant architectural decisions and their rationale.

## Decision Index

| ADR | Title | Status | Date | Category |
|-----|-------|--------|------|----------|
| [ADR-0001](decisions/0001-monorepo-structure.md) | Monorepo Structure for Summer Brain Rot | Accepted | 2025-01-06 | Architecture |
| [ADR-0002](decisions/0002-testing-infrastructure.md) | Testing Infrastructure with Vitest and Playwright | Accepted | 2025-01-06 | Testing |

## Categories

### Architecture
- **ADR-0001**: Monorepo structure using npm workspaces for managing multiple applications

### Testing
- **ADR-0002**: Dual-framework approach with Vitest for unit tests and Playwright for E2E tests

### Authentication (Planned)
- Coming soon: Cross-domain authentication strategy

### Deployment (Planned)
- Coming soon: Multi-environment deployment strategy

## Decision Relationships

### Dependencies
- ADR-0002 (Testing) depends on ADR-0001 (Monorepo) for workspace configuration

### Related Decisions
- Testing infrastructure (ADR-0002) influences CI/CD pipeline design
- Monorepo structure (ADR-0001) affects all future architectural decisions

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