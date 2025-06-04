import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  variant?: 'primary' | 'electric' | 'success' | 'hero';
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  animated?: boolean;
}

const gradientVariants = {
  primary: 'bg-gradient-to-r from-brain-rot-purple-500 to-brain-rot-pink-500',
  electric: 'bg-gradient-to-r from-brain-rot-cyan-500 to-brain-rot-purple-500',
  success: 'bg-gradient-to-r from-brain-rot-accent-500 to-brain-rot-cyan-500',
  hero: 'bg-gradient-to-r from-brain-rot-purple-500 via-brain-rot-pink-500 to-brain-rot-cyan-500',
};

/**
 * Gradient Text Component
 * 
 * Creates text with Summer Brain Rot brand gradients.
 * Perfect for headings, CTAs, and accent text.
 * 
 * @param children - Text content
 * @param variant - Gradient style
 * @param className - Additional CSS classes
 * @param as - HTML element to render
 * @param animated - Enable gradient animation
 */
export const GradientText: React.FC<GradientTextProps> = ({
  children,
  variant = 'primary',
  className = '',
  as: Component = 'span',
  animated = false,
}) => {
  const gradientClass = gradientVariants[variant];
  const animationClass = animated ? 'bg-[length:200%_200%] animate-gradient' : '';
  
  const classes = `
    ${gradientClass}
    ${animationClass}
    bg-clip-text 
    text-transparent 
    font-bold
    ${className}
  `.trim();

  return (
    <Component className={classes}>
      {children}
    </Component>
  );
};

interface BrandButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  external?: boolean;
}

const buttonVariants = {
  primary: 'bg-brain-rot-gradient text-white hover:shadow-brand-lg hover:scale-105',
  secondary: 'bg-brain-rot-cyan-500 text-white hover:bg-brain-rot-cyan-600 hover:scale-105',
  outline: 'border-2 border-brain-rot-purple-500 text-brain-rot-purple-500 hover:bg-brain-rot-purple-500 hover:text-white',
  ghost: 'text-brain-rot-purple-500 hover:bg-brain-rot-purple-50 hover:text-brain-rot-purple-600',
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-brand',
  lg: 'px-8 py-4 text-lg rounded-brand-lg',
};

/**
 * Brand Button Component
 * 
 * Buttons styled with Summer Brain Rot brand colors and effects.
 * Includes hover animations and accessibility features.
 */
export const BrandButton: React.FC<BrandButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  href,
  external = false,
}) => {
  const baseClasses = `
    ${buttonVariants[variant]}
    ${buttonSizes[size]}
    font-semibold
    transition-all
    duration-200
    ease-in-out
    focus:outline-none
    focus:ring-2
    focus:ring-brain-rot-purple-500
    focus:ring-offset-2
    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:hover:scale-100
    ${className}
  `.trim();

  if (href) {
    const linkProps = external 
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {};

    return (
      <a 
        href={href}
        className={baseClasses}
        {...linkProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  );
};

interface BrandCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'gradient' | 'glow';
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const cardVariants = {
  default: 'bg-white border border-gray-200 shadow-sm',
  gradient: 'bg-brain-rot-mesh border border-brain-rot-purple-200',
  glow: 'bg-white border border-brain-rot-purple-200 shadow-brain-rot',
};

const cardPadding = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

/**
 * Brand Card Component
 * 
 * Container component with Summer Brain Rot styling.
 * Perfect for feature cards, testimonials, and content blocks.
 */
export const BrandCard: React.FC<BrandCardProps> = ({
  children,
  variant = 'default',
  className = '',
  padding = 'md',
  hover = false,
}) => {
  const hoverClasses = hover 
    ? 'hover:shadow-brand-lg hover:scale-[1.02] hover:-translate-y-1'
    : '';

  const classes = `
    ${cardVariants[variant]}
    ${cardPadding[padding]}
    ${hoverClasses}
    rounded-brand-lg
    transition-all
    duration-300
    ease-out
    ${className}
  `.trim();

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

interface StatusBadgeProps {
  children: React.ReactNode;
  status: 'success' | 'warning' | 'error' | 'info' | 'neutral';
  size?: 'sm' | 'md';
  className?: string;
}

const statusVariants = {
  success: 'bg-brain-rot-accent-100 text-brain-rot-accent-800 border-brain-rot-accent-200',
  warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  error: 'bg-red-100 text-red-800 border-red-200',
  info: 'bg-brain-rot-cyan-100 text-brain-rot-cyan-800 border-brain-rot-cyan-200',
  neutral: 'bg-gray-100 text-gray-800 border-gray-200',
};

const statusSizes = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1 text-sm',
};

/**
 * Status Badge Component
 * 
 * Small status indicators with brand-consistent styling.
 * Used for progress states, notifications, and labels.
 */
export const StatusBadge: React.FC<StatusBadgeProps> = ({
  children,
  status,
  size = 'md',
  className = '',
}) => {
  const classes = `
    ${statusVariants[status]}
    ${statusSizes[size]}
    border
    rounded-full
    font-medium
    inline-flex
    items-center
    ${className}
  `.trim();

  return (
    <span className={classes}>
      {children}
    </span>
  );
};
