# ADR-0005: AssemblyAI-Inspired Design System

## Status
Superseded by [ADR-0008: Citrus-Themed Design System](./0008-citrus-design-system.md)

## Date
2025-01-06

## Context
The initial marketing site implementation used the default Streamline template styling, which featured subtle sand/beige colors and minimal visual distinction. After deployment, it was observed that the styling lacked the modern, professional aesthetic needed to attract young entrepreneurs and convey the innovative nature of the Summer Brain Rot program.

AssemblyAI's website was identified as an exemplary design reference, featuring:
- Clean, modern typography
- Professional color palette with a distinctive blue
- Vibrant gradient accents
- Clear visual hierarchy
- Subtle but effective background treatments

## Decision
We will adopt an AssemblyAI-inspired design system for the marketing site while maintaining the Summer Brain Rot brand identity. This includes:

### Color System
- **Primary Blue** (#2545D3): For CTAs and primary brand elements
- **Dark Navy** (#121926): For main text and headers
- **Gray** (#60646C): For secondary text
- **Light Background** (#F4EFEC): For subtle backgrounds

### Typography
- Larger, more impactful heading sizes (40px to 64px responsive)
- Inter font family with system font fallbacks
- Clear hierarchy with proper spacing

### Visual Elements
- Gradient mesh backgrounds for visual interest
- Gradient-filled icon containers
- 8px border radius for consistency
- Smooth transitions on interactive elements

## Consequences

### Positive
- **Professional Appearance**: The site now conveys credibility and innovation
- **Better Visual Hierarchy**: Improved readability and user flow
- **Modern Aesthetic**: Appeals to tech-savvy young entrepreneurs
- **Consistent Design Language**: Unified visual system across components
- **Performance**: Gradients use CSS only, no additional assets

### Negative
- **Departure from Template**: More customization means more maintenance
- **Browser Compatibility**: Some gradient effects may vary across browsers
- **Learning Curve**: Team needs to understand new design tokens

### Neutral
- **Brand Evolution**: Moves away from original purple-heavy branding
- **Template Modifications**: Significant changes to original Streamline template

## Implementation Details

### CSS Architecture
- Updated `globals.css` with new CSS custom properties
- Added gradient definitions and utility classes
- Implemented responsive typography scales

### Component Updates
- Hero section redesigned with gradient backgrounds
- Button styles updated to match AssemblyAI patterns
- Feature cards enhanced with gradient icon containers

### Files Modified
- `/apps/marketing/src/app/globals.css`
- `/apps/marketing/src/components/sections/hero.tsx`
- `/apps/marketing/README.md`

## Related Decisions
- [ADR-0004: Template Pattern Restoration](./0004-template-pattern-restoration.md) - This design system builds upon the restored template
- [ADR-0001: Monorepo Structure](./0001-monorepo-structure.md) - Design system fits within monorepo architecture

## References
- [AssemblyAI Website](https://www.assemblyai.com/) - Design inspiration
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/) - Styling framework
- [Original Streamline Template](https://streamline-nextjs-template.vercel.app/) - Base template