# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

This is a monorepo containing the Summer Brain Rot platform with two Next.js applications:

1. **Marketing Site** (`apps/marketing/`): Public-facing brand hub and application portal
2. **Participant Portal** (`apps/portal/`): Authenticated participant experience platform

### Project Architecture

```
summerbrainrot/
├── apps/
│   ├── marketing/          # Streamline template (summerbrainrot.com)
│   └── portal/             # Admin template (summerbrainrot.camp)
├── packages/
│   ├── shared-components/  # Cross-platform UI components
│   ├── brand-assets/       # Logo, colors, fonts, imagery
│   ├── types/              # Shared TypeScript definitions
│   └── config/             # Shared configuration files
├── docs/                   # Documentation and learning materials
└── tools/                  # Development automation and deployment
```

## Development Commands

### Root Level (Monorepo)
```bash
npm install              # Install root dependencies
npm run install:all      # Install all workspace dependencies
npm run dev             # Run both apps simultaneously
npm run build           # Build both applications
npm run lint            # Lint both applications
npm run clean           # Clean all node_modules and build artifacts
```

### Marketing Site (apps/marketing/) - uses npm
Based on streamline-nextjs-template-1.1.0
```bash
cd apps/marketing
npm install         # Install dependencies
npm run dev         # Start development server with Turbopack
npm run build       # Build static export
npm run lint        # Run and fix linting issues
```

### Portal App (apps/portal/) - uses pnpm  
Based on shadcn-admin-1.0.0
```bash
cd apps/portal
pnpm install        # Install dependencies
pnpm run dev        # Start development server
pnpm run build      # Build for production
pnpm run lint       # Run linter
pnpm run lint:fix   # Fix linting issues
pnpm run format     # Check formatting
pnpm run format:fix # Fix formatting issues
```

## Application Details

### Marketing Site (apps/marketing/)
- **Domain**: summerbrainrot.com
- **Technology**: Next.js 15 with static export
- **Styling**: Tailwind CSS v4
- **Purpose**: Public marketing, program information, application process
- **Target**: Parents, potential participants, program alumni

**Key Features**:
- Static site generation for performance
- SEO-optimized for discoverability  
- MDX support for content pages
- Optimized for marketing and conversion

**Structure**:
```
src/app/
├── about/           # About page
├── contact/         # Contact form
├── faq/            # FAQ page
├── pricing/        # Pricing plans
├── privacy/        # Privacy policy (MDX)
├── terms/          # Terms of service (MDX)
├── login/          # Authentication pages
└── signup/
```

### Portal App (apps/portal/)
- **Domain**: summerbrainrot.camp
- **Technology**: Next.js 15 with SSR
- **Styling**: Tailwind CSS v4
- **Purpose**: Authenticated participant experience, progress tracking, collaboration
- **Target**: Current participants, mentors, program administrators

**Key Features**:
- Complex data tables with @tanstack/react-table
- Charts and data visualization with Recharts
- Real-time features and WebSocket support
- User management and role-based access

**Structure**:
```
src/app/
├── (auth)/          # Authentication pages
├── (dashboard)/     # Multiple dashboard variants
│   ├── dashboard-2/ # Alternative layouts
│   ├── dashboard-3/ # Dashboard variants
│   ├── developers/  # API keys, webhooks, events & logs
│   ├── settings/    # User settings, billing, notifications
│   ├── tasks/       # Task management with data tables
│   └── users/       # User management system
└── (errors)/        # Error pages (401, 403, 404, 503)
```

## Shared Packages

### Brand Assets (`packages/brand-assets/`)
Contains all visual identity elements:
- Color swatches and CSS custom properties
- Typography definitions and font loading
- Logo variations and iconography
- Brand guidelines and usage examples

### Shared Components (`packages/shared-components/`)
Cross-platform UI components used by both applications:
- Common form elements and patterns
- Branded header/footer components
- Utility components and hooks

### Types (`packages/types/`)
Shared TypeScript definitions for:
- User data structures
- API response formats
- Cross-application interfaces

### Config (`packages/config/`)
Shared configuration files:
- Environment variable schemas
- API endpoint definitions
- Shared constants and enums

## Architecture Principles

### Common Patterns
- **Next.js 15 App Router**: Both apps use modern App Router pattern
- **TypeScript**: Strict mode with comprehensive type checking
- **Component Library**: shadcn/ui components in `/src/components/ui/`
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **Forms**: React Hook Form with Zod validation
- **Dark Mode**: Implemented using next-themes

### Educational Integration
This project serves as a learning laboratory where participants:
- Learn full-stack development through hands-on contribution
- Practice professional development workflows and collaboration
- Understand business development through real platform metrics
- Develop technical communication skills through documentation

