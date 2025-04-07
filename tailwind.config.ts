import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './stories/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: 'var(--breakpoint-sm)',
        md: 'var(--breakpoint-md)',
        lg: 'var(--breakpoint-lg)',
        xl: 'var(--breakpoint-xl)',
      },
    },
    screens: {
      sm: '640px', // Matches form container width
      md: '768px', // Matches content container width
      lg: '1024px', // Comfortable reading width before max
      xl: '1280px', // Matches max container width
    },
    extend: {
      gridTemplateColumns: {
        '1': 'repeat(1, minmax(0, 1fr))',
        '2': 'repeat(2, minmax(0, 1fr))',
        '3': 'repeat(3, minmax(0, 1fr))',
        '4': 'repeat(4, minmax(0, 1fr))',
      },
      spacing: {
        1: 'var(--space-1)', // 4px
        2: 'var(--space-2)', // 8px - Base unit
        3: 'var(--space-3)', // 12px
        4: 'var(--space-4)', // 16px
        6: 'var(--space-6)', // 24px
        8: 'var(--space-8)', // 32px
        12: 'var(--space-12)', // 48px
        16: 'var(--space-16)', // 64px
        24: 'var(--space-24)', // 96px
        layout: 'var(--spacing-layout)',
        section: 'var(--spacing-section)',
        content: 'var(--spacing-content)',
        element: 'var(--spacing-element)',
        relaxed: 'var(--spacing-relaxed)',
        compact: 'var(--spacing-compact)',
      },
      colors: {
        // Base Neutrals
        black: 'hsl(var(--black))',
        white: 'hsl(var(--white))',
        paper: 'hsl(var(--paper))',

        // Theme Colors
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        // Design System Colors
        brand: 'hsl(var(--brand))',

        // Product Identity Colors
        ocean: {
          DEFAULT: 'hsl(var(--ocean))',
          hover: 'hsl(var(--ocean-hover))',
          active: 'hsl(var(--ocean-active))',
        },
        sunset: 'hsl(var(--sunset))',
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
        success: 'hsl(var(--success))',
        warning: 'hsl(var(--warning))',
        error: 'hsl(var(--error))',
        info: 'hsl(var(--info))',
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
        border: 'hsl(var(--border))',
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
      transitionDuration: {
        instant: 'var(--duration-instant)',
        'ultra-fast': 'var(--duration-ultra-fast)',
        fast: 'var(--duration-fast)',
        base: 'var(--duration-base)',
        slow: 'var(--duration-slow)',
        deliberate: 'var(--duration-deliberate)',
      },
      transitionTimingFunction: {
        'in-out': 'var(--ease-in-out)',
        out: 'var(--ease-out)',
        in: 'var(--ease-in)',
        linear: 'var(--ease-linear)',
      },
      transitionProperty: {
        fade: 'opacity',
        slide: 'transform',
        expand: 'height, width',
        color: 'background-color, border-color, color',
        transform: 'transform',
      },
      boxShadow: {
        'level-0': 'var(--shadow-level-0)',
        'level-1': 'var(--shadow-level-1)',
        'level-2': 'var(--shadow-level-2)',
        'level-3': 'var(--shadow-level-3)',
        card: 'var(--shadow-card)',
        dropdown: 'var(--shadow-dropdown)',
        popover: 'var(--shadow-popover)',
        dialog: 'var(--shadow-dialog)',
      },
      borderWidth: {
        DEFAULT: 'var(--border-width-default)',
        hover: 'var(--border-width-hover)',
      },
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
      wordSpacing: {
        tight: 'var(--word-spacing-tight)',
        reduced: 'var(--word-spacing-reduced)',
        normal: 'var(--word-spacing-normal)',
        relaxed: 'var(--word-spacing-relaxed)',
        spacious: 'var(--word-spacing-spacious)',
        expanded: 'var(--word-spacing-expanded)',
      },
      maxWidth: {
        metric: 'var(--container-metric)', // 320px
        card: 'var(--container-card)', // 480px
        modal: 'var(--container-modal)', // 560px
        form: 'var(--container-form)', // 640px
        content: 'var(--container-content)', // 768px
        max: 'var(--container-max)', // 1280px
        prose: '68ch',
      },
      aspectRatio: {
        'chart-wide': 'var(--chart-aspect-wide)',
        'chart-standard': 'var(--chart-aspect-standard)',
        'chart-square': 'var(--chart-aspect-square)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} as const;

export default config;
