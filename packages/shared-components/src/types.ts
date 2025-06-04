export interface LogoProps {
  variant?: 'primary' | 'icon' | 'wordmark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animated?: boolean;
}

export interface GradientTextProps {
  children: React.ReactNode;
  variant?: 'primary' | 'electric' | 'success' | 'hero';
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  animated?: boolean;
}

export interface BrandButtonProps {
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

export interface BrandCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'gradient' | 'glow';
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}

export interface StatusBadgeProps {
  children: React.ReactNode;
  status: 'success' | 'warning' | 'error' | 'info' | 'neutral';
  size?: 'sm' | 'md';
  className?: string;
}
