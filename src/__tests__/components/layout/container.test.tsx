import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  Container,
  ContainerProps,
  ContentContainer,
  FormContainer,
  ModalContainer,
  CardContainer,
  MetricContainer,
} from '../../../components/layout/core/container';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Container', () => {
  describe('Basic Rendering', () => {
    test('renders with default props', () => {
      render(<Container>Content</Container>);
      const container = screen.getByText('Content');
      expect(container).toHaveClass('mx-auto', 'w-full', 'px-4', 'md:px-6', 'lg:px-8', 'max-w-max');
    });

    test('renders with custom className while preserving defaults', () => {
      render(<Container className="custom-class">Content</Container>);
      const container = screen.getByText('Content');
      expect(container).toHaveClass('mx-auto', 'w-full', 'custom-class');
    });
  });

  describe('Size Variants', () => {
    test.each([
      ['max', 'max-w-max'],
      ['content', 'max-w-content'],
      ['form', 'max-w-form'],
      ['modal', 'max-w-modal'],
      ['card', 'max-w-card'],
      ['metric', 'max-w-metric'],
    ])('applies correct max width class for %s size', (size, expectedClass) => {
      render(<Container size={size as ContainerProps['size']}>Content</Container>);
      const container = screen.getByText('Content');
      expect(container).toHaveClass(expectedClass);
    });
  });

  describe('Custom Element Rendering', () => {
    test('renders as div by default', () => {
      render(<Container>Content</Container>);
      expect(screen.getByText('Content').tagName.toLowerCase()).toBe('div');
    });

    test.each([
      ['main', 'main'],
      ['article', 'article'],
      ['section', 'section'],
      ['aside', 'aside'],
    ])('renders as %s when specified', (element, expectedTag) => {
      render(<Container as={element as ContainerProps['as']}>Content</Container>);
      expect(screen.getByText('Content').tagName.toLowerCase()).toBe(expectedTag);
    });
  });

  describe('Semantic Wrapper Components', () => {
    test('ContentContainer renders with correct props', () => {
      render(<ContentContainer>Content</ContentContainer>);
      const container = screen.getByText('Content');
      expect(container).toHaveClass('max-w-content');
    });

    test('FormContainer renders with correct props', () => {
      render(<FormContainer>Content</FormContainer>);
      const container = screen.getByText('Content');
      expect(container).toHaveClass('max-w-form');
    });

    test('ModalContainer renders with correct props', () => {
      render(<ModalContainer>Content</ModalContainer>);
      const container = screen.getByText('Content');
      expect(container).toHaveClass('max-w-modal');
    });

    test('CardContainer renders with correct props', () => {
      render(<CardContainer>Content</CardContainer>);
      const container = screen.getByText('Content');
      expect(container).toHaveClass('max-w-card');
    });

    test('MetricContainer renders with correct props', () => {
      render(<MetricContainer>Content</MetricContainer>);
      const container = screen.getByText('Content');
      expect(container).toHaveClass('max-w-metric');
    });

    test('semantic wrappers accept and forward additional props', () => {
      render(
        <ContentContainer className="custom-class" data-testid="container">
          Content
        </ContentContainer>
      );
      const container = screen.getByTestId('container');
      expect(container).toHaveClass('custom-class');
    });

    test('semantic wrappers forward ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<ContentContainer ref={ref}>Content</ContentContainer>);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe('Accessibility', () => {
    test('has no accessibility violations', async () => {
      const { container } = render(
        <Container>
          <p>Accessible Content</p>
        </Container>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    test('preserves role attributes', () => {
      render(
        <Container role="region" aria-label="Test Region">
          Content
        </Container>
      );
      expect(screen.getByRole('region')).toBeInTheDocument();
      expect(screen.getByRole('region')).toHaveAttribute('aria-label', 'Test Region');
    });

    test('semantic wrappers maintain accessibility attributes', async () => {
      const { container } = render(
        <ContentContainer role="region" aria-label="Content Region">
          <p>Content</p>
        </ContentContainer>
      );
      expect(screen.getByRole('region')).toBeInTheDocument();
      expect(screen.getByRole('region')).toHaveAttribute('aria-label', 'Content Region');
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
