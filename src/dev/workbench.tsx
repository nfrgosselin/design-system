import { Stack } from '../components/layout/stack';
import { ArticleTitle } from '../components/typography/article/ArticleTitle';
import { ArticleText } from '../components/typography/article/ArticleText';
import { ArticleHeader } from '../components/typography/article/ArticleHeader';
import { ArticleSubtitle } from '../components/typography/article/ArticleSubtitle';
import { ArticleList } from '../components/typography/article/ArticleList';
import { ArticleListItem } from '../components/typography/article/ArticleListItem';
import { ArticleQuote } from '../components/typography/article/ArticleQuote';
import { Caption } from '../components/typography/ui/Caption';
import { Description } from '../components/typography/ui/Description';
import { MetaText } from '../components/typography/ui/MetaText';
import { NavText } from '../components/typography/ui/NavText';
import { SectionTitle } from '../components/typography/ui/SectionTitle';
import { UIText } from '../components/typography/ui/UIText';
import { Code } from '../components/typography/inline/Code';
import { ColoredText } from '../components/typography/inline/ColoredText';
import { Emphasis } from '../components/typography/inline/Emphasis';
import { FootnoteItem } from '../components/typography/inline/FootnoteItem';
import { FootnoteText } from '../components/typography/inline/FootnoteText';
import { Strong } from '../components/typography/inline/Strong';

