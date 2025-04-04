import { Stack } from '../components/layout/stack';
import { UIHeader } from '../components/typography/ui/UIHeader';
import {
  Link,
  InlineLink,
  UtilityLink,
  ButtonLink,
  MetadataLink,
  BreadcrumbLink,
} from '../components/navigation/link';
import { NavLink } from '../components/navigation/NavLink';

export function Workbench() {
  return (
    <div className="min-h-screen bg-background p-8">
      <Stack variant="ui" space="section" className="max-w-4xl mx-auto">
        <section>
          <UIHeader level={1}>Links</UIHeader>

          <div className="space-y-8">
            {/* Inline Links */}
            <div className="space-y-4">
              <UIHeader level={2}>Inline Links</UIHeader>
              <div className="space-y-4 max-w-2xl">
                <p className="font-serif text-base">
                  This is a serif paragraph with an{' '}
                  <InlineLink href="https://mozilla.org">Mozilla</InlineLink> within it. These links
                  inherit the serif font while maintaining proper text rhythm. Here&apos;s another{' '}
                  <InlineLink href="https://wikipedia.org">Wikipedia</InlineLink> link in serif.
                </p>
                <p className="font-sans text-base">
                  This is a sans-serif paragraph demonstrating visited states. Try visiting{' '}
                  <InlineLink href="https://google.com">Google</InlineLink> or{' '}
                  <InlineLink href="https://github.com">GitHub</InlineLink> and then come back -
                  you&apos;ll see these links change to our sunset color to indicate you&apos;ve
                  visited them.
                </p>
                <p className="font-mono text-base">
                  This is a monospace paragraph with a{' '}
                  <InlineLink href="https://stackoverflow.com">Stack Overflow</InlineLink> link that
                  inherits the monospace font, useful for technical or code-related content.
                </p>
              </div>
            </div>

            {/* Standalone Links */}
            <div className="space-y-4">
              <UIHeader level={2}>Standalone Links</UIHeader>
              <div className="flex flex-wrap gap-8">
                <Link href="https://apple.com" variant="standalone">
                  Apple Website
                </Link>
                <Link href="https://microsoft.com" variant="standalone-icon-right">
                  Microsoft Website
                </Link>
                <Link href="https://amazon.com" variant="standalone-icon-left">
                  Amazon Website
                </Link>
              </div>
            </div>

            {/* Button Links */}
            <div className="space-y-4">
              <UIHeader level={2}>Button Links</UIHeader>
              <div className="flex flex-wrap gap-4">
                <ButtonLink href="https://netflix.com">Netflix</ButtonLink>
                <Link href="https://spotify.com" variant="button-outline">
                  Spotify
                </Link>
                <Link href="https://youtube.com" variant="button-accent">
                  YouTube
                </Link>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-4">
              <UIHeader level={2}>Navigation Links</UIHeader>
              <div className="flex flex-col gap-8">
                {/* Default Nav */}
                <div className="space-y-2">
                  <UIHeader level={3}>Default Navigation</UIHeader>
                  <div className="flex gap-8">
                    <NavLink href="#" isActive>
                      Active Nav
                    </NavLink>
                    <NavLink href="#">Default Nav</NavLink>
                    <NavLink href="#" variant="muted">
                      Muted Nav
                    </NavLink>
                  </div>
                </div>

                {/* Size Variants */}
                <div className="space-y-2">
                  <UIHeader level={3}>Size Variants</UIHeader>
                  <div className="flex gap-8">
                    <NavLink href="#" size="sm">
                      Small Nav
                    </NavLink>
                    <NavLink href="#" size="base">
                      Base Nav
                    </NavLink>
                  </div>
                </div>

                {/* Transform & Underline */}
                <div className="space-y-2">
                  <UIHeader level={3}>Transform & Underline</UIHeader>
                  <div className="flex gap-8">
                    <NavLink href="#" transform="uppercase">
                      Uppercase Nav
                    </NavLink>
                    <NavLink href="#" transform="none">
                      No Transform
                    </NavLink>
                    <NavLink href="#" underline>
                      Underlined Nav
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Utility Links */}
            <div className="space-y-4">
              <UIHeader level={2}>Utility Links</UIHeader>
              <div className="flex flex-wrap gap-8">
                <MetadataLink href="#">Metadata Link</MetadataLink>
                <BreadcrumbLink href="#">Breadcrumb Link</BreadcrumbLink>
                <UtilityLink href="#">Utility Link</UtilityLink>
              </div>
            </div>

            {/* Link States */}
            <div className="space-y-4">
              <UIHeader level={2}>States</UIHeader>
              <div className="flex flex-wrap gap-8">
                <Link href="#" variant="standalone" disabled>
                  Disabled Link
                </Link>
                <Link href="#" variant="standalone" isLoading>
                  Loading Link
                </Link>
                <Link href="https://example.com" variant="standalone" showExternalIcon>
                  External with Icon
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Stack>
    </div>
  );
}
