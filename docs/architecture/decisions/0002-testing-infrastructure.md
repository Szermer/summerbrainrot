# ADR-0002: Testing Infrastructure with Vitest and Playwright

**Status**: Accepted  
**Date**: 2025-01-06  
**Deciders**: Development Team

## Context

Summer Brain Rot requires a robust testing infrastructure that:
1. Supports both unit/integration testing and end-to-end testing
2. Works seamlessly with our monorepo structure
3. Provides educational value for participants learning testing best practices
4. Integrates well with our CI/CD pipeline
5. Offers good developer experience with fast feedback loops

We evaluated several testing frameworks and approaches based on successful implementations in similar projects, particularly the pvtlng project which demonstrated excellent testing practices.

## Decision

We will adopt a dual-framework approach:
- **Vitest** for unit and integration testing
- **Playwright** for end-to-end testing

### Testing Stack:
- **Unit/Integration**: Vitest + React Testing Library
- **E2E**: Playwright with Page Object Model
- **Coverage**: Vitest coverage with 80% threshold
- **CI/CD**: GitHub Actions with parallel test execution

## Rationale

### Why Vitest over Jest?

1. **Performance**: Vitest is 4x faster than Jest with native ESM support
2. **Configuration**: Zero-config with Vite, which aligns with modern tooling
3. **DX**: Better watch mode, UI mode, and TypeScript support out of the box
4. **Compatibility**: Drop-in replacement for Jest with familiar API
5. **Educational**: Teaches modern testing tools used in industry

### Why Playwright over Cypress/Puppeteer?

1. **Multi-browser**: Native support for Chromium, Firefox, and WebKit
2. **Auto-waiting**: Intelligent waiting reduces flaky tests
3. **Parallel execution**: Built-in test sharding for CI/CD
4. **Mobile testing**: Native mobile viewport testing
5. **Developer tools**: Excellent debugging with trace viewer and UI mode
6. **Cross-domain**: Handles our multi-app architecture (marketing + portal)

### Why Page Object Model?

1. **Maintainability**: Changes to UI require updates in one place
2. **Reusability**: Common interactions are encapsulated
3. **Readability**: Tests read like user stories
4. **Educational**: Industry-standard pattern for E2E tests

### Alternative Considered: Jest + Cypress

**Pros:**
- More established in the ecosystem
- Larger community
- More learning resources

**Cons:**
- Slower test execution
- More complex configuration
- Cypress limitations with multi-domain testing
- Higher resource usage

## Consequences

### Positive
- Fast test execution improves developer productivity
- Modern tooling attracts contributors
- Excellent debugging capabilities
- Comprehensive test coverage across browsers
- Educational value with industry-standard tools
- Better CI/CD performance with parallel execution

### Negative
- Two different testing frameworks to learn
- Vitest is newer with smaller community
- Some Jest plugins may not be compatible
- Initial setup complexity for E2E tests

### Neutral
- Requires Node.js 18+ (already our minimum)
- Different configuration files for each framework
- Need to maintain test utilities for both frameworks

## Implementation

1. **Unit/Integration Testing Setup**:
   - Configure Vitest with React Testing Library
   - Set up global test utilities and mocks
   - Create testing guidelines documentation
   - Implement coverage thresholds

2. **E2E Testing Setup**:
   - Configure Playwright for multi-browser testing
   - Implement Page Object Model structure
   - Create test fixtures for common scenarios
   - Set up visual regression testing

3. **CI/CD Integration**:
   - Parallel test execution in GitHub Actions
   - Test sharding for E2E tests
   - Coverage reporting to Codecov
   - Performance budgets with Lighthouse

4. **Developer Experience**:
   - Pre-commit hooks for affected tests
   - VS Code integration for debugging
   - Test documentation and examples
   - Interactive UI modes for both frameworks

## Educational Considerations

This testing infrastructure provides learning opportunities in:
- Test-Driven Development (TDD) practices
- Different testing levels (unit, integration, E2E)
- Industry-standard testing patterns
- Performance testing and optimization
- CI/CD pipeline configuration
- Test automation best practices

## Monitoring and Review

We will monitor:
- Test execution time trends
- Flaky test frequency
- Coverage metrics
- Developer satisfaction
- Educational effectiveness

Review this decision after:
- 6 months of active use
- 100+ tests written
- Onboarding 20+ participants

## Related ADRs

- [ADR-0001](0001-monorepo-structure.md): Monorepo Structure - Provides workspace configuration for test infrastructure
- [ADR-0003](0003-firebase-platform.md): Firebase Platform - Firebase emulators integrate with test suite

## References

- [Vitest Documentation](https://vitest.dev/)
- [Playwright Documentation](https://playwright.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Page Object Model Pattern](https://martinfowler.com/bliki/PageObject.html)
- Related ADRs: ADR-0001 (Monorepo Structure)