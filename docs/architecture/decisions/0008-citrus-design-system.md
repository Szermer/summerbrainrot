# ADR-0008: Citrus-Themed Design System

## Status
Accepted

## Date
2025-01-06

## Context
After implementing multiple design iterations including an AssemblyAI-inspired blue theme and a minimalist black/white theme, we needed a design system that better captures the energetic, youthful spirit of the Summer Brain Rot entrepreneurship program. The previous themes, while professional, didn't fully convey the dynamic and innovative nature of the program.

Key considerations:
- The program targets young entrepreneurs who appreciate bold, modern design
- The brand needs to stand out in the educational technology space
- The design should convey energy, growth, and innovation
- Accessibility and usability must remain paramount

## Decision
Adopt a vibrant citrus-themed design system featuring:

1. **Primary Color**: Bright citrus/lime green (`oklch(0.8719 0.1829 125.59)`)
2. **Secondary Color**: Complementary teal (`oklch(0.5591 0.0631 185.87)`)
3. **Typography**: Alexandria font family for modern, clean readability
4. **Color Space**: OKLCH for perceptually uniform colors

Key design elements:
- Vibrant green CTAs that demand attention
- Clean, minimal backgrounds with pops of color
- Modern pricing component with monthly/yearly toggle
- Full light/dark mode support

## Consequences

### Positive
- **Brand Differentiation**: Unique citrus theme stands out in the edtech space
- **Energy & Innovation**: Vibrant colors convey the program's dynamic nature
- **Modern Technology**: OKLCH color space demonstrates technical sophistication
- **Improved UX**: High-contrast CTAs improve conversion potential
- **Accessibility**: OKLCH ensures consistent color perception across devices

### Negative
- **Color Preference**: Some users may find vibrant colors less professional
- **Brand Consistency**: Moving away from traditional blue may surprise returning users
- **Print Materials**: Bright colors may be challenging for print reproduction

### Neutral
- **Learning Curve**: Team needs to understand OKLCH color space
- **Browser Support**: OKLCH has good but not universal browser support (fallbacks provided)

## Implementation Details

### Color System
```css
:root {
  --primary-300: oklch(0.8719 0.1829 125.59); /* Citrus green */
  --secondary-600: oklch(0.5591 0.0631 185.87); /* Teal */
  --base-800: oklch(0.269 0 0); /* Near black */
  --base-50: oklch(0.9851 0 0); /* Off white */
}
```

### Typography
```css
--font-sans: "Alexandria", -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
```

### Components Updated
- Button component with citrus primary color
- Badge component for pricing tiers
- RadioGroup for pricing toggle
- Updated all CTAs site-wide

## Alternatives Considered

1. **Keep AssemblyAI Blue Theme**: Professional but too corporate for target audience
2. **Minimalist Black/White**: Clean but lacked energy and differentiation
3. **Gradient-Heavy Design**: Considered but too complex for consistent implementation
4. **Neon Colors**: Too extreme and potentially accessibility issues

## Educational Considerations

This design system serves as a teaching tool:
- **Color Theory**: Students learn about modern color spaces (OKLCH vs RGB/HSL)
- **Accessibility**: Real-world example of WCAG compliance
- **Brand Identity**: Shows how design choices reflect brand values
- **Modern CSS**: Demonstrates cutting-edge CSS features

## Related Decisions
- [ADR-0005: AssemblyAI Design System](./0005-assemblyai-design-system.md) - Previous design iteration
- [ADR-0006: Vercel Deployment](./0006-vercel-deployment.md) - Deployment considerations
- [ADR-0007: React Version Fix](./0007-react-version-fix.md) - Enabled successful deployment

## References
- [OKLCH Color Space](https://oklch.com/) - Color space documentation
- [Alexandria Font](https://fonts.google.com/specimen/Alexandria) - Typography choice
- [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4-alpha) - CSS framework updates