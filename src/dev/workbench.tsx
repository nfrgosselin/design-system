import { CompanionSideNav } from '../components/navigation/CompanionSideNav';
import { TopNav } from '../components/navigation/TopNav';

export function Workbench() {
  const navItems = [
    { label: 'Work', href: '#', isActive: true },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  const brandProps = {
    brandName: 'Nate Gosselin',
    navItems,
    stackSpacing: 'space-y-1' as const,
  };

  return (
    <div className="flex min-h-screen flex-col overscroll-none">
      <TopNav
        brand={brandProps}
        secondContent={<div className="text-stone-600">Second Section</div>}
        thirdContent={<div className="text-stone-600">Third Section</div>}
        fourthContent={<div className="text-stone-600">Fourth Section</div>}
      />

      <div className="relative flex-1">
        <CompanionSideNav
          footer={
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
          }
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
        </CompanionSideNav>

        <main className="absolute top-0 right-0 bottom-0 left-[25vw] min-w-0 overflow-y-auto overscroll-none">
          <div className="px-8 py-6">
            <h1 className="text-2xl font-semibold leading-none">Main Content Area</h1>
            <p className="mt-2 text-stone-600">
              This is where your main content would go. The sidenav stays fixed on the left side.
            </p>

            {/* Filler Content */}
            <div>
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="rounded-lg bg-stone-100 p-6">
                  <h2 className="text-lg font-medium">Section {index + 1}</h2>
                  <p className="mt-2 text-stone-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="rounded bg-white p-4 shadow-sm">
                      <h3 className="font-medium">Subsection A</h3>
                      <p className="mt-2 text-sm text-stone-600">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur.
                      </p>
                    </div>
                    <div className="rounded bg-white p-4 shadow-sm">
                      <h3 className="font-medium">Subsection B</h3>
                      <p className="mt-2 text-sm text-stone-600">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
