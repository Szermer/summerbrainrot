# 12. Template Customization Guidelines

Date: 2025-01-06

## Status

Accepted

## Context

Summer Brain Rot uses two premium templates from shadcnblocks.com as the foundation for its applications:
- Marketing site: Streamline NextJS Template v1.1.0
- Portal app: Shadcn Admin Template v1.0.0

These templates provide professional-grade UI components, layouts, and patterns that significantly accelerate development. However, the project needs to customize these templates to:
- Incorporate brand identity
- Add platform-specific features
- Maintain educational value
- Support future growth

Without clear guidelines, customizations could:
- Break template update compatibility
- Degrade code quality
- Create maintenance burden
- Confuse contributors about acceptable changes

## Decision

Establish comprehensive template customization guidelines that:

1. **Preserve Template Integrity**
   - Keep original template files unmodified in `/components/ui/`
   - Use composition and wrapper patterns for customization
   - Maintain template file structure and naming conventions

2. **Define Clear Boundaries**
   - Document allowed vs restricted customizations
   - Provide specific examples and patterns
   - Create designated directories for brand-specific code

3. **Ensure Maintainability**
   - Require documentation for all customizations
   - Use extension rather than modification
   - Follow template design patterns

4. **Support Learning**
   - Include educational explanations
   - Demonstrate professional practices
   - Provide troubleshooting guidance

## Consequences

### Positive

- **Maintainable Codebase**: Clear separation between template and custom code
- **Easy Updates**: Template updates can be applied without breaking customizations
- **Consistent Quality**: Guidelines ensure professional standards are maintained
- **Educational Value**: Contributors learn proper customization techniques
- **Reduced Confusion**: Clear rules about what can and cannot be modified
- **Faster Development**: Patterns and examples accelerate feature implementation

### Negative

- **Initial Constraint**: Developers must learn guidelines before customizing
- **Indirect Approaches**: Some customizations require wrapper components
- **Documentation Overhead**: All customizations must be documented

### Neutral

- **Design Limitations**: Must work within template design system
- **Learning Curve**: Understanding composition patterns takes time
- **Review Process**: Customizations need verification against guidelines

## Implementation Details

### Core Principles

1. **Composition Over Modification**: Build on top of templates rather than changing them
2. **Extend, Don't Replace**: Add features alongside template functionality
3. **Respect the Design System**: Work within existing visual patterns
4. **Document All Changes**: Explain why and how customizations were made

### File Organization

```
apps/[app-name]/src/
├── components/
│   ├── ui/              # Template components (don't modify)
│   ├── brand/           # Brand-specific components
│   ├── enhanced/        # Extended template components
│   └── [feature]/       # Feature-specific components
```

### Customization Patterns

1. **Wrapper Components**: Wrap template components to add functionality
2. **Composition with Slots**: Use children and props to extend behavior
3. **Configuration Extensions**: Extend rather than replace configurations
4. **Style Additions**: Add new CSS variables and utilities without overriding

### Testing Requirements

- Verify responsiveness across devices
- Test in both light and dark modes
- Check browser compatibility
- Measure performance impact

## Educational Considerations

This decision teaches:
- **Design System Discipline**: Working within established patterns
- **Component Architecture**: Building maintainable component hierarchies
- **Professional Practices**: Following industry-standard customization approaches
- **Technical Documentation**: Writing clear guidelines for team collaboration

Students learn that constraints often lead to better design decisions and more maintainable code.

## Related Decisions

- [ADR-0001: Monorepo Structure](0001-monorepo-structure.md) - Affects shared component organization
- [ADR-0004: Template Pattern Restoration](0004-template-pattern-restoration.md) - Emphasizes template preservation
- [ADR-0008: Citrus Design System](0008-citrus-design-system.md) - Example of proper theme customization

## References

- [Template Customization Guide](../../TEMPLATE_CUSTOMIZATION_GUIDE.md)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Component Composition Patterns](https://react.dev/learn/thinking-in-react)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)