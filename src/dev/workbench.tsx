import { Stack } from '../components/layout/core/stack';
import { UIHeader } from '../components/typography/ui/UIHeader';
import { Container } from '../components/layout/core/container';
import { Divider } from '../components/layout/core/divider';
import {
  TwoColumnGrid,
  ThreeColumnGrid,
  FourColumnGrid,
  ResponsiveGrid,
} from '../components/layout/core/grid';

// Demo box component to make spacing visible
function DemoBox({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-stone-100 p-4 rounded-lg border border-stone-200 ${className}`}>
      {children}
    </div>
  );
}

export function Workbench() {
  return (
    <div className="min-h-screen bg-background p-8">
      <Stack variant="ui" space="section" className="max-w-4xl mx-auto">
        {/* Divider Variants */}
        <section>
          <UIHeader level={1}>Divider Variants</UIHeader>
          <Stack space="content" className="mt-8">
            {/* Horizontal Dividers */}
            <div>
              <UIHeader level={2} className="mb-4">
                Horizontal Dividers
              </UIHeader>
              <div className="bg-white p-8 rounded-lg border border-stone-200">
                <Stack space="content">
                  <div>
                    <UIHeader level={3} variant="muted" className="mb-2">
                      Heavy (stone-900)
                    </UIHeader>
                    <DemoBox>
                      <div className="text-stone-600 mb-4">Maximum contrast separation</div>
                      <Divider variant="heavy" />
                      <div className="text-stone-600 mt-4">Content below</div>
                    </DemoBox>
                  </div>

                  <div>
                    <UIHeader level={3} variant="muted" className="mb-2">
                      Medium (stone-600)
                    </UIHeader>
                    <DemoBox>
                      <div className="text-stone-600 mb-4">Strong visual separation</div>
                      <Divider variant="medium" />
                      <div className="text-stone-600 mt-4">Content below</div>
                    </DemoBox>
                  </div>

                  <div>
                    <UIHeader level={3} variant="muted" className="mb-2">
                      Light (stone-300)
                    </UIHeader>
                    <DemoBox>
                      <div className="text-stone-600 mb-4">Moderate visual separation</div>
                      <Divider variant="light" />
                      <div className="text-stone-600 mt-4">Content below</div>
                    </DemoBox>
                  </div>

                  <div>
                    <UIHeader level={3} variant="muted" className="mb-2">
                      Subtle (stone-200)
                    </UIHeader>
                    <DemoBox>
                      <div className="text-stone-600 mb-4">Minimal visual separation</div>
                      <Divider variant="subtle" />
                      <div className="text-stone-600 mt-4">Content below</div>
                    </DemoBox>
                  </div>

                  <div>
                    <UIHeader level={3} variant="muted" className="mb-2">
                      Faint (stone-100)
                    </UIHeader>
                    <DemoBox>
                      <div className="text-stone-600 mb-4">Very subtle visual separation</div>
                      <Divider variant="faint" />
                      <div className="text-stone-600 mt-4">Content below</div>
                    </DemoBox>
                  </div>

                  <div>
                    <UIHeader level={3} variant="muted" className="mb-2">
                      Spacing Variants
                    </UIHeader>
                    <Stack space="content">
                      <DemoBox>
                        <div className="text-stone-600">Compact spacing</div>
                        <Divider spacing="compact" />
                        <div className="text-stone-600">Below divider</div>
                      </DemoBox>
                      <DemoBox>
                        <div className="text-stone-600">Element spacing (default)</div>
                        <Divider spacing="element" />
                        <div className="text-stone-600">Below divider</div>
                      </DemoBox>
                      <DemoBox>
                        <div className="text-stone-600">Relaxed spacing</div>
                        <Divider spacing="relaxed" />
                        <div className="text-stone-600">Below divider</div>
                      </DemoBox>
                      <DemoBox>
                        <div className="text-stone-600">Content spacing</div>
                        <Divider spacing="content" />
                        <div className="text-stone-600">Below divider</div>
                      </DemoBox>
                    </Stack>
                  </div>
                </Stack>
              </div>
            </div>

            {/* Vertical Dividers */}
            <div>
              <UIHeader level={2} className="mb-4">
                Vertical Dividers
              </UIHeader>
              <div className="bg-white p-8 rounded-lg border border-stone-200">
                <Stack space="content">
                  <div className="h-24 flex items-center">
                    <div className="text-stone-600">Left</div>
                    <Divider orientation="vertical" variant="heavy" className="mx-8" />
                    <div className="text-stone-600">Right</div>
                  </div>

                  <div className="h-24 flex items-center">
                    <div className="text-stone-600">Left</div>
                    <Divider orientation="vertical" variant="medium" className="mx-8" />
                    <div className="text-stone-600">Right</div>
                  </div>

                  <div className="h-24 flex items-center">
                    <div className="text-stone-600">Left</div>
                    <Divider orientation="vertical" variant="light" className="mx-8" />
                    <div className="text-stone-600">Right</div>
                  </div>

                  <div className="h-24 flex items-center">
                    <div className="text-stone-600">Left</div>
                    <Divider orientation="vertical" variant="subtle" className="mx-8" />
                    <div className="text-stone-600">Right</div>
                  </div>

                  <div className="h-24 flex items-center">
                    <div className="text-stone-600">Left</div>
                    <Divider orientation="vertical" variant="faint" className="mx-8" />
                    <div className="text-stone-600">Right</div>
                  </div>
                </Stack>
              </div>
            </div>

            {/* Usage Notes */}
            <div className="mt-8 p-4 bg-stone-100 rounded-lg">
              <p className="text-sm text-stone-600">Divider usage notes:</p>
              <ul className="mt-2 text-sm text-stone-600 list-disc list-inside space-y-1">
                <li>
                  Use <code>heavy</code> (stone-900) for maximum contrast and primary content breaks
                </li>
                <li>
                  Use <code>medium</code> (stone-600) for strong visual separation between distinct
                  sections
                </li>
                <li>
                  Use <code>light</code> (stone-300) for moderate separation within related content
                </li>
                <li>
                  Use <code>subtle</code> (stone-200) for minimal visual separation in dense layouts
                </li>
                <li>
                  Use <code>faint</code> (stone-100) for very subtle grouping hints
                </li>
                <li>Adjust spacing based on content density and hierarchy</li>
                <li>
                  Set <code>decorative=true</code> for non-semantic dividers
                </li>
              </ul>
            </div>
          </Stack>
        </section>

        {/* Container Widths */}
        <section>
          <UIHeader level={1}>Container Widths</UIHeader>
          <Stack space="content" className="mt-8">
            <div className="relative">
              <Container
                size="max"
                className="bg-stone-50/50 border border-dashed border-stone-200 py-4"
              >
                <div className="text-center text-sm text-stone-500">max (1280px)</div>
                <Container
                  size="content"
                  className="bg-stone-100/50 border border-dashed border-stone-200 py-4 mt-4"
                >
                  <div className="text-center text-sm text-stone-500">content (768px)</div>
                  <Container
                    size="form"
                    className="bg-stone-200/50 border border-dashed border-stone-200 py-4 mt-4"
                  >
                    <div className="text-center text-sm text-stone-500">form (640px)</div>
                    <Container
                      size="modal"
                      className="bg-stone-300/50 border border-dashed border-stone-200 py-4 mt-4"
                    >
                      <div className="text-center text-sm text-stone-500">modal (560px)</div>
                      <Container
                        size="card"
                        className="bg-stone-400/50 border border-dashed border-stone-200 py-4 mt-4"
                      >
                        <div className="text-center text-sm text-stone-500">card (480px)</div>
                        <Container
                          size="metric"
                          className="bg-stone-500/50 border border-dashed border-stone-200 py-4 mt-4"
                        >
                          <div className="text-center text-sm text-white">metric (320px)</div>
                        </Container>
                      </Container>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </div>

            {/* Usage Examples */}
            <div className="mt-12">
              <UIHeader level={2} className="mb-8">
                Usage Examples
              </UIHeader>
              <Stack space="content">
                <div>
                  <UIHeader level={3} className="mb-4 text-stone-500">
                    Metric Card (320px)
                  </UIHeader>
                  <Container
                    size="metric"
                    className="bg-white rounded-lg border-2 border-stone-900 p-6"
                  >
                    <Stack space="element">
                      <div className="text-sm font-medium text-stone-500">Total Revenue</div>
                      <div className="text-3xl font-semibold">$1,234,567</div>
                      <div className="text-sm text-stone-500">+12.3% from last month</div>
                    </Stack>
                  </Container>
                </div>

                <div>
                  <UIHeader level={3} className="mb-4 text-stone-500">
                    Card (480px)
                  </UIHeader>
                  <Container
                    size="card"
                    className="bg-white rounded-lg border-2 border-stone-900 p-6"
                  >
                    <Stack space="element">
                      <div className="text-xl font-semibold">Feature Card</div>
                      <div className="text-stone-600">
                        A standard card layout for featuring content, products, or information.
                      </div>
                    </Stack>
                  </Container>
                </div>

                <div>
                  <UIHeader level={3} className="mb-4 text-stone-500">
                    Modal (560px)
                  </UIHeader>
                  <Container
                    size="modal"
                    className="bg-white rounded-lg border-2 border-stone-900 p-6"
                  >
                    <Stack space="element">
                      <div className="text-xl font-semibold">Dialog Title</div>
                      <div className="text-stone-600">
                        A modal dialog with enough width for comfortable reading and form inputs,
                        but not so wide that it loses focus.
                      </div>
                    </Stack>
                  </Container>
                </div>
              </Stack>
            </div>

            {/* Measurement Notes */}
            <div className="mt-8 p-4 bg-stone-100 rounded-lg">
              <p className="text-sm text-stone-600">Container width progression:</p>
              <ul className="mt-2 text-sm text-stone-600 list-disc list-inside space-y-1">
                <li>metric (320px) - Perfect for dashboard metrics and small data displays</li>
                <li>card (480px) - Ideal for feature cards and focused content</li>
                <li>modal (560px) - Optimized for dialog boxes and forms with breathing room</li>
                <li>form (640px) - Full-width forms and focused content areas</li>
                <li>content (768px) - Article content and main reading experiences</li>
                <li>max (1280px) - Maximum layout width for full-screen experiences</li>
              </ul>
            </div>
          </Stack>
        </section>

        {/* Original Spacing Comparison Section */}
        <section>
          <UIHeader level={1}>Spacing Comparison (Vertical vs Horizontal)</UIHeader>
          <Stack space="content" className="mt-8">
            {/* Layout Spacing */}
            <div>
              <UIHeader level={2} className="mb-4">
                Layout Spacing (96px)
              </UIHeader>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <UIHeader level={3} className="mb-4 text-stone-500">
                    Vertical
                  </UIHeader>
                  <div className="bg-stone-50 p-4 rounded-lg">
                    <Stack space="layout" className="w-full">
                      <DemoBox className="text-center">Item 1</DemoBox>
                      <DemoBox className="text-center">Item 2</DemoBox>
                      <DemoBox className="text-center">Item 3</DemoBox>
                    </Stack>
                  </div>
                </div>
                <div>
                  <UIHeader level={3} className="mb-4 text-stone-500">
                    Horizontal
                  </UIHeader>
                  <div className="bg-stone-50 p-4 rounded-lg">
                    <Stack direction="row" space="layout" className="w-full">
                      <DemoBox className="w-24 text-center">Item 1</DemoBox>
                      <DemoBox className="w-24 text-center">Item 2</DemoBox>
                      <DemoBox className="w-24 text-center">Item 3</DemoBox>
                    </Stack>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Spacing */}
            <div>
              <UIHeader level={2} className="mb-4">
                Section Spacing (64px)
              </UIHeader>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <UIHeader level={3} className="mb-4 text-stone-500">
                    Vertical
                  </UIHeader>
                  <div className="bg-stone-50 p-4 rounded-lg">
                    <Stack space="section" className="w-full">
                      <DemoBox className="text-center">Item 1</DemoBox>
                      <DemoBox className="text-center">Item 2</DemoBox>
                      <DemoBox className="text-center">Item 3</DemoBox>
                    </Stack>
                  </div>
                </div>
                <div>
                  <UIHeader level={3} className="mb-4 text-stone-500">
                    Horizontal
                  </UIHeader>
                  <div className="bg-stone-50 p-4 rounded-lg">
                    <Stack direction="row" space="section" className="w-full">
                      <DemoBox className="w-24 text-center">Item 1</DemoBox>
                      <DemoBox className="w-24 text-center">Item 2</DemoBox>
                      <DemoBox className="w-24 text-center">Item 3</DemoBox>
                    </Stack>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Spacing */}
            <div>
              <UIHeader level={2} className="mb-4">
                Content Spacing (32px)
              </UIHeader>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <UIHeader level={3} className="mb-4 text-stone-500">
                    Vertical
                  </UIHeader>
                  <div className="bg-stone-50 p-4 rounded-lg">
                    <Stack space="content" className="w-full">
                      <DemoBox className="text-center">Item 1</DemoBox>
                      <DemoBox className="text-center">Item 2</DemoBox>
                      <DemoBox className="text-center">Item 3</DemoBox>
                    </Stack>
                  </div>
                </div>
                <div>
                  <UIHeader level={3} className="mb-4 text-stone-500">
                    Horizontal
                  </UIHeader>
                  <div className="bg-stone-50 p-4 rounded-lg">
                    <Stack direction="row" space="content" className="w-full">
                      <DemoBox className="w-24 text-center">Item 1</DemoBox>
                      <DemoBox className="w-24 text-center">Item 2</DemoBox>
                      <DemoBox className="w-24 text-center">Item 3</DemoBox>
                    </Stack>
                  </div>
                </div>
              </div>
            </div>

            {/* Measurement Overlay */}
            <div className="mt-8 p-4 bg-stone-100 rounded-lg">
              <p className="text-sm text-stone-600">
                Note: The spacing looks different horizontally vs vertically because:
              </p>
              <ul className="mt-2 text-sm text-stone-600 list-disc list-inside space-y-1">
                <li>
                  Vertical spacing is more noticeable due to how we read content top-to-bottom
                </li>
                <li>Horizontal spacing needs to be balanced with readability and line length</li>
                <li>
                  The fixed width of demo boxes (w-24 = 96px) makes large horizontal gaps more
                  prominent
                </li>
              </ul>
            </div>
          </Stack>
        </section>

        {/* Grid Variants */}
        <section>
          <UIHeader level={1}>Grid Variants</UIHeader>
          <Stack space="content" className="mt-8">
            {/* Two Column Grid */}
            <div>
              <UIHeader level={2} className="mb-4">
                Two Column Grid
              </UIHeader>
              <div className="p-4 bg-stone-50 rounded-lg">
                <TwoColumnGrid gap="element">
                  <DemoBox className="h-24 flex items-center justify-center">
                    <div className="text-stone-600">Column 1</div>
                  </DemoBox>
                  <DemoBox className="h-24 flex items-center justify-center">
                    <div className="text-stone-600">Column 2</div>
                  </DemoBox>
                </TwoColumnGrid>
              </div>
              <p className="mt-2 text-sm text-stone-500">
                Collapses to single column below sm (640px)
              </p>
            </div>

            {/* Three Column Grid */}
            <div>
              <UIHeader level={2} className="mb-4">
                Three Column Grid
              </UIHeader>
              <div className="p-4 bg-stone-50 rounded-lg">
                <ThreeColumnGrid gap="element">
                  <DemoBox className="h-24 flex items-center justify-center">
                    <div className="text-stone-600">Column 1</div>
                  </DemoBox>
                  <DemoBox className="h-24 flex items-center justify-center">
                    <div className="text-stone-600">Column 2</div>
                  </DemoBox>
                  <DemoBox className="h-24 flex items-center justify-center">
                    <div className="text-stone-600">Column 3</div>
                  </DemoBox>
                </ThreeColumnGrid>
              </div>
              <p className="mt-2 text-sm text-stone-500">
                Collapses to single column below sm (640px)
              </p>
            </div>

            {/* Four Column Grid */}
            <div>
              <UIHeader level={2} className="mb-4">
                Four Column Grid
              </UIHeader>
              <div className="p-4 bg-stone-50 rounded-lg">
                <FourColumnGrid gap="element">
                  <DemoBox className="h-24 flex items-center justify-center">
                    <div className="text-stone-600">Column 1</div>
                  </DemoBox>
                  <DemoBox className="h-24 flex items-center justify-center">
                    <div className="text-stone-600">Column 2</div>
                  </DemoBox>
                  <DemoBox className="h-24 flex items-center justify-center">
                    <div className="text-stone-600">Column 3</div>
                  </DemoBox>
                  <DemoBox className="h-24 flex items-center justify-center">
                    <div className="text-stone-600">Column 4</div>
                  </DemoBox>
                </FourColumnGrid>
              </div>
              <p className="mt-2 text-sm text-stone-500">
                Collapses to single column below sm (640px)
              </p>
            </div>

            {/* Auto-responsive Grid */}
            <div>
              <UIHeader level={2} className="mb-4">
                Auto-responsive Grid
              </UIHeader>
              <div className="p-4 bg-stone-50 rounded-lg">
                <ResponsiveGrid gap="element">
                  <DemoBox className="h-24 flex items-center justify-center">
                    <div className="text-stone-600">Column 1</div>
                  </DemoBox>
                  <DemoBox className="h-24 flex items-center justify-center">
                    <div className="text-stone-600">Column 2</div>
                  </DemoBox>
                  <DemoBox className="h-24 flex items-center justify-center">
                    <div className="text-stone-600">Column 3</div>
                  </DemoBox>
                </ResponsiveGrid>
              </div>
              <p className="mt-2 text-sm text-stone-500">
                Adapts from 1 → 2 → 3 columns as viewport grows
              </p>
            </div>

            {/* Grid Notes */}
            <div className="mt-8 p-4 bg-stone-100 rounded-lg">
              <p className="text-sm text-stone-600">Grid behavior:</p>
              <ul className="mt-2 text-sm text-stone-600 list-disc list-inside space-y-1">
                <li>Below sm (640px): All grids collapse to single column</li>
                <li>sm and above: Grids show their full column count</li>
                <li>Auto-responsive grid: 1 column → 2 columns (sm) → 3 columns (lg)</li>
                <li>Custom breakpoints available via collapseBelow prop: sm, md, lg, xl</li>
              </ul>
            </div>
          </Stack>
        </section>
      </Stack>
    </div>
  );
}
