import React from 'react';

interface LogoProps {
  variant?: 'primary' | 'icon' | 'wordmark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animated?: boolean;
}

const sizeClasses = {
  sm: 'h-8',
  md: 'h-12',
  lg: 'h-16',
  xl: 'h-24',
};

/**
 * Summer Brain Rot Logo Component
 * 
 * A flexible logo component that provides consistent brand representation
 * across both marketing and portal applications.
 * 
 * @param variant - Logo style: 'primary' (full logo), 'icon' (brain only), 'wordmark' (text only)
 * @param size - Predefined size classes
 * @param className - Additional CSS classes
 * @param animated - Enable subtle animations
 */
export const Logo: React.FC<LogoProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  animated = false,
}) => {
  const baseClasses = `${sizeClasses[size]} ${className}`;
  const animationClasses = animated ? 'hover:scale-105 transition-transform duration-200' : '';
  
  if (variant === 'icon') {
    return (
      <div className={`${baseClasses} ${animationClasses}`}>
        <svg 
          viewBox="0 0 64 64" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6"/>
              <stop offset="50%" stopColor="#EC4899"/>
              <stop offset="100%" stopColor="#06B6D4"/>
            </linearGradient>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EC4899"/>
              <stop offset="100%" stopColor="#06B6D4"/>
            </linearGradient>
          </defs>
          
          <circle cx="32" cy="32" r="30" fill="url(#iconGradient)" opacity="0.1"/>
          
          <g transform="translate(12,12)">
            <path 
              d="M20 5C25 5 30 8 32 15C35 12 40 12 42 18C44 16 48 18 48 25C48 30 45 35 40 35C38 38 35 40 30 40C25 40 20 38 18 35C15 35 12 32 12 28C10 30 5 28 5 22C5 18 8 15 12 15C12 10 15 5 20 5Z" 
              fill="url(#iconGradient)"
            />
            
            <g stroke="url(#circuitGradient)" strokeWidth="1.5" fill="none" opacity="0.8">
              <path d="M15 18 L20 18 L22 16 L27 16"/>
              <path d="M14 24 L18 24 L20 26 L25 26"/>
              <path d="M23 20 L27 20 L29 22 L33 22"/>
              <path d="M18 30 L22 30 L24 32 L28 32"/>
              <path d="M20 16 L20 20"/>
              <path d="M25 22 L25 26"/>
              <path d="M30 18 L30 24"/>
            </g>
            
            <g fill="url(#circuitGradient)">
              <circle cx="20" cy="16" r="1.5"/>
              <circle cx="27" cy="18" r="1.5"/>
              <circle cx="22" cy="24" r="1.5"/>
              <circle cx="30" cy="26" r="1.5"/>
              <circle cx="24" cy="32" r="1.5"/>
              <circle cx="33" cy="22" r="1.5"/>
            </g>
            
            {animated && (
              <g fill="#FFFFFF" opacity="0.9">
                <circle cx="25" cy="20" r="0.8">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="28" cy="24" r="0.8">
                  <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
                </circle>
              </g>
            )}
          </g>
        </svg>
      </div>
    );
  }

  if (variant === 'wordmark') {
    return (
      <div className={`${baseClasses} ${animationClasses}`}>
        <svg 
          viewBox="0 0 200 60" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6"/>
              <stop offset="50%" stopColor="#EC4899"/>
              <stop offset="100%" stopColor="#06B6D4"/>
            </linearGradient>
          </defs>
          
          <text 
            x="0" 
            y="20" 
            fontFamily="Space Grotesk, sans-serif" 
            fontWeight="600" 
            fontSize="16" 
            fill="url(#textGradient)"
          >
            Summer
          </text>
          
          <text 
            x="0" 
            y="42" 
            fontFamily="Space Grotesk, sans-serif" 
            fontWeight="700" 
            fontSize="18" 
            fill="url(#textGradient)"
          >
            Brain Rot
          </text>
        </svg>
      </div>
    );
  }

  // Primary variant (default)
  return (
    <div className={`${baseClasses} ${animationClasses}`}>
      <svg 
        viewBox="0 0 300 80" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="brainRotGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6"/>
            <stop offset="50%" stopColor="#EC4899"/>
            <stop offset="100%" stopColor="#06B6D4"/>
          </linearGradient>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6"/>
            <stop offset="100%" stopColor="#EC4899"/>
          </linearGradient>
        </defs>
        
        <g transform="translate(10,15)">
          <path 
            d="M20 5C25 5 30 8 32 15C35 12 40 12 42 18C44 16 48 18 48 25C48 30 45 35 40 35C38 38 35 40 30 40C25 40 20 38 18 35C15 35 12 32 12 28C10 30 5 28 5 22C5 18 8 15 12 15C12 10 15 5 20 5Z" 
            fill="url(#iconGradient)"
          />
          
          <g stroke="url(#brainRotGradient)" strokeWidth="1.5" fill="none" opacity="0.7">
            <path d="M18 20 L22 20 L24 18 L28 18"/>
            <path d="M16 25 L20 25 L22 27 L26 27"/>
            <path d="M25 22 L29 22 L31 24 L35 24"/>
            <path d="M20 30 L24 30 L26 32 L30 32"/>
          </g>
          
          <g fill="url(#brainRotGradient)">
            <circle cx="22" cy="18" r="1"/>
            <circle cx="28" cy="20" r="1"/>
            <circle cx="24" cy="25" r="1"/>
            <circle cx="32" cy="28" r="1"/>
            <circle cx="26" cy="32" r="1"/>
          </g>
        </g>
        
        <g transform="translate(70,20)">
          <text 
            x="0" 
            y="20" 
            fontFamily="Space Grotesk, sans-serif" 
            fontWeight="600" 
            fontSize="18" 
            fill="url(#brainRotGradient)"
          >
            Summer
          </text>
          
          <text 
            x="0" 
            y="45" 
            fontFamily="Space Grotesk, sans-serif" 
            fontWeight="700" 
            fontSize="22" 
            fill="url(#brainRotGradient)"
          >
            Brain Rot
          </text>
        </g>
        
        <text 
          x="70" 
          y="65" 
          fontFamily="Inter, sans-serif" 
          fontWeight="400" 
          fontSize="10" 
          fill="#6B7280"
        >
          Strategic Learning Laboratory
        </text>
      </svg>
    </div>
  );
};
