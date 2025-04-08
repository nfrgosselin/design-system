import { UIHeader } from '../components/typography/ui/UIHeader';
import { Container } from '../components/layout/core/container';
import { NavItem } from '../components/navigation/NavItem';

export function Workbench() {
  return (
    <div className="min-h-screen bg-white">
      <Container size="max" className="py-8">
        <UIHeader level={2}>NavItem Component</UIHeader>
        <p className="mt-4 text-stone-600">
          The NavItem component combines navigation, layout, and typography to provide a complete
          navigation item solution with icon support and text styling.
        </p>

        <div className="mt-8">
          <UIHeader level={3}>NavItem Examples</UIHeader>
          <div className="mt-4 space-y-8">
            <div>
              <p className="mb-2 text-sm">Default & Active States</p>
              <div className="flex gap-4">
                <NavItem href="#">Default Nav Item</NavItem>
                <NavItem href="#" isActive>
                  Active Nav Item
                </NavItem>
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm text-muted">Icon Positions</p>
              <div className="flex gap-4">
                <NavItem href="#" icon="settings">
                  Nav with Icon
                </NavItem>
                <NavItem href="#" icon="settings" iconPosition="end">
                  Nav with Icon at End
                </NavItem>
                <NavItem href="#" icon="settings" iconOnly>
                  Icon Only Nav
                </NavItem>
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm text-muted">Text Variants</p>
              <div className="flex gap-4">
                <NavItem href="#" textVariant="muted">
                  Muted Text Nav
                </NavItem>
                <NavItem href="#" size="sm">
                  Small Nav
                </NavItem>
                <NavItem href="#" transform="uppercase">
                  Uppercase Nav
                </NavItem>
                <NavItem href="#" underline>
                  Underlined Nav
                </NavItem>
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm text-muted">Alignment</p>
              <div className="flex gap-4 border border-dashed border-muted p-4">
                <NavItem href="#" align="left">
                  Left Nav
                </NavItem>
                <NavItem href="#" align="center">
                  Centered Nav
                </NavItem>
                <NavItem href="#" align="right">
                  Right Nav
                </NavItem>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
