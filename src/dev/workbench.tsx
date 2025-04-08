import { UIHeader } from '../components/typography/ui/UIHeader';
import { Container } from '../components/layout/core/container';
import { Nav } from '../components/navigation/Nav';
import { NamedIcon } from '../components/utils/namedIcon';

// Example brand logo component
function Logo() {
  return (
    <div className="flex items-center">
      <NamedIcon name="logo" size="lg" className="text-stone-900" />
    </div>
  );
}

export function Workbench() {
  return (
    <div className="min-h-screen bg-white">
      <Nav
        variant="top"
        items={[
          { href: '/', label: 'HOME', icon: 'page' },
          { href: '/products', label: 'PRODUCTS', icon: 'post' },
          {
            href: '/media',
            label: 'MEDIA',
            icon: 'media',
          },
          { href: '/settings', label: 'SETTINGS', icon: 'settings' },
        ]}
        brand={{
          logo: <Logo />,
          name: 'Design System',
        }}
      />
      <Container size="max" className="py-8">
        <UIHeader level={2}>Top Navigation</UIHeader>
        <p className="mt-4 text-stone-600">
          Features horizontal layout on desktop with dropdown menus and collapses to a mobile menu
          pattern on smaller screens. Brand section appears at the start and actions at the end.
        </p>

        <div className="mt-8">
          <UIHeader level={3}>Features</UIHeader>
          <ul className="mt-4 space-y-2 text-stone-600">
            <li>
              <strong>Dropdown Menus:</strong> Hover to reveal nested navigation items
            </li>
            <li>
              <strong>Responsive Layout:</strong> Collapses to mobile menu on smaller screens
            </li>
            <li>
              <strong>Brand Section:</strong> Configurable logo and name placement
            </li>
            <li>
              <strong>Action Items:</strong> Optional end-aligned action items
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
