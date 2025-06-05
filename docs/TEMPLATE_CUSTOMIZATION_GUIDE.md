# Template Customization Guide

This guide establishes best practices for customizing the premium templates used in Summer Brain Rot while maintaining their quality, structure, and upgradeability.

## Overview

Summer Brain Rot uses two premium templates from shadcnblocks.com:
- **Marketing Site**: Streamline NextJS Template v1.1.0
- **Portal App**: Shadcn Admin Template v1.0.0

These templates provide professional-grade foundations that should be customized thoughtfully to preserve their benefits.

## Core Principles

### 1. Composition Over Modification
- **DO**: Create new components that use template components
- **DON'T**: Modify core template components directly
- **WHY**: Preserves upgradeability and template integrity

### 2. Extend, Don't Replace
- **DO**: Add new features alongside template features
- **DON'T**: Remove or replace template functionality
- **WHY**: Maintains feature completeness and user expectations

### 3. Respect the Design System
- **DO**: Use existing design tokens and patterns
- **DON'T**: Create conflicting visual styles
- **WHY**: Ensures visual consistency and professional appearance

### 4. Document All Changes
- **DO**: Comment why customizations were made
- **DON'T**: Make undocumented modifications
- **WHY**: Helps future developers understand decisions

## Allowed Customizations

### ✅ Brand Colors and Typography

**Allowed:**
```css
/* Add brand-specific color variables */
:root {
  --brand-primary: oklch(0.8719 0.1829 125.59); /* Citrus green */
  --brand-secondary: oklch(0.7856 0.1355 178.97); /* Teal accent */
}

/* Extend typography with brand fonts */
--font-display: 'Alexandria', var(--font-geist-sans);
```

**Not Allowed:**
```css
/* Don't override core color variables */
--primary: red; /* ❌ Breaks component theming */
--foreground: white; /* ❌ Disrupts contrast ratios */
```

### ✅ Adding New Pages and Routes

**Allowed:**
```tsx
// apps/marketing/src/app/program-showcase/page.tsx
export default function ProgramShowcase() {
  return (
    <div className="container">
      {/* Use existing layout patterns */}
      <Hero /> {/* Reuse template components */}
      <CustomProgramFeatures /> {/* Add new components */}
    </div>
  );
}
```

### ✅ Creating Brand-Specific Components

**Allowed:**
```tsx
// apps/marketing/src/components/brand/BrandButton.tsx
import { Button } from "@/components/ui/button";

export function BrandButton({ children, ...props }) {
  return (
    <Button 
      className="bg-brand-primary hover:bg-brand-primary/90"
      {...props}
    >
      {children}
    </Button>
  );
}
```

### ✅ Extending Existing Components

**Allowed:**
```tsx
// Extend template component with additional props
import { Card as BaseCard } from "@/components/ui/card";

export function BrandCard({ gradient, ...props }) {
  return (
    <BaseCard 
      className={cn(
        gradient && "bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10",
        props.className
      )}
      {...props}
    />
  );
}
```

## Restricted Customizations

### ❌ Modifying Core UI Components

**Don't do this:**
```tsx
// apps/portal/src/components/ui/button.tsx
// ❌ Never edit files in /components/ui/ directly
export function Button() {
  return <button className="my-custom-styles">...</button>;
}
```

**Do this instead:**
```tsx
// apps/portal/src/components/brand/brand-button.tsx
import { Button } from "@/components/ui/button";

export function BrandButton(props) {
  return <Button className="additional-styles" {...props} />;
}
```

### ❌ Changing Template Structure

**Don't do this:**
```tsx
// ❌ Don't reorganize template file structure
mv src/components/ui src/ui-components
mv src/app/(auth) src/app/authentication
```

### ❌ Overriding Base Styles

**Don't do this:**
```css
/* ❌ Don't override template base styles */
.btn {
  padding: 20px 40px !important;
  border-radius: 0 !important;
}
```

## Component Customization Patterns

### Pattern 1: Wrapper Components

Create wrapper components that add functionality without modifying the original:

```tsx
// components/enhanced/EnhancedDataTable.tsx
import { DataTable } from "@/components/ui/data-table";
import { useAnalytics } from "@/hooks/use-analytics";

export function EnhancedDataTable(props) {
  const { trackEvent } = useAnalytics();
  
  const handleRowClick = (row) => {
    trackEvent("data_table_row_click", { rowId: row.id });
    props.onRowClick?.(row);
  };

  return <DataTable {...props} onRowClick={handleRowClick} />;
}
```

### Pattern 2: Composition with Slots

Use composition to add features while preserving template structure:

```tsx
// components/layouts/BrandDashboard.tsx
export function BrandDashboard({ children }) {
  return (
    <DashboardLayout>
      <BrandAnnouncement /> {/* New component */}
      {children} {/* Original content */}
      <BrandFooter /> {/* New component */}
    </DashboardLayout>
  );
}
```

### Pattern 3: Configuration Extensions

Extend configuration without replacing it:

```ts
// lib/chart-config.ts
import { defaultChartConfig } from "@/config/charts";

export const brandChartConfig = {
  ...defaultChartConfig,
  colors: {
    ...defaultChartConfig.colors,
    brand: "oklch(var(--brand-primary))",
    accent: "oklch(var(--brand-secondary))",
  },
};
```

## Styling Best Practices

### 1. Use CSS Variables

```css
/* Good: Define new variables */
:root {
  --brand-gradient: linear-gradient(
    135deg,
    oklch(var(--brand-primary)),
    oklch(var(--brand-secondary))
  );
}

/* Use in components */
.brand-hero {
  background: var(--brand-gradient);
}
```

