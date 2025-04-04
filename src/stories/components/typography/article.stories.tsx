import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  ArticleTitle,
  ArticleSubtitle,
  ArticleHeader,
  ArticleText,
} from '@/components/typography/article';

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

/* Temporarily disabled during v2 migration
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
*/
