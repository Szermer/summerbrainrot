# Testing Guide for Summer Brain Rot

This guide outlines testing standards and practices for the Summer Brain Rot codebase, emphasizing educational value while maintaining professional quality.

## Testing Philosophy

### The Perfect Commit

Every commit should include:

1. **Implementation** - The actual code change
2. **Tests** - Automated tests proving the implementation works
3. **Documentation** - Updated docs reflecting the change
4. **Educational Context** - Comments explaining the "why" for learners

### Testing Pyramid

We follow the testing pyramid approach:

- **Unit Tests** (70%) - Fast, isolated component tests
- **Integration Tests** (20%) - Testing module interactions
- **E2E Tests** (10%) - Full user journey validation

## Test Setup

### Installation

```bash
# Install testing dependencies
npm install --save-dev vitest @testing-library/react @testing-library/user-event @playwright/test

# Install Playwright browsers
npx playwright install
```

### Configuration Files

- `vitest.config.ts` - Unit and integration test configuration
- `playwright.config.ts` - E2E test configuration
- `tests/setup.ts` - Global test setup and mocks

## Writing Tests

### Unit Tests with Vitest

#### Component Testing Example

```typescript
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '@/components/ui/button';

describe('Button Component', () => {
  it('should handle click events', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick}>Click me</Button>);
    
    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('should be disabled when specified', () => {
    render(<Button disabled>Disabled Button</Button>);
    
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

#### Hook Testing Example

```typescript
import { renderHook, act } from '@testing-library/react';
import { useCounter } from '@/hooks/useCounter';

describe('useCounter Hook', () => {
  it('should increment counter', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(1);
  });
});
```

### Integration Tests

#### Firebase Integration Example

```typescript
import { describe, it, expect, beforeAll } from 'vitest';
import { initializeTestApp, clearFirestoreData } from '@firebase/rules-unit-testing';

describe('Firestore Rules', () => {
  let db: any;
  
  beforeAll(async () => {
    db = initializeTestApp({
      projectId: 'summer-brain-rot-test',
      auth: { uid: 'test-user', email: 'test@summerbrainrot.test' }
    }).firestore();
  });

  it('should allow authenticated users to read their data', async () => {
    const doc = db.collection('users').doc('test-user');
    await expect(doc.get()).resolves.toBeDefined();
  });

  it('should deny unauthenticated access', async () => {
    const unauthedDb = initializeTestApp({
      projectId: 'summer-brain-rot-test'
    }).firestore();
    
    const doc = unauthedDb.collection('users').doc('test-user');
    await expect(doc.get()).rejects.toThrow();
  });
});
```

### E2E Tests with Playwright

#### Page Object Pattern

```typescript
// tests/e2e/page-objects/DashboardPage.ts
import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToTasks() {
    await this.page.getByRole('link', { name: 'Tasks' }).click();
    await this.waitForURL('/tasks');
  }

  async getStatCardValue(cardTitle: string): Promise<string> {
    const card = this.page.locator('.stat-card').filter({ hasText: cardTitle });
    return await card.locator('.stat-value').textContent() || '';
  }

  async expectWelcomeMessage(userName: string) {
    await this.page.getByText(`Welcome back, ${userName}`).waitFor();
  }
}
```

#### E2E Test Example

```typescript
import { test, expect } from '../fixtures/test-fixtures';

test.describe('Dashboard', () => {
  test('displays user statistics', async ({ dashboardPage, authenticatedPage }) => {
    await dashboardPage.goto('/dashboard');
    
    // Check stats cards
    const tasksCount = await dashboardPage.getStatCardValue('Active Tasks');
    expect(parseInt(tasksCount)).toBeGreaterThanOrEqual(0);
    
    // Check welcome message
    await dashboardPage.expectWelcomeMessage('Test User');
  });

  test('navigation works correctly', async ({ dashboardPage, page }) => {
    await dashboardPage.goto('/dashboard');
    
    // Navigate to tasks
    await dashboardPage.navigateToTasks();
    await expect(page).toHaveURL('/tasks');
    
    // Check breadcrumbs
    await expect(page.getByRole('navigation', { name: 'breadcrumb' }))
      .toContainText('Dashboard / Tasks');
  });
});
```

## Test Organization

```
tests/
├── unit/                    # Unit tests
│   ├── components/         # Component tests
│   ├── hooks/             # Hook tests
│   └── utils/             # Utility function tests
├── integration/            # Integration tests
│   ├── api/               # API integration tests
│   └── firebase/          # Firebase integration tests
├── e2e/                    # End-to-end tests
│   ├── fixtures/          # Test fixtures and data
│   ├── page-objects/      # Page Object Model classes
│   └── specs/             # Test specifications
│       ├── marketing/     # Marketing site tests
│       └── portal/        # Portal app tests
└── setup.ts               # Global test setup
```

## Running Tests

### Commands

```bash
# Unit tests
npm run test              # Run in watch mode
npm run test:unit         # Run once
npm run test:coverage     # Generate coverage report

