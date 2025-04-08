import { UIHeader } from '../components/typography/ui/UIHeader';
import { Container } from '../components/layout/core/container';
import { Input } from '../components/forms/Input';

export function Workbench() {
  return (
    <div className="min-h-screen bg-white">
      <Container size="max" className="py-8">
        <UIHeader level={2}>Input Component</UIHeader>
        <p className="mt-4 text-stone-600">
          Our design system includes various input styles to accommodate different use cases and
          visual hierarchies.
        </p>

        <div className="mt-8">
          <UIHeader level={3}>Input Variants</UIHeader>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input variant="default" placeholder="Default variant" />
            <Input variant="muted" placeholder="Muted variant" />
          </div>
        </div>

        <div className="mt-8">
          <UIHeader level={3}>Input Sizes</UIHeader>
          <div className="mt-4 flex flex-col gap-4">
            <Input size="xs" placeholder="Extra small input" />
            <Input size="base" placeholder="Base size input" />
            <Input size="lg" placeholder="Large input" />
            <Input size="xl" placeholder="Extra large input" />
          </div>
        </div>

        <div className="mt-8">
          <UIHeader level={3}>Input Types</UIHeader>
          <div className="mt-4 flex flex-col gap-4">
            <Input type="text" placeholder="Text input" />
            <Input type="password" placeholder="Password input" />
            <Input type="search" placeholder="Search input" />
            <Input type="email" placeholder="Email input" />
            <Input type="number" placeholder="Number input" />
          </div>
        </div>

        <div className="mt-8">
          <UIHeader level={3}>Input States</UIHeader>
          <div className="mt-4 flex flex-col gap-4">
            <Input placeholder="Normal input" />
            <Input placeholder="Disabled input" disabled />
            <Input placeholder="Loading input" isLoading />
            <Input placeholder="Error state" error />
          </div>
        </div>

        <div className="mt-8">
          <UIHeader level={3}>Font Variants</UIHeader>
          <div className="mt-4 flex flex-col gap-4">
            <Input font="sans" placeholder="Sans-serif font" />
            <Input font="serif" placeholder="Serif font" />
          </div>
        </div>
      </Container>
    </div>
  );
}
