import { useState } from 'react';
import { Sidenav } from '../components/navigation/Sidenav';

export function Workbench() {
  const [navBottomPosition, setNavBottomPosition] = useState<number>(0);
  const [variant, setVariant] = useState<'streamlined' | 'expanded'>('streamlined');

  const commonProps = {
    footer: (
      <div className="space-y-4">
        {/* Example: Email signup form */}
        <div className="rounded-lg bg-stone-100 p-4">
          <h4 className="text-sm font-medium mb-2">Stay Updated</h4>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-1.5 text-sm rounded border border-stone-200 placeholder:text-stone-400"
            />
            <button className="px-3 py-1.5 text-sm bg-stone-900 text-white rounded hover:bg-stone-800">
              Subscribe
            </button>
          </div>
        </div>

        {/* Example: Social links */}
        <div className="flex items-center gap-4 text-stone-600">
          <a href="#" className="hover:text-stone-900">
            Twitter
          </a>
          <a href="#" className="hover:text-stone-900">
            GitHub
          </a>
          <a href="#" className="hover:text-stone-900">
            LinkedIn
          </a>
        </div>
      </div>
    ),
  };

  const navItems = [
    { label: 'Work', href: '#', isActive: true },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Debug elements */}
      <div className="fixed top-0 right-0 space-y-2 p-2">
        <div className="bg-black/80 text-white px-3 py-1 text-sm font-mono">
          Nav bottom: {navBottomPosition}px
        </div>
        <button
          onClick={() => setVariant(v => (v === 'streamlined' ? 'expanded' : 'streamlined'))}
          className="block w-full bg-black/80 text-white px-3 py-1 text-sm font-mono hover:bg-black/90"
        >
          Toggle variant
        </button>
      </div>

      {variant === 'streamlined' ? (
        <Sidenav
          variant="streamlined"
          brand={{
            logo: (
              <img src="/assets/Logo.svg" alt="Logo" className="h-full w-full object-contain" />
            ),
            brandName: 'Nate Gosselin',
            navItems,
            stackSpacing: 'space-y-1',
            logoOffset: '-mt-1',
            onNavBottomChange: setNavBottomPosition,
          }}
          {...commonProps}
        >
          <div className="space-y-6">
            <div className="rounded-lg bg-stone-100 p-4">
              <h3 className="font-medium">Featured Project</h3>
              <p className="mt-2 text-sm text-stone-600">
                A brief description of your featured project could go here.
              </p>
              <img src="/placeholder-image.jpg" alt="Project preview" className="mt-3 rounded-md" />
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Recent Projects</h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li>
                  <a href="#" className="hover:text-stone-900">
                    Project One
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-stone-900">
                    Project Two
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-stone-900">
                    Project Three
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Sidenav>
      ) : (
        <Sidenav
          variant="expanded"
          brand={{
            logo: (
              <img src="/assets/Logo.svg" alt="Logo" className="h-full w-full object-contain" />
            ),
            brandName: 'Nate Gosselin',
            navItems,
          }}
          {...commonProps}
        >
          <div className="space-y-6">
            <div className="rounded-lg bg-stone-100 p-4">
              <h3 className="font-medium">Featured Project</h3>
              <p className="mt-2 text-sm text-stone-600">
                A brief description of your featured project could go here.
              </p>
              <img src="/placeholder-image.jpg" alt="Project preview" className="mt-3 rounded-md" />
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Recent Projects</h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li>
                  <a href="#" className="hover:text-stone-900">
                    Project One
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-stone-900">
                    Project Two
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-stone-900">
                    Project Three
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Sidenav>
      )}

      {/* Main Content Area */}
      <main className="flex-1 bg-white">
        <div className="px-8" style={{ paddingTop: '38px' }}>
          <h1 className="text-2xl font-semibold leading-none">Main Content Area</h1>
          <p className="mt-4 text-stone-600">
            This is where your main content would go. The sidenav stays fixed on the left side.
          </p>
        </div>
      </main>
    </div>
  );
}