# E2E tests
npm run test:e2e          # Run all E2E tests
npm run test:e2e:ui       # Open Playwright UI
npm run test:e2e:debug    # Debug mode
npm run test:e2e:headed   # Run with visible browser

# Specific app tests
npm run test:marketing    # Marketing site only
npm run test:portal       # Portal app only

# All tests
npm run test:all          # Run all test suites
```

### CI/CD Integration

Tests run automatically on:
- Pull request creation
- Commits to main branch
- Pre-deployment checks

## Best Practices

### 1. Test Naming

Use descriptive test names that explain the behavior:

```typescript
// ❌ Bad
it('test1', () => {});

// ✅ Good
it('should display error message when email is invalid', () => {});
```

### 2. Arrange-Act-Assert Pattern

```typescript
it('should update user profile', async () => {
  // Arrange
  const user = { name: 'John Doe', email: 'john@example.com' };
  const { result } = renderHook(() => useUserProfile());
  
  // Act
  await act(async () => {
    await result.current.updateProfile(user);
  });
  
  // Assert
  expect(result.current.profile).toEqual(user);
});
```

### 3. Use Testing Library Queries Correctly

```typescript
// ❌ Bad - Implementation details
const button = container.querySelector('.btn-primary');

// ✅ Good - Accessible queries
const button = screen.getByRole('button', { name: 'Submit' });
```

### 4. Mock External Dependencies

```typescript
vi.mock('@/lib/api', () => ({
  fetchUserData: vi.fn().mockResolvedValue({
    id: '123',
    name: 'Test User'
  })
}));
```

### 5. Test User Interactions

```typescript
it('should submit form with valid data', async () => {
  const user = userEvent.setup();
  const onSubmit = vi.fn();
  
  render(<ContactForm onSubmit={onSubmit} />);
  
  await user.type(screen.getByLabelText('Name'), 'John Doe');
  await user.type(screen.getByLabelText('Email'), 'john@example.com');
  await user.click(screen.getByRole('button', { name: 'Submit' }));
  
  expect(onSubmit).toHaveBeenCalledWith({
    name: 'John Doe',
    email: 'john@example.com'
  });
});
```

## Performance Testing

### Web Vitals Testing

```typescript
test('meets performance thresholds', async ({ page }) => {
  await page.goto('/');
  
  const metrics = await page.evaluate(() => {
    return new Promise((resolve) => {
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        resolve({
          lcp: entries.find(e => e.name === 'largest-contentful-paint')?.startTime,
          fcp: entries.find(e => e.name === 'first-contentful-paint')?.startTime,
        });
      }).observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
    });
  });
  
  expect(metrics.lcp).toBeLessThan(2500); // LCP < 2.5s
  expect(metrics.fcp).toBeLessThan(1800); // FCP < 1.8s
});
```

## Debugging Tests

### Vitest Debugging

```bash
# Run specific test file
npm run test -- Button.test.tsx

# Run tests matching pattern
npm run test -- --grep "should handle"

# Run with UI
npm run test:ui
```

### Playwright Debugging

```bash
# Debug mode with inspector
npm run test:e2e:debug

# Run specific test
npm run test:e2e -- --grep "login"

# Generate trace
npm run test:e2e -- --trace on
```

### VS Code Integration

Add to `.vscode/launch.json`:

```json
{
  "type": "node",
  "request": "launch",
  "name": "Debug Vitest Tests",
  "autoAttachChildProcesses": true,
  "skipFiles": ["<node_internals>/**", "**/node_modules/**"],
  "program": "${workspaceRoot}/node_modules/vitest/vitest.mjs",
  "args": ["run", "${relativeFile}"],
  "smartStep": true,
  "console": "integratedTerminal"
}
```

## Educational Considerations

When writing tests, consider:

1. **Learning Opportunity**: Add comments explaining testing concepts
2. **Real-World Patterns**: Use industry-standard practices
3. **Progressive Complexity**: Start simple, build up to advanced patterns
4. **Error Scenarios**: Test edge cases to teach defensive programming
5. **Performance Awareness**: Include performance tests to teach optimization

Example with educational comments:

```typescript
describe('User Authentication', () => {
  it('should handle session expiration gracefully', async () => {
    // Educational: Testing error boundaries and user experience
    // In production apps, always test how your app handles errors
    
    const { result } = renderHook(() => useAuth());
    
    // Simulate expired session
    mockAuthProvider.mockImplementation(() => {
      throw new Error('Session expired');
    });
    
    // Educational: Error boundaries should provide user-friendly messages
    expect(result.current.error).toBe('Your session has expired. Please log in again.');
    expect(result.current.isAuthenticated).toBe(false);
  });
});
```

## Coverage Requirements

- Minimum 80% line coverage for new code
- 100% coverage for critical paths (auth, payments)
- Focus on behavior coverage over line coverage

## Continuous Improvement

1. Review test failures in PRs
2. Add tests for reported bugs
3. Refactor tests that are hard to maintain
4. Share testing knowledge in team meetings
5. Document testing patterns that work well

---

Remember: Tests are not just for catching bugs—they're documentation of how your code should behave and excellent learning tools for new developers.