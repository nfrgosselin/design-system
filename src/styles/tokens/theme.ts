export const themeTokens = {
  colors: {
    // Base colors
    background: {
      DEFAULT: 'var(--background)',
      subtle: 'var(--muted)',
    },
    foreground: {
      DEFAULT: 'var(--foreground)',
      subtle: 'var(--muted-foreground)',
    },
    // Stone Scale
    stone: {
      50: 'var(--stone-50)',
      100: 'var(--stone-100)',
      200: 'var(--stone-200)',
      300: 'var(--stone-300)',
      400: 'var(--stone-400)',
      500: 'var(--stone-500)',
      600: 'var(--stone-600)',
      700: 'var(--stone-700)',
      800: 'var(--stone-800)',
      900: 'var(--stone-900)',
    },
    // Product Identity Colors
    ocean: {
      DEFAULT: 'var(--ocean)',
      hover: 'var(--ocean-hover)',
      active: 'var(--ocean-active)',
    },
    sunset: {
      DEFAULT: 'var(--sunset)',
      hover: 'var(--sunset-hover)',
      active: 'var(--sunset-active)',
    },
    sun: {
      DEFAULT: 'var(--sun)',
      hover: 'var(--sun-hover)',
      active: 'var(--sun-active)',
    },
    marine: {
      DEFAULT: 'var(--marine)',
      hover: 'var(--marine-hover)',
      active: 'var(--marine-active)',
    },
    // Supporting Accents
    seafoam: {
      DEFAULT: 'var(--seafoam)',
    },
    coral: {
      DEFAULT: 'var(--coral)',
    },
    navy: {
      DEFAULT: 'var(--navy)',
    },
    amber: {
      DEFAULT: 'var(--amber)',
    },
    lagoon: {
      DEFAULT: 'var(--lagoon)',
    },
    peach: {
      DEFAULT: 'var(--peach)',
    },
    slate: {
      DEFAULT: 'var(--slate)',
    },
    gold: {
      DEFAULT: 'var(--gold)',
    },
    // Status colors
    success: {
      DEFAULT: 'var(--success)',
      subtle: 'var(--success-subtle)',
    },
    warning: {
      DEFAULT: 'var(--warning)',
      subtle: 'var(--warning-subtle)',
    },
    error: {
      DEFAULT: 'var(--error)',
      subtle: 'var(--error-subtle)',
    },
    info: {
      DEFAULT: 'var(--info)',
      subtle: 'var(--info-subtle)',
    },
    // Surface colors
    surface: {
      DEFAULT: 'var(--surface)',
      hover: 'var(--surface-hover)',
      active: 'var(--surface-active)',
    },
    // Border colors
    border: {
      DEFAULT: 'var(--border)',
      subtle: 'var(--border-subtle)',
      hover: 'var(--border-hover)',
    },
    // Focus ring
    ring: {
      DEFAULT: 'var(--ring)',
    },
    // Special Effects
    overlay: {
      light: 'var(--overlay-light)',
      medium: 'var(--overlay-medium)',
      heavy: 'var(--overlay-heavy)',
    },
    // shadcn/ui integration
    primary: {
      DEFAULT: 'var(--ocean)',
      foreground: 'var(--primary-foreground)',
    },
    secondary: {
      DEFAULT: 'var(--secondary)',
      foreground: 'var(--secondary-foreground)',
    },
    muted: {
      DEFAULT: 'var(--muted)',
      foreground: 'var(--muted-foreground)',
    },
    accent: {
      DEFAULT: 'var(--accent)',
      foreground: 'var(--accent-foreground)',
    },
    destructive: {
      DEFAULT: 'var(--destructive)',
      foreground: 'var(--destructive-foreground)',
    },
    card: {
      DEFAULT: 'var(--card)',
      foreground: 'var(--card-foreground)',
    },
    popover: {
      DEFAULT: 'var(--popover)',
      foreground: 'var(--popover-foreground)',
    },
    input: {
      DEFAULT: 'var(--input)',
    },
    // Chart colors
    chart: {
      1: 'var(--chart-1)',
      2: 'var(--chart-2)',
      3: 'var(--chart-3)',
      4: 'var(--chart-4)',
      5: 'var(--chart-5)',
    },
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
    section: 'var(--spacing-section)',
    content: 'var(--spacing-content)',
    element: 'var(--spacing-element)',
    relaxed: 'var(--spacing-relaxed)',
    compact: 'var(--spacing-compact)',
  },
  typography: {
    font: {
      serif: 'var(--font-serif)',
      sans: 'var(--font-sans)',
      mono: 'var(--font-mono)',
    },
    size: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '20px',
      xl: '25px',
      '2xl': '31px',
      '3xl': '39px',
      '4xl': '49px',
    },
    weight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      none: '1',
      tight: '1.1',
      snug: '1.2',
      normal: '1.25',
      relaxed: '1.75',
    },
  },
  radius: {
    none: '0px',
    sm: 'calc(var(--radius) - 4px)',
    DEFAULT: 'var(--radius)',
    md: 'calc(var(--radius) - 2px)',
    lg: 'var(--radius)',
    xl: 'calc(var(--radius) + 4px)',
    '2xl': 'calc(var(--radius) + 8px)',
    full: '9999px',
  },
  container: {
    max: 'var(--container-max)',
    content: 'var(--container-content)',
    form: 'var(--container-form)',
  },
  animation: {
    duration: {
      instant: 'var(--duration-instant)',
      'ultra-fast': 'var(--duration-ultra-fast)',
      fast: 'var(--duration-fast)',
      base: 'var(--duration-base)',
      slow: 'var(--duration-slow)',
      deliberate: 'var(--duration-deliberate)',
    },
    easing: {
      'in-out': 'var(--ease-in-out)',
      out: 'var(--ease-out)',
      in: 'var(--ease-in)',
      linear: 'var(--ease-linear)',
    },
    transition: {
      fade: 'var(--transition-fade)',
      slide: 'var(--transition-slide)',
      expand: 'var(--transition-expand)',
      color: 'var(--transition-color)',
      transform: 'var(--transition-transform)',
    },
  },
  screens: {
    sm: 'var(--breakpoint-sm)',
    md: 'var(--breakpoint-md)',
    lg: 'var(--breakpoint-lg)',
    xl: 'var(--breakpoint-xl)',
  },
  elevation: {
    level: {
      1: 'var(--shadow-level-1)',
      2: 'var(--shadow-level-2)',
      3: 'var(--shadow-level-3)',
      4: 'var(--shadow-level-4)',
    },
    component: {
      card: 'var(--shadow-card)',
      dropdown: 'var(--shadow-dropdown)',
      modal: 'var(--shadow-modal)',
      focus: 'var(--shadow-focus)',
    },
  },
} as const;

export type ThemeTokens = typeof themeTokens;
