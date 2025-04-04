import { Stack } from '../components/layout/stack';
import { UIHeader } from '../components/typography/ui/UIHeader';
import { Button } from '../components/forms/button';
import { Plus, ArrowRight, Menu } from 'lucide-react';

export function Workbench() {
  return (
    <div className="min-h-screen bg-background p-8">
      <Stack variant="ui" space="section" className="max-w-4xl mx-auto">
        {/* Button Examples */}
        <section>
          <UIHeader level={1}>Button</UIHeader>

          <div className="space-y-8">
            {/* Primary Variants */}
            <div className="space-y-4">
              <UIHeader level={2}>Primary Variants</UIHeader>
              <div className="flex flex-wrap gap-4">
                <Button variant="solid">Solid</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="brand">Brand</Button>
                <Button variant="brand-outline">Brand Outline</Button>
              </div>
            </div>

            {/* Secondary Variants */}
            <div className="space-y-4">
              <UIHeader level={2}>Secondary Variants</UIHeader>
              <div className="flex flex-wrap gap-4">
                <Button variant="accent">Accent</Button>
                <Button variant="outline-accent">Outline Accent</Button>
                <Button variant="outline-subtle">Outline Subtle</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>

            {/* With Icons */}
            <div className="space-y-4">
              <UIHeader level={2}>With Icons</UIHeader>

              {/* Left Icons */}
              <div className="space-y-2">
                <UIHeader level={3}>Left Icon</UIHeader>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="solid" size="sm" icon={Plus}>
                    Small
                  </Button>
                  <Button variant="solid" size="md" icon={Plus}>
                    Medium
                  </Button>
                  <Button variant="solid" size="lg" icon={Plus}>
                    Large
                  </Button>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="brand" size="sm" icon={Plus}>
                    Small
                  </Button>
                  <Button variant="brand" size="md" icon={Plus}>
                    Medium
                  </Button>
                  <Button variant="brand" size="lg" icon={Plus}>
                    Large
                  </Button>
                </div>
              </div>

              {/* Right Icons */}
              <div className="space-y-2">
                <UIHeader level={3}>Right Icon</UIHeader>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="outline" size="sm" icon={ArrowRight} iconPosition="right">
                    Small
                  </Button>
                  <Button variant="outline" size="md" icon={ArrowRight} iconPosition="right">
                    Medium
                  </Button>
                  <Button variant="outline" size="lg" icon={ArrowRight} iconPosition="right">
                    Large
                  </Button>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="brand-outline" size="sm" icon={ArrowRight} iconPosition="right">
                    Small
                  </Button>
                  <Button variant="brand-outline" size="md" icon={ArrowRight} iconPosition="right">
                    Medium
                  </Button>
                  <Button variant="brand-outline" size="lg" icon={ArrowRight} iconPosition="right">
                    Large
                  </Button>
                </div>
              </div>

              {/* Icon Only */}
              <div className="space-y-2">
                <UIHeader level={3}>Icon Only</UIHeader>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="solid" size="sm" icon={Menu} isIconOnly />
                  <Button variant="solid" size="md" icon={Menu} isIconOnly />
                  <Button variant="solid" size="lg" icon={Menu} isIconOnly />
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="outline" size="sm" icon={Menu} isIconOnly />
                  <Button variant="outline" size="md" icon={Menu} isIconOnly />
                  <Button variant="outline" size="lg" icon={Menu} isIconOnly />
                </div>
              </div>
            </div>

            {/* States */}
            <div className="space-y-4">
              <UIHeader level={2}>States</UIHeader>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="solid" disabled>
                  Disabled
                </Button>
                <Button variant="solid" isLoading>
                  Loading
                </Button>
                <Button variant="solid" fullWidth>
                  Full Width
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Stack>
    </div>
  );
}
