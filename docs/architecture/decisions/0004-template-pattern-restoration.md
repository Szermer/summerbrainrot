# 4. Template Pattern Restoration

Date: 2025-01-06

## Status

Accepted

## Context

During initial development, both the marketing site and portal app deviated significantly from their original template patterns:

**Marketing Site Issues:**
- Lost carousel functionality from Streamline template
- Replaced sand color scheme with heavy brand customization
- Removed original feature components (Feature1, Feature2, Feature3)
- Created complex custom CSS utilities
- Lost original navigation patterns

**Portal App Issues:**
- Minimal customization left template defaults (e.g., "Shadcnblocks", "ausrobdev")
- No brand integration
- Inconsistent experience with marketing site

This created maintenance complexity and diminished the value of using established templates.

## Decision

We will restore the original template patterns while applying minimal, strategic brand customization:

### Marketing Site (Streamline Template)
1. **Restore carousel functionality** in hero section
2. **Maintain sand color scheme** as base with subtle brand accents
3. **Use original feature components** with updated content
4. **Simplify CSS** by removing excessive custom utilities
5. **Follow template navigation patterns** with minimal modifications

### Portal App (shadcn Admin Template)
1. **Update branding elements** (team names, user defaults)
2. **Add subtle brand colors** to theme (purple primary, pink accent)
3. **Maintain template structure** without major modifications
4. **Keep shadcn component patterns** intact

## Consequences

### Positive
- **Reduced maintenance burden** by following established patterns
- **Improved consistency** with template updates
- **Cleaner codebase** with less custom CSS
- **Better performance** from simpler styling
- **Educational value** for participants learning from quality templates

### Negative
- **Less brand differentiation** initially
- **Need to work within template constraints**
- **Potential rework** of heavily customized sections

### Neutral
- **Brand expression** shifts from heavy visual customization to content and functionality
- **Template updates** become easier to integrate
- **Learning curve** for working within template patterns

## Implementation Notes

1. **Preserve original templates** in `/templates` directory for reference
2. **Document any deviations** from templates in component comments
3. **Use composition** over modification when possible
4. **Test thoroughly** after restoration to ensure functionality

## Related Decisions

- [ADR-0001](./0001-monorepo-structure.md) - Monorepo structure supports template preservation
- [ADR-0003](./0003-firebase-platform.md) - Firebase integration remains independent of UI templates

## References

- [Streamline Next.js Template](https://github.com/streamline/nextjs-template)
- [shadcn Admin Template](https://github.com/shadcn/admin-template)
- [Tailwind CSS v4 Migration Guide](https://tailwindcss.com/docs/v4-beta)