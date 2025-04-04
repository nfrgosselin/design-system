import { Stack } from '../components/layout/stack';
import { ArticleTitle } from '../components/typography/article/ArticleTitle';
import { ArticleText } from '../components/typography/article/ArticleText';
import { ArticleHeader } from '../components/typography/article/ArticleHeader';
import { ArticleSubtitle } from '../components/typography/article/ArticleSubtitle';
import { ArticleList } from '../components/typography/article/ArticleList';
import { ArticleListItem } from '../components/typography/article/ArticleListItem';
import { ArticleQuote } from '../components/typography/article/ArticleQuote';

export function Workbench() {
  return (
    <div className="min-h-screen bg-background p-8">
      <Stack space="section" className="max-w-4xl mx-auto">
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
        </section>

        {/* Quote Examples */}
        <section>
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

        {/* HTML Attributes Example */}
        <section>
          <ArticleHeader level={2}>HTML Attributes Support</ArticleHeader>
          <ArticleText title="Hover me!" onClick={() => alert('Text clicked!')}>
            This text has a title attribute and click handler.
          </ArticleText>

          <ArticleText as="label" htmlFor="test-input">
            This is a label for:
          </ArticleText>
          <input
            id="test-input"
            type="text"
            className="border rounded px-2 py-1"
            placeholder="Test input"
          />
        </section>
      </Stack>
    </div>
  );
}
