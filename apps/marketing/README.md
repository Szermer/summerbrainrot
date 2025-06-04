# Summer Brain Rot Marketing Site

The public-facing marketing site for Summer Brain Rot, where young entrepreneurs learn to build real SaaS businesses through hands-on development.

- [Live Site](https://summerbrainrot-com.web.app/)
- [Design System](#design-system)
- Based on Streamline NextJS Template by https://www.shadcnblocks.com

## Overview

This marketing site serves as the primary entry point for potential participants, parents, and program alumni. It features an AssemblyAI-inspired design system with clean typography, vibrant gradients, and a modern aesthetic.

## Getting Started

```bash
npm install
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with custom design system
- **Components**: shadcn/ui component library
- **Hosting**: Firebase Hosting (static export)
- **Typography**: Inter & Inter Tight fonts
- **Icons**: Lucide React

## Design System

### Color Palette

Inspired by AssemblyAI's clean, professional aesthetic:

- **Primary Blue**: `#2545D3` - CTAs and primary actions
- **Dark Navy**: `#121926` - Main text and headers
- **Gray**: `#60646C` - Secondary text
- **Light Background**: `#F4EFEC` - Subtle off-white backgrounds

### Gradients

- **Purple to Pink**: For decorative elements and feature icons
- **Orange to Yellow**: Background accents
- **Green to Blue**: Additional gradient options

### Typography

- **Headings**: Inter Tight, responsive sizing (40px to 64px)
- **Body**: Inter, 18px base size with 1.5 line height
- **Buttons**: 14px with 600 font weight

### Components

- **Buttons**: 8px border radius, smooth transitions
- **Cards**: Clean shadows, consistent spacing
- **Icons**: Gradient-filled circles for feature highlights

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

## Deployment

This site is deployed to Firebase Hosting as a static export:

```bash
# Build and deploy
npm run build
firebase deploy --only hosting:marketing
```

## Pages

- **Home** (`/`) - Hero, features, testimonials
- **About** (`/about`) - Program information
- **Pricing** (`/pricing`) - Program costs and value
- **FAQ** (`/faq`) - Common questions
- **Contact** (`/contact`) - Get in touch
- **Login/Signup** - Authentication pages
- **Terms & Privacy** - Legal pages (MDX)

## Recent Updates

- **2025-01-06**: Implemented AssemblyAI-inspired design system
- **2025-01-06**: Updated color palette and typography
- **2025-01-06**: Enhanced hero section with gradient backgrounds
- **2025-01-06**: Improved button and component styling
