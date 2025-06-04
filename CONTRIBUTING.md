# Contributing to Summer Brain Rot

Welcome! We're excited that you're interested in contributing to Summer Brain Rot. This project is unique because it serves as both an educational platform and a real-world SaaS application that participants help build.

## 🎯 Our Philosophy

Summer Brain Rot is built on the principle of "learning by doing." Every contribution is an opportunity to:
- Learn professional development practices
- Build real features used by actual users
- Understand the business side of software
- Develop collaboration and communication skills

## 🚀 Getting Started

1. **Read the Documentation**
   - Review [CLAUDE.md](./CLAUDE.md) for AI-assisted development context
   - Check [TODO.md](./TODO.md) for current priorities
   - Explore [docs/](./docs/) for architecture details

2. **Set Up Your Environment**
   ```bash
   # Clone the repository
   git clone https://github.com/yourusername/summerbrainrot.git
   cd summerbrainrot
   
   # Install dependencies
   npm run install:all
   
   # Start development servers
   npm run dev
   ```

3. **Find an Issue**
   - Check issues labeled `good-first-issue`
   - Look for `help-wanted` tags
   - Review the TODO.md for upcoming features
   - Ask in discussions if you need guidance

## 📝 Development Workflow

### 1. Branch Strategy

```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Or for fixes
git checkout -b fix/issue-description
```

### 2. Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or modifying tests
- `chore`: Maintenance tasks

**Examples:**
```bash
feat(portal): add progress tracking dashboard
fix(marketing): correct responsive layout on mobile
docs: update contributing guidelines
```

### 3. The Perfect Commit

Each commit should:
1. **Do one thing**: A commit should represent a single logical change
2. **Be complete**: The codebase should work after every commit
3. **Include tests**: New features need test coverage
4. **Update docs**: Documentation changes in the same commit

### 4. Pull Request Process

1. **Before Opening a PR:**
   - Run `npm run lint` and fix any issues
   - Run `npm run test` and ensure all pass
   - Update documentation if needed
   - Add your changes to TODO.md if significant

2. **PR Title Format:**
   ```
   <type>(<scope>): <description>
   
   Example: feat(portal): add participant onboarding flow
   ```

3. **PR Description Template:**
   ```markdown
   ## Summary
   Brief description of changes
   
   ## Motivation
   Why these changes are needed
   
   ## Changes
   - Bullet points of specific changes
   
   ## Testing
   How to test these changes
   
   ## Screenshots
   If applicable
   
   ## Checklist
   - [ ] Tests added/updated
   - [ ] Documentation updated
   - [ ] Lint passes
   - [ ] Types are correct
   ```

## 🎨 Code Style Guidelines

### TypeScript
- Use strict mode
- Define explicit types (avoid `any`)
- Use interfaces for object shapes
- Prefer `const` over `let`

### React/Next.js
- Functional components with hooks
- Co-locate related files (component, styles, tests)
- Use semantic HTML elements
- Follow accessibility best practices

### File Organization
```
feature/
├── components/
│   ├── FeatureName.tsx
│   ├── FeatureName.test.tsx
│   └── sub-components/
├── hooks/
│   └── useFeature.ts
├── types/
│   └── feature.types.ts
└── utils/
    └── feature.utils.ts
```

## 🧪 Testing Requirements

### Unit Tests
- Test individual functions and components
- Use Vitest for unit tests
- Aim for >80% coverage on new code

### Integration Tests
- Test feature workflows
- Mock external dependencies
- Test error scenarios

### E2E Tests
- Cover critical user paths
- Use Playwright for E2E tests
- Run before major releases

## 📚 Learning Resources

### For Beginners
- [React Documentation](https://react.dev)
- [Next.js Tutorial](https://nextjs.org/learn)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### For Advanced Topics
- [System Design Primer](https://github.com/donnemartin/system-design-primer)
- [Clean Code Principles](https://github.com/ryanmcdermott/clean-code-javascript)
- [SaaS Metrics](https://www.forentrepreneurs.com/saas-metrics-2/)

## 🤝 Code Review Culture

### As a Contributor
- Be open to feedback
- Ask questions if unclear
- Explain your reasoning
- Update based on reviews promptly

### As a Reviewer
- Be constructive and kind
- Explain the "why" behind suggestions
- Offer code examples when helpful
- Acknowledge good solutions

## 🎯 Educational Goals

Remember that this project is educational. When contributing:

1. **Document Your Learning**: Add comments explaining complex logic
2. **Share Knowledge**: Write blog posts or docs about what you learned
3. **Mentor Others**: Help newer contributors
4. **Think Business**: Consider user impact and business value

## 🚨 Getting Help

- **Discord**: Join our community server
- **Office Hours**: Weekly mentor sessions
- **Documentation**: Check docs first
- **Discussions**: Use GitHub Discussions

## 🏆 Recognition

We celebrate contributions through:
- Contributor highlights in newsletters
- Special roles in Discord
- Portfolio references
- LinkedIn recommendations for significant contributions

## 📋 Checklist for Contributors

Before submitting:
- [ ] Code follows style guidelines
- [ ] Tests are passing
- [ ] Documentation is updated
- [ ] Commit messages follow convention
- [ ] PR description is complete
- [ ] Self-review completed
- [ ] No console.logs or debugging code

## 🔒 Security

- Never commit secrets or API keys
- Report security issues privately
- Follow OWASP best practices
- Use environment variables

---

Thank you for contributing to Summer Brain Rot! Your work helps young entrepreneurs learn valuable skills while building something meaningful. 🚀