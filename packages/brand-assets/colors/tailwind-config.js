module.exports = {
  theme: {
    extend: {
      colors: {
        // Summer Brain Rot brand colors
        'brain-rot': {
          purple: {
            50: '#F3F0FF',
            100: '#E9E2FF', 
            200: '#D6CCFF',
            300: '#B8A5FF',
            400: '#9575FF',
            500: '#8B5CF6', // Primary brand purple
            600: '#7C3AED',
            700: '#6D28D9',
            800: '#5B21B6',
            900: '#4C1D95',
            950: '#2E1065',
          },
          pink: {
            50: '#FDF2F8',
            100: '#FCE7F3',
            200: '#FBCFE8',
            300: '#F9A8D4',
            400: '#F472B6',
            500: '#EC4899', // Primary brand pink
            600: '#DB2777',
            700: '#BE185D',
            800: '#9D174D',
            900: '#831843',
            950: '#500724',
          },
          cyan: {
            50: '#ECFEFF',
            100: '#CFFAFE',
            200: '#A5F3FC',
            300: '#67E8F9',
            400: '#22D3EE',
            500: '#06B6D4', // Primary brand cyan
            600: '#0891B2',
            700: '#0E7490',
            800: '#155E75',
            900: '#164E63',
            950: '#083344',
          },
          accent: {
            50: '#ECFDF5',
            100: '#D1FAE5',
            200: '#A7F3D0',
            300: '#6EE7B7',
            400: '#34D399',
            500: '#10B981', // Success/growth color
            600: '#059669',
            700: '#047857',
            800: '#065F46',
            900: '#064E3B',
            950: '#022C22',
          }
        },
        // Functional colors
        background: {
          primary: '#F8FAFC',
          secondary: '#F3F4F6',
          dark: '#111827',
          'dark-secondary': '#1F2937',
        },
        text: {
          primary: '#1F2937',
          secondary: '#6B7280',
          inverse: '#F8FAFC',
          'dark-primary': '#F8FAFC',
          'dark-secondary': '#9CA3AF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'brand': '12px',
        'brand-lg': '16px',
        'brand-xl': '20px',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'brain-rot-gradient': 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #06B6D4 100%)',
        'brain-rot-gradient-dark': 'linear-gradient(135deg, #7C3AED 0%, #DB2777 50%, #0891B2 100%)',
      },
      animation: {
        'gradient': 'gradient 6s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        glow: {
          'from': {
            'text-shadow': '0 0 5px #8B5CF6, 0 0 10px #8B5CF6, 0 0 15px #8B5CF6'
          },
          'to': {
            'text-shadow': '0 0 10px #EC4899, 0 0 20px #EC4899, 0 0 30px #EC4899'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'brand': '0 4px 14px 0 rgba(139, 92, 246, 0.15)',
        'brand-lg': '0 10px 25px -3px rgba(139, 92, 246, 0.15), 0 4px 6px -2px rgba(139, 92, 246, 0.05)',
        'brain-rot': '0 0 0 1px rgba(139, 92, 246, 0.1), 0 4px 16px rgba(139, 92, 246, 0.12)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.4)',
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.4)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.4)',
      }
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.text-gradient-primary': {
          'background': 'linear-gradient(135deg, #8B5CF6, #EC4899)',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.text-gradient-electric': {
          'background': 'linear-gradient(135deg, #06B6D4, #8B5CF6)',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.text-gradient-success': {
          'background': 'linear-gradient(135deg, #10B981, #06B6D4)',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.bg-brain-rot-mesh': {
          'background': `
            radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)
          `,
        },
        '.border-gradient-primary': {
          'border': '1px solid transparent',
          'background': 'linear-gradient(135deg, #8B5CF6, #EC4899) border-box',
          '-webkit-mask': 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          '-webkit-mask-composite': 'destination-out',
          'mask-composite': 'exclude',
        }
      }
      addUtilities(newUtilities)
    },
  ],
}
