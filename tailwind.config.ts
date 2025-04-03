import type { Config } from 'tailwindcss';
import { themeTokens } from './src/styles/tokens/theme';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './stories/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      gridTemplateColumns: {
        '1': 'repeat(1, minmax(0, 1fr))',
        '2': 'repeat(2, minmax(0, 1fr))',
        '3': 'repeat(3, minmax(0, 1fr))',
        '4': 'repeat(4, minmax(0, 1fr))',
      },
      colors: {
        // Base colors
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        // Design System Colors
        'ds-primary': {
          DEFAULT: 'hsl(var(--ds-primary))',
          hover: 'hsl(var(--ds-primary-hover))',
          active: 'hsl(var(--ds-primary-active))',
        },

        // Product Identity Colors
        ocean: {
          DEFAULT: 'hsl(var(--ocean))',
          hover: 'hsl(var(--ocean-hover))',
          active: 'hsl(var(--ocean-active))',
        },
        sunset: {
          DEFAULT: 'hsl(var(--sunset))',
          hover: 'hsl(var(--sunset-hover))',
          active: 'hsl(var(--sunset-active))',
        },
        sun: {
          DEFAULT: 'hsl(var(--sun))',
          hover: 'hsl(var(--sun-hover))',
          active: 'hsl(var(--sun-active))',
        },
        marine: {
          DEFAULT: 'hsl(var(--marine))',
          hover: 'hsl(var(--marine-hover))',
          active: 'hsl(var(--marine-active))',
        },

        // Supporting Accents
        seafoam: { DEFAULT: 'hsl(var(--seafoam))' },
        coral: { DEFAULT: 'hsl(var(--coral))' },
        navy: { DEFAULT: 'hsl(var(--navy))' },
        amber: { DEFAULT: 'hsl(var(--amber))' },
        lagoon: { DEFAULT: 'hsl(var(--lagoon))' },
        peach: { DEFAULT: 'hsl(var(--peach))' },
        slate: { DEFAULT: 'hsl(var(--slate))' },
        gold: { DEFAULT: 'hsl(var(--gold))' },

        // Status Colors
        success: {
          DEFAULT: 'hsl(var(--success))',
          subtle: 'hsl(var(--success-subtle))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          subtle: 'hsl(var(--warning-subtle))',
        },
        error: {
          DEFAULT: 'hsl(var(--error))',
          subtle: 'hsl(var(--error-subtle))',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          subtle: 'hsl(var(--info-subtle))',
        },
        // Stone Scale
        stone: {
          50: 'hsl(var(--stone-50))',
          100: 'hsl(var(--stone-100))',
          200: 'hsl(var(--stone-200))',
          300: 'hsl(var(--stone-300))',
          400: 'hsl(var(--stone-400))',
          500: 'hsl(var(--stone-500))',
          600: 'hsl(var(--stone-600))',
          700: 'hsl(var(--stone-700))',
          800: 'hsl(var(--stone-800))',
          900: 'hsl(var(--stone-900))',
        },
        // Surface & UI Colors
        surface: {
          DEFAULT: 'hsl(var(--surface))',
          hover: 'hsl(var(--surface-hover))',
          active: 'hsl(var(--surface-active))',
        },
        // shadcn/ui required colors
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          '80': 'hsl(var(--primary) / 0.8)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: {
          DEFAULT: 'hsl(var(--border))',
          subtle: 'hsl(var(--border-subtle))',
          hover: 'hsl(var(--border-hover))',
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        // Chart colors
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        // Special Effects
        overlay: {
          light: 'hsl(var(--overlay-light))',
          medium: 'hsl(var(--overlay-medium))',
          heavy: 'hsl(var(--overlay-heavy))',
        },
      },
      spacing: themeTokens.spacing,
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        serif: ['var(--font-serif)'],
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        base: 'var(--text-base)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)',
        '4xl': 'var(--text-4xl)',
      },
      fontWeight: {
        normal: 'var(--weight-regular)',
        medium: 'var(--weight-medium)',
        semibold: 'var(--weight-semibold)',
        bold: 'var(--weight-bold)',
      },
      lineHeight: {
        none: 'var(--leading-none)',
        tight: 'var(--leading-tight)',
        snug: 'var(--leading-snug)',
        normal: 'var(--leading-normal)',
        relaxed: 'var(--leading-relaxed)',
        loose: 'var(--leading-loose)',
      },
      letterSpacing: {
        tightest: 'var(--tracking-tightest)',
        tighter: 'var(--tracking-tighter)',
        tight: 'var(--tracking-tight)',
        normal: 'var(--tracking-normal)',
        wide: 'var(--tracking-wide)',
        wider: 'var(--tracking-wider)',
        widest: 'var(--tracking-widest)',
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} as const;

export default config;
