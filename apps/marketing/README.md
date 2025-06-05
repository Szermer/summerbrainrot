# Summer Brain Rot Marketing Site

The public-facing marketing site for Summer Brain Rot, where young entrepreneurs learn to build real SaaS businesses through hands-on development.

- [Live Site](https://summerbrainrot.com/)
- [Design System](#design-system)
- Based on Streamline NextJS Template by https://www.shadcnblocks.com

## Overview

This marketing site serves as the primary entry point for potential participants, parents, and program alumni. It features a vibrant citrus-themed design system with modern typography and energetic colors that capture the dynamic spirit of entrepreneurship.

### Authentication Redirects

The marketing site redirects authentication pages to the portal:
- `/login` → Portal login page
- `/signup` → Portal registration page  
- `/apply` → Portal registration page

Portal URL configuration is managed in `src/config/portal.ts` for easy updates when the custom domain is ready.

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
- **Typography**: Alexandria font family
- **Icons**: Lucide React

## Design System

### Color Palette

Features a vibrant citrus-themed color system using modern OKLCH color space:

- **Primary Citrus**: `oklch(0.8719 0.1829 125.59)` - Bright lime/citrus green for CTAs and primary actions
- **Secondary Teal**: `oklch(0.5591 0.0631 185.87)` - Complementary teal for accents
- **Dark Text**: `oklch(0.269 0 0)` - Near-black for main content
- **Gray**: `oklch(0.439 0 0)` - For secondary text
- **Light Background**: `oklch(0.9851 0 0)` - Clean, minimal backgrounds

### Color System Features

- **OKLCH Color Space**: Perceptually uniform colors for better consistency
- **Light/Dark Mode**: Full dark mode support with adjusted color values
- **Accessible Contrast**: All color combinations meet WCAG guidelines

### Typography

- **Primary Font**: Alexandria - Modern, clean sans-serif
- **Body Text**: 18px base size with optimal line height
- **Headings**: Responsive sizing from 2.5rem to 4rem
- **Font Weights**: 400 for body, 600-700 for emphasis

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

- **2025-01-06**: Migrated to vibrant citrus-themed design system
- **2025-01-06**: Implemented OKLCH color space for better color consistency
- **2025-01-06**: Updated typography to Alexandria font family
- **2025-01-06**: Enhanced pricing component with monthly/yearly toggle
- **2025-01-06**: Fixed React version compatibility issues
- **2025-01-06**: Improved button styling with citrus green CTAs