## Development Workflow

### Package Management
- **Root**: npm workspaces for monorepo management
- **Marketing**: npm (as per original template)
- **Portal**: pnpm (as per original template)
- **Shared**: Workspace linking for cross-package dependencies

### Development Process
1. **Hot Reloading**: Both apps run simultaneously during development
2. **Code Sharing**: Shared packages automatically linked via workspaces
3. **Consistent Tooling**: Unified linting, formatting, and build processes
4. **Brand Integration**: Shared brand assets ensure visual consistency

### Build and Deployment
- **Marketing**: Static export optimized for CDN deployment
- **Portal**: Server-side rendering for dynamic participant features
- **Shared**: Component library build pipeline for reusable elements

## Important Considerations

1. **Package Managers**: Respect the different package managers used by each app
2. **Static vs Dynamic**: Marketing site is static export, portal has dynamic features
3. **Authentication**: Portal requires auth implementation, marketing site is public
4. **Data**: Portal uses mock data initially - replace with real APIs for production
5. **Cross-Domain**: Consider authentication flow between marketing and portal domains
6. **Performance**: Marketing site optimized for fast loading, portal optimized for rich interactions

## Educational Context

This codebase is designed to teach young entrepreneurs:
- **Technical Skills**: Modern web development with professional tools
- **Business Skills**: User experience design, analytics, community building  
- **Collaboration**: Code review, documentation, version control
- **Professional Development**: Industry-standard workflows and practices

When making changes, consider how modifications can serve as learning opportunities for participants while maintaining professional quality standards.

## Quick Start

```bash
# Initial setup
git clone https://github.com/yourusername/summerbrainrot.git
cd summerbrainrot
npm install              # Install root dependencies
npm run install:all      # Install all workspace dependencies

# Development
npm run dev              # Start both applications
npm run dev:marketing    # Start only marketing site
npm run dev:portal       # Start only portal app

# Testing & Quality
npm run test             # Run all tests
npm run lint             # Check code quality
npm run type-check       # Verify TypeScript types
```

## Common Development Tasks

### Adding a Shared Component

1. Create component in `packages/shared-components/src/`
2. Export from package index
3. Import in apps using workspace reference
4. Build shared packages: `npm run build:shared`

### Working with Forms

All forms use React Hook Form with Zod validation:
```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, FormData } from './schema';

const form = useForm<FormData>({
  resolver: zodResolver(formSchema),
  defaultValues: { /* ... */ }
});
```

### Mock Data for Development

Portal includes Faker.js for generating test data:
```typescript
import { generateMockUsers, generateMockTasks } from '@/lib/mock';

const users = generateMockUsers(50);
const tasks = generateMockTasks(20);
```

### Feature-Based Organization

Organize features with co-located components and data:
```
src/app/feature-name/
├── components/       # Feature-specific components
├── data/            # Schemas and mock data
├── hooks/           # Custom hooks
└── page.tsx         # Feature page
```

## Testing Strategy

- **Unit Tests**: Not yet configured (planned: Vitest)
- **E2E Tests**: Not yet configured (planned: Playwright)
- **Visual Tests**: Not yet configured (planned: Chromatic)

When implemented, run tests with:
```bash
npm run test              # All tests
npm run test:unit         # Unit tests only
npm run test:e2e          # E2E tests
npm run test:coverage     # Coverage report
```

## Debugging Tips

1. **Authentication Issues**: Check Firebase configuration in `.env.local`
2. **Build Errors**: Clear caches with `npm run clean`
3. **Type Errors**: Run `npm run type-check` for detailed output
4. **Cross-Package Issues**: Rebuild shared packages
5. **Port Conflicts**: Marketing runs on :3000, Portal on :3001

## Environment Variables

Required for each app in `.env.local`:
```env
# Firebase (Portal)
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=

# Analytics (Both)
NEXT_PUBLIC_GA_ID=

# API Endpoints
NEXT_PUBLIC_API_URL=
```

## Task Management

Refer to [TODO.md](./TODO.md) for:
- Current sprint priorities
- Bug tracking
- Feature backlog
- Technical debt items

## Documentation Hub

- [Architecture Decisions](./docs/architecture/decisions/)
- [API Reference](./docs/api/)
- [Contributing Guide](./CONTRIBUTING.md)
- [Testing Guide](./docs/guides/testing.md)

## Important Notes

- Always run `npm run lint` before committing
- Update TODO.md when completing tasks
- Document new patterns in relevant guides
- Consider educational value in implementations
- Follow conventional commits for clear history