### 2. Extend with Utility Classes

```tsx
// Good: Add utilities without breaking existing ones
<Card className="relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent" />
  <CardContent className="relative z-10">
    {/* Content */}
  </CardContent>
</Card>
```

### 3. Respect Dark Mode

```css
/* Always provide dark mode variants */
.brand-feature {
  background: oklch(var(--brand-primary) / 0.1);
}

.dark .brand-feature {
  background: oklch(var(--brand-primary) / 0.05);
}
```

## File Organization

### Recommended Structure

```
apps/[app-name]/src/
├── components/
│   ├── ui/              # ❌ Don't modify (template components)
│   ├── layout/          # ✅ Can extend with new layouts
│   ├── sections/        # ✅ Can add new sections
│   └── brand/           # ✅ Brand-specific components
├── styles/
│   ├── globals.css      # ⚠️ Add imports only
│   └── brand.css        # ✅ Brand-specific styles
├── config/
│   ├── site.ts          # ⚠️ Extend, don't replace
│   └── brand.ts         # ✅ Brand-specific config
└── lib/
    ├── utils.ts         # ❌ Don't modify
    └── brand-utils.ts   # ✅ Brand-specific utilities
```

## Configuration Management

### Site Configuration

```ts
// config/site.ts - Extend the base configuration
import { siteConfig as baseConfig } from "./base-site-config";

export const siteConfig = {
  ...baseConfig,
  name: "Summer Brain Rot",
  description: "Your customized description",
  // Add new properties
  brand: {
    tagline: "Embrace the Grind",
    primaryColor: "citrus",
  },
};
```

### Component Configuration

```json
// components.json - Don't modify these settings
{
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "baseColor": "neutral", // Keep template default
    "cssVariables": true
  }
}
```

## Testing Customizations

### Before Customizing

1. **Check Template Features**: Ensure you're not duplicating existing functionality
2. **Review Documentation**: Check if the template provides hooks for your use case
3. **Test in Isolation**: Create a proof of concept before full implementation

### After Customizing

1. **Test Responsiveness**: Ensure customizations work on all screen sizes
2. **Check Dark Mode**: Verify appearance in both light and dark themes
3. **Browser Compatibility**: Test in multiple browsers
4. **Performance Impact**: Measure any performance changes

## Migration and Updates

### Preparing for Template Updates

1. **Track Customizations**: Maintain a log of all customizations
2. **Use Git Branches**: Keep customizations in feature branches
3. **Document Decisions**: Use ADRs for significant changes

### Update Process

```bash
# 1. Create update branch
git checkout -b update/template-v1.2.0

# 2. Update template files
cp -r new-template/src/components/ui/* apps/marketing/src/components/ui/

# 3. Test thoroughly
npm run test
npm run build

# 4. Document changes
echo "Updated to Template v1.2.0" >> CHANGELOG.md
```

## Examples

### Example 1: Adding a Custom Hero Section

```tsx
// components/brand/BrandHero.tsx
import { Hero } from "@/components/sections/hero";
import { BrandAnimation } from "./BrandAnimation";

export function BrandHero() {
  return (
    <div className="relative">
      <Hero /> {/* Keep original hero */}
      <BrandAnimation className="absolute inset-0 pointer-events-none" />
    </div>
  );
}
```

### Example 2: Customizing Dashboard Stats

```tsx
// components/dashboard/BrandStats.tsx
import { StatsCards } from "@/components/dashboard/stats-cards";
import { Card } from "@/components/ui/card";

export function BrandStats({ stats }) {
  return (
    <>
      <StatsCards stats={stats} />
      <Card className="mt-4 p-6 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10">
        <h3 className="text-lg font-semibold">Brand Insights</h3>
        {/* Additional brand-specific stats */}
      </Card>
    </>
  );
}
```

### Example 3: Theme Extension

```css
/* styles/brand-theme.css */
@layer base {
  :root {
    /* Extend without overriding */
    --brand-muted: oklch(0.95 0.01 125.59);
    --brand-accent: oklch(0.7856 0.1355 178.97);
  }

  .dark {
    --brand-muted: oklch(0.25 0.01 125.59);
    --brand-accent: oklch(0.6856 0.1355 178.97);
  }
}

@layer utilities {
  .text-brand-gradient {
    @apply bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent;
  }
}
```

## Troubleshooting

### Common Issues

1. **Style Conflicts**
   - Check specificity of custom styles
   - Use CSS layers appropriately
   - Avoid !important declarations

2. **Component Props Errors**
   - Ensure wrapper components pass all props
   - Check TypeScript types match

3. **Build Failures**
   - Verify imports are correct
   - Check for circular dependencies
   - Ensure environment variables are set

## Checklist for Customizations

Before implementing any customization, verify:

- [ ] Is this functionality already in the template?
- [ ] Can I achieve this through composition?
- [ ] Will this break template updates?
- [ ] Is the customization documented?
- [ ] Does it work in dark mode?
- [ ] Is it responsive?
- [ ] Does it follow accessibility guidelines?
- [ ] Have I tested thoroughly?

## Educational Value

These customization patterns teach:
- **Component Composition**: Building complex UIs from simple parts
- **Design System Thinking**: Working within constraints
- **Maintainable Code**: Writing upgradeable customizations
- **Professional Practices**: Following industry standards

Remember: The goal is to enhance the templates while preserving their professional quality and maintainability.