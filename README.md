# Summer Brain Rot Platform

A strategic learning laboratory where young entrepreneurs transform creative ideas into real businesses through collaborative game development.

## 🧠 Project Overview

Summer Brain Rot reframes traditional summer learning by embracing youth culture and digital-native interests as pathways to professional skill development. Participants develop real business skills through game development, content creation, and community building.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm (for marketing site)
- pnpm (for portal app)

### Installation
```bash
# Install root dependencies
npm install

# Install all workspace dependencies
npm run install:all
```

### Development
```bash
# Run both applications simultaneously
npm run dev

# Or run individually:
npm run dev:marketing  # Marketing site (summerbrainrot.com)
npm run dev:portal     # Participant portal (summerbrainrot.camp)
```

### Building
```bash
# Build both applications
npm run build

# Or build individually:
npm run build:marketing
npm run build:portal
```

### Testing
```bash
# Run unit tests
npm run test             # Watch mode
npm run test:unit        # Run once
npm run test:coverage    # With coverage report

# Run E2E tests
npm run test:e2e         # All E2E tests
npm run test:e2e:ui      # Interactive UI mode
npm run test:marketing   # Marketing site only
npm run test:portal      # Portal app only

# Run all tests
npm run test:all
```

## 📁 Project Structure

```
summerbrainrot/
├── apps/
│   ├── marketing/          # Public marketing site (Streamline template)
│   └── portal/             # Authenticated participant portal (Admin template)
├── packages/
│   ├── shared-components/  # Cross-platform UI components
│   ├── brand-assets/       # Logo, colors, fonts, imagery
│   ├── types/              # Shared TypeScript definitions
│   └── config/             # Shared configuration files
├── docs/
│   ├── architecture/      # Architecture decisions and C4 diagrams
│   ├── guides/            # Development and testing guides
│   └── updates/           # Project updates and changelogs
├── templates/              # Original template source for reference
│   ├── streamline-nextjs-template-1.1.0/
│   └── shadcn-admin-1.0.0/
└── tests/
    ├── unit/              # Unit test suites
    └── e2e/               # End-to-end test scenarios
```

## 🎯 Application Architecture

### Marketing Site (`apps/marketing/`)
- **Domain**: summerbrainrot.com
- **Technology**: Next.js with static export
- **Purpose**: Brand hub, program information, application process
- **Target Audience**: Parents, potential participants, program alumni

### Participant Portal (`apps/portal/`)
- **Domain**: summerbrainrot.camp  
- **Technology**: Next.js with SSR
- **Purpose**: Authenticated participant experience, progress tracking, collaboration
- **Target Audience**: Current participants, mentors, program administrators

## 🛠 Technology Stack

### Frontend
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **shadcn/ui** components
- **React Hook Form + Zod** for forms and validation

### Design System
- **Base Templates**: 
  - Marketing: Streamline Next.js Template v1.1.0 (sand color scheme)
  - Portal: shadcn Admin Template v1.0.0 (subtle brand integration)
- **Brand Integration**: Minimal customization preserving template patterns
- **Component Architecture**: Template-driven with shared components for consistency

### Development Tools
- **Turbo** for monorepo task running
- **ESLint + Prettier** for code quality
- **Concurrently** for parallel development
- **Vitest** for unit and integration testing
- **Playwright** for end-to-end testing

### Testing Infrastructure
- **Unit Testing**: Vitest with React Testing Library
- **E2E Testing**: Playwright with Page Object Model
- **Coverage**: 80% minimum threshold
- **CI/CD**: GitHub Actions with parallel test execution

### Deployment & Infrastructure
- **Hosting**: Firebase Hosting with multi-site configuration
  - Marketing: Static export to `summerbrainrot.com`
  - Portal: SSR via Firebase Framework Hosting to `summerbrainrot.camp`
- **Database**: Firebase Firestore with real-time sync
- **Authentication**: Firebase Auth with Google/Email sign-in
- **Storage**: Firebase Storage for user uploads and assets
- **Analytics**: Firebase Analytics + Google Analytics integration

#### Deployment Commands
```bash
# Deploy everything (hosting, functions, rules)
npm run deploy

# Deploy individually
npm run deploy:marketing    # Marketing site only
npm run deploy:portal       # Portal app only
npm run deploy:firestore   # Firestore rules and indexes
npm run deploy:functions   # Cloud Functions only

# Local development with Firebase emulators
npm run dev:firebase       # Start Firebase emulators
```

## 📚 Educational Integration

This project serves as a comprehensive learning laboratory where participants:

- **Business Development**: Learn market research, user experience design, and revenue models
- **Technical Skills**: Gain experience with professional development tools and workflows  
- **Creative Collaboration**: Practice giving and receiving feedback in structured environments
- **Digital Citizenship**: Develop professional online presence and community building skills

## 🎮 Getting Started as a Participant

1. **Explore the Marketing Site**: Visit the public site to understand the program vision
2. **Access the Portal**: Log in to your participant dashboard
3. **Review Learning Materials**: Check out documentation in the `/docs` folder
4. **Start Contributing**: Begin with small modifications to shared components
5. **Document Your Journey**: Use the platform tools to track and showcase your progress

## 🤝 Contributing

This project welcomes contributions from participants, mentors, and collaborators:

1. **Participants**: Focus on content creation, feature suggestions, and documentation
2. **Mentors**: Provide code reviews, architectural guidance, and professional insights
3. **Collaborators**: Help with advanced features, performance optimization, and scalability

## 📄 License

MIT License - see LICENSE file for details

---

*Transform your summer brain rot into real business skills* 🚀