export function Workbench() {
  return (
    <div className="min-h-screen bg-background p-8">
      <Stack variant="article" className="max-w-4xl mx-auto">
        <header className="mb-8">
          <ArticleTitle>Design System Workbench</ArticleTitle>
          <ArticleSubtitle>This is a subtitle, designed to look awesome</ArticleSubtitle>
          <ArticleText variant="lead">
            A development environment for testing and refining components
          </ArticleText>
        </header>

        {/* Element Type Variations */}
        <section>
          <ArticleHeader level={4}>Element Type Variations</ArticleHeader>
          <ArticleText>
            Paragraph Text: This demonstrates the default paragraph styling.
          </ArticleText>

          <ArticleText>Body Text: This shows our standard article text styling</ArticleText>

          <ArticleText variant="lead">
            Lead Text: This shows our larger, more prominent text style
          </ArticleText>

          <ArticleHeader level={2}>Section Header</ArticleHeader>

          <ArticleText variant="lead">
            More body text to demonstrate the rhythm and spacing between different elements in an
            article context. Even more body text to demonstrate the rhythm and spacing between
            different elements in an article context. Like even more, even more.
          </ArticleText>
          <ArticleText>
            More body text to demonstrate the rhythm and spacing between different elements in an
            article context. Even more body text to demonstrate the rhythm and spacing between
            different elements in an article context. Like even more, even more.
          </ArticleText>
          <ArticleList markerColor="primary">
            <ArticleListItem>
              More body text to demonstrate the rhythm and spacing between different elements in an
              article context. Even more body text to demonstrate the rhythm and spacing between
              different elements in an article context. Like even more, even more.
            </ArticleListItem>
            <ArticleListItem>
              More body text to demonstrate the rhythm and spacing between different elements in an
              article context. Even more body text to demonstrate the rhythm and spacing between
              different elements in an article context. Like even more, even more.
            </ArticleListItem>
          </ArticleList>
          <ArticleHeader level={2}>Blockquotes</ArticleHeader>
          <ArticleText>Below are examples of blockquotes in different contexts:</ArticleText>

          <ArticleQuote>
            Good design is as little design as possible. Less, but better – because it concentrates
            on the essential aspects, and the products are not burdened with non-essentials.
          </ArticleQuote>

          <ArticleQuote attribution="Dieter Rams">
            Good design is as little design as possible. Less, but better – because it concentrates
            on the essential aspects, and the products are not burdened with non-essentials.
          </ArticleQuote>
        </section>

        {/* Quote Examples */}
        <section></section>
        {/* Style Composition Examples */}
        <section>
          <ArticleHeader level={2}>Style Composition</ArticleHeader>
          <ArticleText>This text uses standard design system classes for styling.</ArticleText>

          <ArticleText className="italic">
            This text combines system classes for custom styling.
          </ArticleText>

          <ArticleText className="font-mono" data-test="custom-text">
            This text has a data attribute for testing hooks.
          </ArticleText>
        </section>
      </Stack>

      <Stack variant="ui" space="section" className="max-w-4xl mx-auto">
        {/* UI Typography Examples */}
        <section>
          <SectionTitle level={1}>UI Typography</SectionTitle>
          <Description>
            Our UI typography system provides consistent text styles for interface elements,
            distinct from article content styles.
          </Description>

          {/* Caption Examples */}
          <div className="mt-8">
            <SectionTitle level={2}>Captions</SectionTitle>
            <Description variant="muted">
              Small descriptive text for supplementary information
            </Description>

            <div className="mt-4 space-y-4">
              <div>
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Example"
                  className="rounded-lg mb-2"
                />
                <Caption>A simple image caption explaining the content above</Caption>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-ds-primary" />
                <Caption variant="muted">Status indicator description</Caption>
              </div>
            </div>
          </div>

          {/* Description Examples */}
          <div className="mt-8">
            <SectionTitle level={2}>Descriptions</SectionTitle>
            <Description variant="muted">
              Longer form descriptive text for detailed explanations
            </Description>

            <div className="mt-4 space-y-4">
              <Description>
                This is a default description that might explain a complex feature or provide
                detailed instructions for completing a task. It can span multiple lines and
                maintains comfortable reading length.
              </Description>

              <Description variant="muted">
                This is a muted description, useful for secondary information or additional context
                that shouldn&apos;t draw attention away from the primary content.
              </Description>
            </div>
          </div>

          {/* MetaText Examples */}
          <div className="mt-8">
            <SectionTitle level={2}>Meta Text</SectionTitle>
            <Description variant="muted">
              Small text for metadata and supplementary information
            </Description>

            <div className="mt-4 space-y-4">
              <div className="flex gap-3">
                <MetaText>Published on April 1, 2024</MetaText>
                <MetaText variant="muted">•</MetaText>
                <MetaText variant="muted">5 min read</MetaText>
                <MetaText variant="accent">New</MetaText>
              </div>

              <div className="flex gap-2 items-center">
                <div className="h-6 w-6 rounded-full bg-stone-200" />
                <MetaText>Written by</MetaText>
                <MetaText variant="accent">John Doe</MetaText>
              </div>
            </div>
          </div>

          {/* NavText Examples */}
          <div className="mt-8">
            <SectionTitle level={2}>Navigation Text</SectionTitle>
            <Description variant="muted">
              Text styles for navigation elements and interactive items
            </Description>

            <div className="mt-4">
              <div className="flex gap-6">
                <NavText underline variant="default">
                  Home
                </NavText>
                <NavText underline variant="active">
                  Products
                </NavText>
                <NavText underline variant="muted">
                  About
                </NavText>
                <NavText underline variant="default">
                  Contact
                </NavText>
              </div>

              <div className="mt-4 flex gap-4">
                <NavText size="sm" variant="default">
                  Small Nav
                </NavText>
                <NavText size="sm" variant="active">
                  Active
                </NavText>
                <NavText size="sm" variant="muted">
                  Muted
                </NavText>
              </div>
            </div>
          </div>

          {/* UIText Examples */}
          <div className="mt-8">
            <SectionTitle level={2}>UI Text</SectionTitle>
            <Description variant="muted">
              Standard text styles for interface elements like buttons, labels, and general UI text
            </Description>

            <div className="mt-4 space-y-6">
              {/* Size Examples */}
              <div>
                <SectionTitle level={3}>Sizes</SectionTitle>
                <div className="flex flex-col gap-3">
                  <UIText size="xs">Extra Small Text (12px)</UIText>
                  <UIText size="sm">Small Text (14px)</UIText>
                  <UIText size="base">Base Text (16px)</UIText>
                  <UIText size="lg">Large Text (18px)</UIText>
                </div>
              </div>

              {/* Weight Examples */}
              <div>
                <SectionTitle level={3}>Weights</SectionTitle>
                <div className="flex flex-col gap-3">
                  <UIText weight="normal">Normal Weight Text</UIText>
                  <UIText weight="medium">Medium Weight Text</UIText>
                  <UIText weight="semibold">Semibold Weight Text</UIText>
                </div>
              </div>

              {/* Variant Examples */}
              <div>
                <SectionTitle level={3}>Variants</SectionTitle>
                <div className="flex flex-col gap-3">
                  <UIText variant="default">Default UI Text</UIText>
                  <UIText variant="muted">Muted UI Text</UIText>
                  <UIText variant="accent">Accent UI Text</UIText>
                </div>
              </div>

              {/* Common Use Cases */}
              <div>
                <SectionTitle level={3}>Common Use Cases</SectionTitle>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-stone-100 rounded-lg w-fit">
                    <UIText size="sm" weight="semibold">
                      Button Label
                    </UIText>
                  </div>

                  <div className="flex flex-col gap-1">
                    <UIText size="sm" weight="medium">
                      Form Label
                    </UIText>
                    <input
                      type="text"
                      className="border rounded px-3 py-2"
                      placeholder="Input field"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <UIText size="sm" variant="muted">
                      Status Indicator
                    </UIText>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SectionTitle Examples */}
          <div className="mt-8">
            <SectionTitle level={2}>Section Titles</SectionTitle>
            <Description variant="muted">
              Headers for UI sections with different levels of hierarchy
            </Description>

            <div className="mt-4 space-y-4">
              <div>
                <SectionTitle level={1}>Main Section Title</SectionTitle>
                <Description>Level 1 - Used for main section headers</Description>
              </div>

              <div>
                <SectionTitle level={2}>Subsection Title</SectionTitle>
                <Description>Level 2 - Used for subsections</Description>
              </div>

              <div>
                <SectionTitle level={3}>Minor Section Title</SectionTitle>
                <Description>Level 3 - Used for minor sections</Description>
              </div>

              <div>
                <SectionTitle level={2} variant="muted">
                  Muted Section Title
                </SectionTitle>
                <Description>Muted variant - For less prominent sections</Description>
              </div>
            </div>
          </div>
        </section>

        {/* Inline Typography Examples */}
        <section>
          <SectionTitle level={2}>Inline Typography</SectionTitle>
          <Description variant="muted">
            Inline text components for rich content formatting
          </Description>

          <div className="mt-4 space-y-6">
            {/* Basic Inline Styles */}
            <div>
              <SectionTitle level={3}>Basic Inline Styles</SectionTitle>
              <div className="space-y-2">
                <div>
                  This text includes <Emphasis>emphasized content</Emphasis> and{' '}
                  <Strong>strongly emphasized content</Strong>.
                </div>
                <div>
                  You can use <Code>inline code</Code> for technical terms or{' '}
                  <Code variant="muted">subtle code references</Code>.
                </div>
              </div>
            </div>

            {/* Colored Text */}
            <div>
              <SectionTitle level={3}>Colored Text</SectionTitle>
              <div className="space-y-2">
                <div className="flex gap-4">
                  <ColoredText color="primary">Primary</ColoredText>
                  <ColoredText color="success">Success</ColoredText>
                  <ColoredText color="warning">Warning</ColoredText>
                  <ColoredText color="error">Error</ColoredText>
                  <ColoredText color="info">Info</ColoredText>
                </div>
                <div className="flex gap-4">
                  <ColoredText color="primary" subtle>
                    Primary
                  </ColoredText>
                  <ColoredText color="success" subtle>
                    Success
                  </ColoredText>
                  <ColoredText color="warning" subtle>
                    Warning
                  </ColoredText>
                  <ColoredText color="error" subtle>
                    Error
                  </ColoredText>
                  <ColoredText color="info" subtle>
                    Info
                  </ColoredText>
                </div>
              </div>
            </div>

            {/* Footnotes */}
            <div>
              <SectionTitle level={3}>Footnotes</SectionTitle>
              <div className="space-y-4">
                <ArticleText>
                  Here&apos;s a sentence with a footnote
                  <FootnoteText number={1} />. And another one
                  <FootnoteText number={2} />.
                </ArticleText>

                <div className="mt-8 pt-8 border-t border-stone-200 space-y-4">
                  <FootnoteItem number={1}>
                    This is the first footnote content explaining something in detail.
                  </FootnoteItem>
                  <FootnoteItem number={2}>
                    This is the second footnote with even more detailed explanation about something
                    that needed clarification.
                  </FootnoteItem>
                </div>
              </div>
            </div>

            {/* Mixed Usage Example */}
            <div>
              <SectionTitle level={3}>Mixed Usage Example</SectionTitle>
              <div className="space-y-4">
                <ArticleText variant="lead">
                  The <Strong>Design System</Strong> provides{' '}
                  <Emphasis>consistent typography</Emphasis> through the <Code>Text</Code> component
                  <FootnoteText number={3} />. You can use{' '}
                  <ColoredText color="success" subtle>
                    semantic colors
                  </ColoredText>{' '}
                  to highlight <ColoredText color="primary">important information</ColoredText>.
                </ArticleText>

                <ArticleText>
                  Here&apos;s a regular paragraph with <Strong>bold text</Strong>,{' '}
                  <Emphasis>emphasized text</Emphasis>, and <Code>inline code</Code> that all
                  inherit the correct font size.
                </ArticleText>

                <Description variant="muted">
                  Even in a muted description, <Strong>bold text</Strong>,{' '}
                  <Emphasis>emphasized text</Emphasis>, and <Code>inline code</Code> maintain
                  consistent sizing.
                </Description>

                <div className="mt-8 pt-8 border-t border-stone-200">
                  <FootnoteItem number={3}>
                    The Text component is the foundation for all typography components in the
                    system.
                  </FootnoteItem>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Stack>
    </div>
  );
}
