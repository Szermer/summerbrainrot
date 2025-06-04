# Summer Brain Rot - Project Architecture

## Strategic Monorepo Design

This project uses a unified codebase architecture that maximizes both development efficiency and educational value. The structure leverages two premium templates while creating a cohesive brand experience.

## Repository Structure

```
summerbrainrot/
├── apps/
│   ├── marketing/          # Streamline template (summerbrainrot.com)
│   └── portal/             # Admin template (summerbrainrot.camp)
├── packages/
│   ├── shared-components/  # Cross-platform components
│   ├── brand-assets/       # Logo, colors, fonts
│   ├── types/              # Shared TypeScript definitions
│   └── config/             # Shared configuration
├── docs/
│   ├── participant-guide/ # Learning materials
│   └── development/       # Technical documentation
└── tools/
    ├── scripts/           # Development automation
    └── deployment/        # Deploy configuration
```

## Application Architecture

### Marketing Site (apps/marketing/)
**Domain**: summerbrainrot.com
**Base**: streamline-nextjs-template-1.1.0
**Purpose**: Public-facing brand hub and application portal

**Key Features**:
- Static site generation for performance
- SEO-optimized for discoverability
- Parent-focused messaging and testimonials
- Application process and program information
- Success stories and participant showcases

**Educational Integration**:
- Participants contribute content for testimonials
- A/B testing for messaging teaches market research
- Analytics integration teaches user behavior analysis

### Participant Portal (apps/portal/)
**Domain**: summerbrainrot.camp
**Base**: shadcn-admin-1.0.0
**Purpose**: Authenticated participant experience platform

**Key Features**:
- Individual progress dashboards
- Live session recordings and documentation
- Peer collaboration workspace
- Project portfolio showcase
- Real-time community features

**Educational Integration**:
- Dashboard customization teaches UX design
- Data visualization teaches analytics
- User management teaches community building

## Development Strategy

### Phase 1: Foundation Setup (Week 1)
1. **Monorepo Configuration**
   - Set up shared package management
   - Configure cross-package imports
   - Establish consistent build processes

2. **Brand Integration**
   - Create shared component library
   - Implement Summer Brain Rot visual identity
   - Set up consistent theming across both apps

3. **Basic Routing and Navigation**
   - Configure domain-specific routing
   - Set up authentication flow between apps
   - Implement shared header/footer components

### Phase 2: Content and Functionality (Weeks 2-3)
1. **Marketing Site Customization**
   - Replace template content with Summer Brain Rot messaging
   - Implement application/registration system
   - Add participant showcase functionality

2. **Portal Core Features**
   - Customize dashboard for participant progress tracking
   - Implement session recording organization
   - Create collaborative workspace features

3. **Shared Component Development**
   - Build reusable UI components
   - Implement consistent form patterns
   - Create shared utility functions

### Phase 3: Integration and Enhancement (Week 4+)
1. **Cross-Platform Features**
   - Single sign-on between marketing and portal
   - Shared user profile management
   - Cross-platform notifications

2. **Educational Features**
   - Progress tracking and achievement systems
   - Peer feedback and collaboration tools
   - Portfolio building and showcase features

## Technical Specifications

### Package Management
- **Marketing**: npm (as per template)
- **Portal**: pnpm (as per template)
- **Shared**: Use workspace configuration for cross-package dependencies

### Build and Deployment
- **Marketing**: Static export for CDN deployment
- **Portal**: Server-side rendering for dynamic features
- **Shared**: Component library build pipeline

### Development Workflow
- **Hot Reloading**: Both apps run simultaneously during development
- **Code Sharing**: Shared packages automatically linked
- **Testing**: Unified testing strategy across applications

## Educational Integration Points

### Technical Learning Opportunities
1. **Full-Stack Development**: Understanding client/server architecture
2. **Package Management**: Learning monorepo and dependency management
3. **DevOps**: Deployment pipelines and environment management
4. **Performance**: Optimization strategies for different application types

### Business Learning Opportunities
1. **User Journey Design**: Marketing to engagement conversion
2. **Community Building**: Portal features that encourage collaboration
3. **Analytics and Metrics**: Understanding user behavior across platforms
4. **Content Strategy**: Creating content that serves both acquisition and retention

## Risk Mitigation

### Technical Risks
- **Complexity Management**: Modular architecture prevents overwhelming participants
- **Performance**: Static marketing site ensures fast loading for all users
- **Scalability**: Portal architecture supports growing participant base

### Educational Risks
- **Skill Level Variation**: Multiple entry points for different technical abilities
- **Attention Management**: Clear separation of concerns between marketing and portal
- **Collaboration Challenges**: Built-in tools for peer interaction and feedback

This architecture transforms the development process into a comprehensive learning laboratory while maintaining professional standards and scalability for program growth.
