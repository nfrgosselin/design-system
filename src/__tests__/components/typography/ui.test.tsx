import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  Caption,
  UIDescription,
  UIHeader,
  MetaText,
  NavText,
  UIText,
} from '../../../components/typography/ui';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('UI Typography Components', () => {
  describe('UIHeader', () => {
    it('renders with default variant styles', () => {
      render(<UIHeader>Test Header</UIHeader>);
      const header = screen.getByRole('heading', { level: 2 });
      expect(header).toHaveClass('font-sans', 'text-xl', 'font-medium', 'text-stone-900', 'mb-4');
    });

    it('renders with correct level styles', () => {
      render(<UIHeader level={1}>Level 1 Header</UIHeader>);
      const header = screen.getByRole('heading', { level: 1 });
      expect(header).toHaveClass('text-2xl', 'font-semibold');
    });

    it('renders with muted variant', () => {
      render(<UIHeader variant="muted">Muted Header</UIHeader>);
      const header = screen.getByRole('heading', { level: 2 });
      expect(header).toHaveClass('text-stone-600');
    });

    it('accepts and applies custom className', () => {
      render(<UIHeader className="custom-class">Test Header</UIHeader>);
      const header = screen.getByRole('heading', { level: 2 });
      expect(header).toHaveClass('custom-class');
    });
  });

  describe('Caption', () => {
    it('renders with default variant styles', () => {
      render(<Caption>Test Caption</Caption>);
      const caption = screen.getByText('Test Caption');
      expect(caption).toHaveClass('font-sans', 'text-sm', 'text-stone-700', 'leading-normal');
    });

    it('renders with muted variant', () => {
      render(<Caption variant="muted">Muted Caption</Caption>);
      const caption = screen.getByText('Muted Caption');
      expect(caption).toHaveClass('text-stone-500');
    });

    it('accepts and applies custom className', () => {
      render(<Caption className="custom-class">Test Caption</Caption>);
      const caption = screen.getByText('Test Caption');
      expect(caption).toHaveClass('custom-class');
    });
  });

  describe('UIDescription', () => {
    it('renders with default variant styles', () => {
      render(<UIDescription>Test Description</UIDescription>);
      const description = screen.getByText('Test Description');
      expect(description).toHaveClass(
        'font-sans',
        'text-base',
        'text-stone-700',
        'leading-relaxed',
        'mb-4'
      );
    });

    it('renders with muted variant', () => {
      render(<UIDescription variant="muted">Muted Description</UIDescription>);
      const description = screen.getByText('Muted Description');
      expect(description).toHaveClass('text-stone-500');
    });

    it('accepts and applies custom className', () => {
      render(<UIDescription className="custom-class">Test Description</UIDescription>);
      const description = screen.getByText('Test Description');
      expect(description).toHaveClass('custom-class');
    });
  });

  describe('MetaText', () => {
    it('renders with default variant styles', () => {
      render(<MetaText>Test Meta</MetaText>);
      const meta = screen.getByText('Test Meta');
      expect(meta).toHaveClass(
        'font-sans',
        'font-normal',
        'text-sm',
        'text-stone-700',
        'tracking-wider',
        'uppercase'
      );
    });

    it('renders with muted variant', () => {
      render(<MetaText variant="muted">Muted Meta</MetaText>);
      const meta = screen.getByText('Muted Meta');
      expect(meta).toHaveClass('text-stone-500');
    });

    it('renders with accent variant', () => {
      render(<MetaText variant="accent">Accent Meta</MetaText>);
      const meta = screen.getByText('Accent Meta');
      expect(meta).toHaveClass('text-ds-primary');
    });

    it('accepts and applies custom className', () => {
      render(<MetaText className="custom-class">Test Meta</MetaText>);
      const meta = screen.getByText('Test Meta');
      expect(meta).toHaveClass('custom-class');
    });
  });

  describe('NavText', () => {
    it('renders with default variant styles', () => {
      render(<NavText>Test Nav</NavText>);
      const nav = screen.getByText('Test Nav');
      expect(nav).toHaveClass(
        'font-sans',
        'text-base',
        'text-stone-700',
        'font-medium',
        'hover:text-primary',
        'uppercase',
        'tracking-wider'
      );
    });

    it('renders with active variant', () => {
      render(<NavText variant="active">Active Nav</NavText>);
      const nav = screen.getByText('Active Nav');
      expect(nav).toHaveClass('text-ds-primary');
    });

    it('renders with muted variant', () => {
      render(<NavText variant="muted">Muted Nav</NavText>);
      const nav = screen.getByText('Muted Nav');
      expect(nav).toHaveClass('text-stone-500');
    });

    it('renders with different size', () => {
      render(<NavText size="sm">Small Nav</NavText>);
      const nav = screen.getByText('Small Nav');
      expect(nav).toHaveClass('text-sm');
    });

    it('renders with no transform', () => {
      render(<NavText transform="none">No Transform Nav</NavText>);
      const nav = screen.getByText('No Transform Nav');
      expect(nav).not.toHaveClass('uppercase', 'tracking-wider');
    });

    it('renders with underline', () => {
      render(<NavText underline>Underlined Nav</NavText>);
      const nav = screen.getByText('Underlined Nav');
      expect(nav).toHaveClass('pb-0.5');
      expect(nav).toHaveClass('after:absolute', 'after:bottom-0', 'after:left-0', 'after:h-px');
    });

    it('accepts and applies custom className', () => {
      render(<NavText className="custom-class">Test Nav</NavText>);
      const nav = screen.getByText('Test Nav');
      expect(nav).toHaveClass('custom-class');
    });
  });

  describe('UIText', () => {
    it('renders with default variant and size styles', () => {
      render(<UIText>Test Text</UIText>);
      const text = screen.getByText('Test Text');
      expect(text).toHaveClass('font-sans', 'text-base', 'text-stone-900', 'font-normal');
    });

    it('renders with muted variant', () => {
      render(<UIText variant="muted">Muted Text</UIText>);
      const text = screen.getByText('Muted Text');
      expect(text).toHaveClass('text-stone-500');
    });

    it('renders with accent variant', () => {
      render(<UIText variant="accent">Accent Text</UIText>);
      const text = screen.getByText('Accent Text');
      expect(text).toHaveClass('text-ds-primary');
    });

    it('renders with different sizes', () => {
      const sizes = ['xs', 'sm', 'base', 'lg'] as const;
      sizes.forEach(size => {
        render(<UIText size={size}>{`${size} Text`}</UIText>);
        const text = screen.getByText(`${size} Text`);
        expect(text).toHaveClass(`text-${size}`);
      });
    });

    it('renders with different weights', () => {
      const weights = {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
      } as const;

      Object.entries(weights).forEach(([weight, className]) => {
        render(
          <UIText weight={weight as 'normal' | 'medium' | 'semibold'}>{`${weight} Text`}</UIText>
        );
        const text = screen.getByText(`${weight} Text`);
        expect(text).toHaveClass(className);
      });
    });

    it('accepts and applies custom className', () => {
      render(<UIText className="custom-class">Test Text</UIText>);
      const text = screen.getByText('Test Text');
      expect(text).toHaveClass('custom-class');
    });
  });

  describe('Accessibility', () => {
    it('Components have no accessibility violations', async () => {
      const { container } = render(
        <>
          <UIHeader>Test Header</UIHeader>
          <Caption>Test Caption</Caption>
          <UIDescription>Test Description</UIDescription>
          <MetaText>Test Meta</MetaText>
          <NavText>Test Nav</NavText>
          <UIText>Test Text</UIText>
        </>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('UIHeader maintains proper heading hierarchy', () => {
      render(
        <>
          <UIHeader level={1}>Level 1</UIHeader>
          <UIHeader level={2}>Level 2</UIHeader>
          <UIHeader level={3}>Level 3</UIHeader>
        </>
      );
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    });
  });
});
