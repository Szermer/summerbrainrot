# Template Customization Quick Reference

## 🚦 Quick Decision Guide

### ✅ DO

- Create wrapper components around template components
- Add new pages and routes using template patterns
- Extend configurations with new properties
- Add brand-specific CSS variables
- Create new components in `/components/brand/`
- Use composition to add features
- Document why changes were made

### ❌ DON'T

- Modify files in `/components/ui/` directly
- Change template file structure
- Override base CSS variables
- Remove template functionality
- Use `!important` in styles
- Break responsive or dark mode support
- Make undocumented changes

## 📁 Where to Put Custom Code

```
✅ apps/marketing/src/components/brand/       # Brand components
✅ apps/marketing/src/components/enhanced/    # Extended components
✅ apps/marketing/src/styles/brand.css        # Brand styles
✅ apps/marketing/src/config/brand.ts         # Brand config

❌ apps/marketing/src/components/ui/          # Don't modify
❌ apps/marketing/src/lib/utils.ts            # Don't modify
```

## 🎨 Styling Patterns

### Adding Brand Colors
```css
/* ✅ Good: Add new variables */
:root {
  --brand-primary: oklch(0.8719 0.1829 125.59);
  --brand-secondary: oklch(0.7856 0.1355 178.97);
}

/* ❌ Bad: Override template variables */
:root {
  --primary: red; /* Breaks theme system */
}
```

### Extending Components
```tsx
/* ✅ Good: Wrapper component */
import { Button } from "@/components/ui/button";

export function BrandButton(props) {
  return (
    <Button 
      className="bg-brand-primary hover:bg-brand-primary/90" 
      {...props} 
    />
  );
}

/* ❌ Bad: Modifying original */
// Don't edit /components/ui/button.tsx
```

## 🔧 Common Customizations

### Custom Page Layout
```tsx
// ✅ Use template layout patterns
export default function CustomPage() {
  return (
    <>
      <Navbar />        {/* Template component */}
      <Hero />          {/* Template component */}
      <BrandSection />  {/* Your component */}
      <Footer />        {/* Template component */}
    </>
  );
}
```

### Enhanced Data Table
```tsx
// ✅ Wrap to add features
import { DataTable } from "@/components/ui/data-table";

export function BrandDataTable(props) {
  // Add your enhancements
  const enhancedColumns = [...props.columns, brandColumn];
  
  return <DataTable {...props} columns={enhancedColumns} />;
}
```

### Theme Extension
```css
/* ✅ Add utilities without breaking existing ones */
@layer utilities {
  .brand-gradient {
    @apply bg-gradient-to-r from-brand-primary to-brand-secondary;
  }
  
  .brand-glow {
    box-shadow: 0 0 20px oklch(var(--brand-primary) / 0.3);
  }
}
```

## 📋 Pre-Customization Checklist

Before making any change, ask:

1. **Does the template already have this?** Check docs and examples
2. **Can I compose instead of modify?** Use wrapper components
3. **Will this survive updates?** Keep template files pristine
4. **Is it documented?** Add comments explaining why
5. **Does it work everywhere?** Test responsive and dark mode

## 🚨 Red Flags

You're probably doing it wrong if you're:
- Editing files in `/components/ui/`
- Using `!important` in CSS
- Copying and modifying entire template components
- Changing the folder structure
- Breaking TypeScript types
- Removing template features

## 💡 Quick Tips

1. **Start Small**: Test customizations in isolation first
2. **Use Git**: Commit before and after customizations
3. **Check Examples**: Look at existing brand customizations
4. **Ask Questions**: Unsure? Check with the team
5. **Document Everything**: Future you will thank you

## 📚 Full Documentation

For detailed examples and patterns, see:
- [Template Customization Guide](./TEMPLATE_CUSTOMIZATION_GUIDE.md)
- [ADR-0012: Template Customization Guidelines](./architecture/decisions/0012-template-customization-guidelines.md)