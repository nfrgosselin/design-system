import { Stack } from '../components/layout/stack';
import { UIHeader } from '../components/typography/ui/UIHeader';
import { Input } from '../components/forms/Input';
import { Button } from '../components/forms/button';

export function Workbench() {
  return (
    <div className="min-h-screen bg-background p-8">
      <Stack variant="ui" space="section" className="max-w-4xl mx-auto">
        <section>
          <UIHeader level={1}>Input Component</UIHeader>

          <div className="space-y-8">
            {/* Input with Button */}
            <div className="space-y-4">
              <UIHeader level={2}>Input with Button</UIHeader>
              <div className="flex gap-2 max-w-md">
                <Input placeholder="Type something..." />
                <Button size="sm" variant="brand">
                  Submit
                </Button>
              </div>
            </div>

            {/* Font Variants */}
            <div className="space-y-4">
              <UIHeader level={2}>Font Variants</UIHeader>
              <div className="space-y-4 max-w-md">
                <Input placeholder="Sans-serif input (default)" />
                <Input font="serif" placeholder="Serif input" />
              </div>
            </div>

            {/* Default Variants */}
            <div className="space-y-4">
              <UIHeader level={2}>Default Variants</UIHeader>
              <div className="space-y-4 max-w-md">
                <Input placeholder="Default input" />
                <Input variant="muted" placeholder="Muted input" />
              </div>
            </div>

            {/* Size Variants */}
            <div className="space-y-4">
              <UIHeader level={2}>Size Variants</UIHeader>
              <div className="space-y-4 max-w-md">
                <Input size="xs" placeholder="Extra small input (24px)" />
                <Input size="base" placeholder="Base input (32px, default)" />
                <Input size="lg" placeholder="Large input (40px)" />
                <Input size="xl" placeholder="Extra large input (48px)" />
              </div>
            </div>

            {/* States */}
            <div className="space-y-4">
              <UIHeader level={2}>States</UIHeader>
              <div className="space-y-4 max-w-md">
                <Input error placeholder="Error state" />
                <Input disabled placeholder="Disabled state" />
                <Input isLoading placeholder="Loading state" />
              </div>
            </div>

            {/* Input Types */}
            <div className="space-y-4">
              <UIHeader level={2}>Input Types</UIHeader>
              <div className="space-y-4 max-w-md">
                <Input type="email" placeholder="Email input" />
                <Input type="password" placeholder="Password input" />
                <Input type="search" placeholder="Search input" />
                <Input type="number" placeholder="Number input" />
              </div>
            </div>

            {/* With Values */}
            <div className="space-y-4">
              <UIHeader level={2}>With Values</UIHeader>
              <div className="space-y-4 max-w-md">
                <Input defaultValue="Default value" />
                <Input value="Controlled value" readOnly />
                <Input defaultValue="With error" error />
                <Input defaultValue="Serif value" font="serif" />
              </div>
            </div>
          </div>
        </section>
      </Stack>
    </div>
  );
}
