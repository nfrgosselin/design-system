import { UIHeader } from '../components/typography/ui/UIHeader';
import { Container } from '../components/layout/core/container';
import {
  Link,
  InlineLink,
  UtilityLink,
  MetadataLink,
  BreadcrumbLink,
} from '../components/navigation/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export function Workbench() {
  return (
    <div className="min-h-screen bg-white">
      <Container size="max" className="py-8">
        <UIHeader level={2}>Link Component</UIHeader>
        <p className="mt-4 text-stone-600">
          Our design system includes various link styles to accommodate different use cases and
          visual hierarchies.
        </p>

        <div className="mt-8">
          <UIHeader level={3}>Inline Links</UIHeader>
          <div className="mt-4">
            <p className="text-stone-600">
              This is a paragraph with an <InlineLink href="#">inline link</InlineLink> that
              inherits the font from its parent. Inline links are typically used within paragraphs
              of text.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <UIHeader level={3}>Standalone Links</UIHeader>
          <div className="mt-4 flex flex-col gap-4">
            <Link href="#" variant="standalone">
              Standalone link
            </Link>
            <Link href="#" variant="standalone-icon-right">
              Standalone with icon right
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#" variant="standalone-icon-left">
              Standalone with icon left
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <UIHeader level={3}>Button-like Links</UIHeader>
          <div className="mt-4 flex flex-col gap-4">
            <Link href="#" variant="button">
              Button link
            </Link>
            <Link href="#" variant="button-outline">
              Button outline link
            </Link>
            <Link href="#" variant="button-accent">
              Button accent link
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <UIHeader level={3}>Metadata Links</UIHeader>
          <div className="mt-4 flex flex-col gap-4">
            <MetadataLink href="#">Metadata link</MetadataLink>
          </div>
        </div>

        <div className="mt-8">
          <UIHeader level={3}>Breadcrumb Links</UIHeader>
          <div className="mt-4 flex flex-col gap-4">
            <BreadcrumbLink href="#">Breadcrumb link</BreadcrumbLink>
          </div>
        </div>

        <div className="mt-8">
          <UIHeader level={3}>Utility Links</UIHeader>
          <div className="mt-4 flex flex-col gap-4">
            <UtilityLink href="#">Utility link</UtilityLink>
          </div>
        </div>

        <div className="mt-8">
          <UIHeader level={3}>Link States</UIHeader>
          <div className="mt-4 flex flex-col gap-4">
            <Link href="#" variant="button">
              Normal link
            </Link>
            <Link href="#" variant="button" disabled>
              Disabled link
            </Link>
            <Link href="#" variant="button" isLoading>
              Loading link
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <UIHeader level={3}>External Links</UIHeader>
          <div className="mt-4 flex flex-col gap-4">
            <Link href="https://example.com" isExternal>
              External link
            </Link>
            <Link href="https://example.com" isExternal showExternalIcon={false}>
              External link without icon
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
