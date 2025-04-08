import { UIHeader } from '../components/typography/ui/UIHeader';
import { Container } from '../components/layout/core/container';
import { Button } from '../components/forms/button';
import { Mail, ArrowRight } from 'lucide-react';

export function Workbench() {
  return (
    <div className="min-h-screen bg-white">
      <Container size="max" className="py-8">
        <UIHeader level={2}>Button Variants</UIHeader>
        <p className="mt-4 text-stone-600">
          Our design system includes a variety of button styles to accommodate different use cases
          and visual hierarchies.
        </p>

        <div className="mt-8">
          <UIHeader level={3}>Button Variants</UIHeader>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Button variant="solid">Solid Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="solidReverse">Solid Reverse Button</Button>
          </div>
        </div>

        <div className="mt-8">
          <UIHeader level={3}>Button Colors</UIHeader>
          <div className="mt-4">
            <UIHeader level={3} className="text-lg">
              Solid Alternative Colors
            </UIHeader>
            <div className="mt-2 grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="solid" color="lagoon">
                Lagoon
              </Button>
              <Button variant="solid" color="peach">
                Peach
              </Button>
              <Button variant="solid" color="slate">
                Slate
              </Button>
              <Button variant="solid" color="gold">
                Gold
              </Button>
            </div>

            <UIHeader level={3} className="mt-6 text-lg">
              SolidReverse Alternative Colors
            </UIHeader>
            <div className="mt-2 grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="solidReverse" color="lagoon">
                Lagoon
              </Button>
              <Button variant="solidReverse" color="peach">
                Peach
              </Button>
              <Button variant="solidReverse" color="slate">
                Slate
              </Button>
              <Button variant="solidReverse" color="gold">
                Gold
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <UIHeader level={3}>Button Sizes</UIHeader>
          <div className="mt-4 flex flex-wrap gap-4 items-center">
            <Button variant="solid" size="sm">
              Small Button
            </Button>
            <Button variant="solid" size="md">
              Medium Button
            </Button>
            <Button variant="solid" size="lg">
              Large Button
            </Button>
          </div>
        </div>

        <div className="mt-8">
          <UIHeader level={3}>Button States</UIHeader>
          <div className="mt-4 flex flex-wrap gap-4 items-center">
            <Button variant="solid">Normal Button</Button>
            <Button variant="solid" isLoading>
              Loading Button
            </Button>
            <Button variant="solid" disabled>
              Disabled Button
            </Button>
          </div>
        </div>

        <div className="mt-8">
          <UIHeader level={3}>Buttons with Icons</UIHeader>
          <div className="mt-4 flex flex-wrap gap-4 items-center">
            <Button variant="solid" icon={Mail}>
              Email
            </Button>
            <Button variant="solid" icon={ArrowRight} iconPosition="right">
              Next Step
            </Button>
            <Button variant="solid" icon={Mail} isIconOnly />
          </div>
        </div>

        <div className="mt-8">
          <UIHeader level={3}>Button Group Example</UIHeader>
          <div className="mt-4 flex gap-2">
            <Button variant="solid">Save</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
