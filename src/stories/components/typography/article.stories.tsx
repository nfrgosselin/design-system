import type { Meta, StoryObj } from '@storybook/react';
import {
  ArticleTitle,
  ArticleSubtitle,
  ArticleHeader,
  ArticleText,
  ArticleList,
  ArticleListItem,
  ArticleQuote,
} from '@/components/typography';

const meta = {
  title: 'Components/Typography/Article',
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'white',
    },
  },
} satisfies Meta;

export default meta;

export const CompleteArticle: StoryObj = {
  render: () => (
    <div className="max-w-3xl p-6 bg-white">
      <ArticleTitle>The Future of Design Systems in 2024</ArticleTitle>
      <ArticleSubtitle>
        Exploring the evolution of design systems and how they&apos;re shaping the future of digital
        product development.
      </ArticleSubtitle>
      <ArticleText variant="lead">
        Design systems have become the cornerstone of modern digital product development, enabling
        teams to build consistent, scalable, and maintainable user interfaces.
      </ArticleText>
      <ArticleHeader level={2}>The Rise of Design Systems</ArticleHeader>
      <ArticleText>
        Over the past decade, design systems have evolved from simple style guides to comprehensive
        collections of reusable components, patterns, and guidelines.
      </ArticleText>
      <ArticleHeader level={3}>Component-Driven Development</ArticleHeader>
      <ArticleText>
        The adoption of component-driven development has revolutionized how teams build and maintain
        digital products, promoting consistency and efficiency across projects.
      </ArticleText>
      <ArticleQuote attribution="Design Systems Expert, Design Systems Conference 2024">
        A well-structured design system is more than just a collection of components—it&apos;s a
        shared language that bridges the gap between design and development.
      </ArticleQuote>
      <ArticleHeader level={2}>Key Benefits</ArticleHeader>
      <ArticleList>
        <ArticleListItem>Improved consistency across products and platforms</ArticleListItem>
        <ArticleListItem>Faster development and iteration cycles</ArticleListItem>
        <ArticleListItem>Better collaboration between designers and developers</ArticleListItem>
        <ArticleListItem>Reduced technical debt and maintenance costs</ArticleListItem>
      </ArticleList>
      <ArticleText>
        Don&apos;t forget to check out our documentation for more examples and best practices.
      </ArticleText>
    </div>
  ),
};

export const TitleVariations: StoryObj = {
  render: () => (
    <div className="space-y-12 p-6 bg-white max-w-3xl">
      <div>
        <ArticleTitle>Primary Article Title</ArticleTitle>
        <ArticleSubtitle>Subtitle that appears below the title to provide context</ArticleSubtitle>
      </div>
      <ArticleHeader level={2}>Secondary Header (H2)</ArticleHeader>
      <ArticleHeader level={3}>Tertiary Header (H3)</ArticleHeader>
    </div>
  ),
};

export const TextVariations: StoryObj = {
  render: () => (
    <div className="space-y-12 p-6 bg-white max-w-3xl">
      <div>
        <ArticleSubtitle>
          This is a subtitle that provides additional context to the main title.
        </ArticleSubtitle>
      </div>
      <div>
        <ArticleText variant="lead">
          This is a lead paragraph that introduces the main content of the article. It has a larger
          font size and lighter text color to distinguish it from regular paragraphs.
        </ArticleText>
      </div>
      <div>
        <ArticleText>
          This is a default paragraph that contains the main body content of the article. It uses a
          comfortable reading size and line height for optimal readability.
        </ArticleText>
        <ArticleText>
          Another paragraph showing how multiple paragraphs might appear in sequence. The spacing
          between paragraphs should be sufficient to distinguish between content blocks.
        </ArticleText>
      </div>
    </div>
  ),
};

export const ListVariations: StoryObj = {
  render: () => (
    <div className="space-y-12 p-6 bg-white max-w-3xl">
      <div>
        <ArticleHeader level={2}>Unordered List</ArticleHeader>
        <ArticleList>
          <ArticleListItem>First item in the list</ArticleListItem>
          <ArticleListItem>Second item with longer content to demonstrate wrapping</ArticleListItem>
          <ArticleListItem>Third item in the list</ArticleListItem>
        </ArticleList>
      </div>
      <div>
        <ArticleHeader level={2}>Ordered List</ArticleHeader>
        <ArticleList variant="ordered">
          <ArticleListItem>First step in the process</ArticleListItem>
          <ArticleListItem>Second step with detailed explanation</ArticleListItem>
          <ArticleListItem>Final step to complete the process</ArticleListItem>
        </ArticleList>
      </div>
    </div>
  ),
};

export const QuoteVariations: StoryObj = {
  render: () => (
    <div className="space-y-12 p-6 bg-white max-w-3xl">
      <div>
        <ArticleHeader level={2}>Block Quote</ArticleHeader>
        <ArticleQuote>
          This is a simple block quote without attribution, useful for emphasizing a key point or
          statement within the article content.
        </ArticleQuote>
      </div>
      <div>
        <ArticleHeader level={2}>Attributed Quote</ArticleHeader>
        <ArticleQuote attribution="Jane Smith, Design Leadership Forum">
          A well-crafted quote with attribution adds credibility and context to the statement. This
          example shows how to properly attribute a quote to its source.
        </ArticleQuote>
      </div>
      <div>
        <ArticleHeader level={2}>Quote with Source Link</ArticleHeader>
        <ArticleQuote attribution="John Doe, UX Conference 2024">
          This quote includes a link to its source, allowing readers to explore the full context of
          the statement in its original form.
        </ArticleQuote>
      </div>
    </div>
  ),
};
