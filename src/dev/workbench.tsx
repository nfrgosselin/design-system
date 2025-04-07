import { Stack } from '../components/layout/core/stack';
import { UIHeader } from '../components/typography/ui/UIHeader';
import { Container } from '../components/layout/core/container';

export function Workbench() {
  return (
    <div className="min-h-screen bg-background p-8">
      <Stack variant="ui" space="section" className="max-w-4xl mx-auto">
        <section>
          <UIHeader level={1}>Container Widths</UIHeader>
          <Stack space="content" className="mt-8">
            <div>
              <UIHeader level={2} className="mb-4">
                Metric Container (320px)
              </UIHeader>
              <Container size="metric">
                <div className="bg-stone-100 h-32 rounded flex items-center justify-center">
                  <p className="text-sm text-stone-600">320px</p>
                </div>
              </Container>
            </div>

            <div>
              <UIHeader level={2} className="mb-4">
                Card Container (480px)
              </UIHeader>
              <Container size="card">
                <div className="bg-stone-100 h-32 rounded flex items-center justify-center">
                  <p className="text-sm text-stone-600">480px</p>
                </div>
              </Container>
            </div>

            <div>
              <UIHeader level={2} className="mb-4">
                Content Container (768px)
              </UIHeader>
              <Container size="content">
                <div className="bg-stone-100 h-32 rounded flex items-center justify-center">
                  <p className="text-sm text-stone-600">768px</p>
                </div>
              </Container>
            </div>

            <div>
              <UIHeader level={2} className="mb-4">
                Max Container (100%)
              </UIHeader>
              <Container size="max">
                <div className="bg-stone-100 h-32 rounded flex items-center justify-center">
                  <p className="text-sm text-stone-600">100% width</p>
                </div>
              </Container>
            </div>

            <div className="mt-8 p-4 bg-stone-100 rounded-lg">
              <p className="text-sm text-stone-600">Container width options:</p>
              <ul className="mt-2 text-sm text-stone-600 list-disc list-inside space-y-1">
                <li>metric - 320px - For small metric displays and compact visualizations</li>
                <li>card - 480px - For card-based layouts and medium-sized components</li>
                <li>content - 768px - For main content areas and larger visualizations</li>
                <li>max - 100% - For full-width, responsive layouts</li>
              </ul>
            </div>
          </Stack>
        </section>
      </Stack>
    </div>
  );
}
