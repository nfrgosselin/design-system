import { Stack } from '../components/layout/core/stack';
import { UIHeader } from '../components/typography/ui/UIHeader';
import { Container } from '../components/layout/core/container';
import { Image } from '../components/layout/core/image';

export function Workbench() {
  return (
    <div className="min-h-screen bg-background p-8">
      <Stack variant="ui" space="section" className="max-w-4xl mx-auto">
        {/* Image Aspect Ratios */}
        <section>
          <UIHeader level={1}>Image Aspect Ratios</UIHeader>
          <Stack space="content" className="mt-8">
            <div>
              <UIHeader level={2} className="mb-4">
                Square (1:1)
              </UIHeader>
              <Container size="card">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80"
                  alt="Example square image - portrait of a woman"
                  aspect="square"
                />
              </Container>
            </div>

            <div>
              <UIHeader level={2} className="mb-4">
                Wide (16:9)
              </UIHeader>
              <Container size="content">
                <Image
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1280&q=80"
                  alt="Example wide aspect ratio image - landscape mountain view"
                  aspect="wide"
                />
              </Container>
            </div>

            <div>
              <UIHeader level={2} className="mb-4">
                Video (4:3)
              </UIHeader>
              <Container size="content">
                <Image
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"
                  alt="Example 4:3 video aspect ratio image - forest landscape"
                  aspect="video"
                />
              </Container>
            </div>

            <div>
              <UIHeader level={2} className="mb-4">
                Cinema (2.35:1)
              </UIHeader>
              <Container size="content">
                <Image
                  src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1400&q=80"
                  alt="Example cinema aspect ratio image - dramatic sunset"
                  aspect="cinema"
                />
              </Container>
            </div>

            <div>
              <UIHeader level={2} className="mb-4">
                35mm (3:2)
              </UIHeader>
              <Container size="content">
                <Image
                  src="https://images.unsplash.com/photo-1455218873509-8097305ee378?auto=format&fit=crop&w=1200&q=80"
                  alt="Example 35mm aspect ratio image - classic landscape"
                  aspect="35mm"
                />
              </Container>
            </div>

            <div>
              <UIHeader level={2} className="mb-4">
                Portrait (3:4)
              </UIHeader>
              <Container size="card">
                <Image
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=960&q=80"
                  alt="Example portrait image - portrait of a man"
                  aspect="portrait"
                />
              </Container>
            </div>

            <div>
              <UIHeader level={2} className="mb-4">
                Smartphone (9:16)
              </UIHeader>
              <Container size="card">
                <Image
                  src="https://images.unsplash.com/photo-1520262454473-a1a82276a574?auto=format&fit=crop&w=900&q=80"
                  alt="Example smartphone aspect ratio image - tall architecture"
                  aspect="smartphone"
                />
              </Container>
            </div>

            <div className="mt-8 p-4 bg-stone-100 rounded-lg">
              <p className="text-sm text-stone-600">Available aspect ratios:</p>
              <ul className="mt-2 text-sm text-stone-600 list-disc list-inside space-y-1">
                <li>square - 1:1 - Perfect for profile pictures and thumbnails</li>
                <li>wide - 16:9 - Standard widescreen format for modern displays</li>
                <li>video - 4:3 - Traditional video format</li>
                <li>cinema - 2.35:1 - Cinematic widescreen format</li>
                <li>35mm - 3:2 - Classic 35mm film photography</li>
                <li>portrait - 3:4 - Traditional portrait photography</li>
                <li>smartphone - 9:16 - Vertical video for mobile devices</li>
                <li>auto - Natural image ratio (no forced aspect ratio)</li>
              </ul>
            </div>
          </Stack>
        </section>

        {/* Image Fit Modes */}
        <section>
          <UIHeader level={1}>Image Fit Modes</UIHeader>
          <Stack space="content" className="mt-8">
            <div>
              <UIHeader level={2} className="mb-4">
                Cover (Default)
              </UIHeader>
              <Container size="card">
                <Image
                  src="https://images.unsplash.com/photo-1682686581498-5e85c7228119?auto=format&fit=crop&w=1200&q=80"
                  alt="Example cover fit - fills container while maintaining aspect ratio"
                  aspect="wide"
                  fit="cover"
                />
              </Container>
              <p className="mt-2 text-sm text-stone-600">
                Cover mode fills the container while maintaining aspect ratio, cropping if necessary
              </p>
            </div>

            <div>
              <UIHeader level={2} className="mb-4">
                Contain
              </UIHeader>
              <Container size="card">
                <Image
                  src="https://images.unsplash.com/photo-1682686581498-5e85c7228119?auto=format&fit=crop&w=1200&q=80"
                  alt="Example contain fit - shows entire image within container"
                  aspect="wide"
                  fit="contain"
                  className="bg-stone-100"
                />
              </Container>
              <p className="mt-2 text-sm text-stone-600">
                Contain mode shows the entire image within the container, adding padding if
                necessary
              </p>
            </div>

            <div>
              <UIHeader level={2} className="mb-4">
                Fill vs Cover Comparison
              </UIHeader>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="mb-2 text-sm font-medium text-stone-600">Fill (stretches to fit)</p>
                  <Image
                    src="https://images.unsplash.com/photo-1682686581498-5e85c7228119?auto=format&fit=crop&w=1200&q=80"
                    alt="Example fill fit - stretches to fill container"
                    aspect="square"
                    fit="fill"
                  />
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-stone-600">
                    Cover (maintains proportions)
                  </p>
                  <Image
                    src="https://images.unsplash.com/photo-1682686581498-5e85c7228119?auto=format&fit=crop&w=1200&q=80"
                    alt="Example cover fit - maintains proportions"
                    aspect="square"
                    fit="cover"
                  />
                </div>
              </div>
              <p className="mt-2 text-sm text-stone-600">
                Notice how Fill stretches the image, while Cover crops to maintain proportions
              </p>
            </div>

            <div>
              <UIHeader level={2} className="mb-4">
                Position with Cover Mode
              </UIHeader>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <p className="mb-2 text-sm font-medium text-stone-600">Left Position</p>
                  <Image
                    src="https://images.unsplash.com/photo-1504870712357-65ea720d6078?auto=format&fit=crop&w=1200&q=80"
                    alt="Example left position"
                    aspect="square"
                    fit="cover"
                    position="left"
                  />
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-stone-600">Center Position</p>
                  <Image
                    src="https://images.unsplash.com/photo-1504870712357-65ea720d6078?auto=format&fit=crop&w=1200&q=80"
                    alt="Example center position"
                    aspect="square"
                    fit="cover"
                    position="center"
                  />
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-stone-600">Right Position</p>
                  <Image
                    src="https://images.unsplash.com/photo-1504870712357-65ea720d6078?auto=format&fit=crop&w=1200&q=80"
                    alt="Example right position"
                    aspect="square"
                    fit="cover"
                    position="right"
                  />
                </div>
              </div>
              <p className="mt-2 text-sm text-stone-600">
                The position prop controls which part of the image is visible when cropped
              </p>
            </div>
          </Stack>
        </section>

        {/* Border Radius */}
        <section>
          <UIHeader level={1}>Border Radius</UIHeader>
          <Stack space="content" className="mt-8">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <UIHeader level={2} className="mb-4">
                  Medium Radius (Default)
                </UIHeader>
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
                  alt="Example with default medium radius"
                  aspect="square"
                />
                <p className="mt-2 text-sm text-stone-600">
                  Standard 4px radius, matches our button styling
                </p>
              </div>
              <div>
                <UIHeader level={2} className="mb-4">
                  No Radius
                </UIHeader>
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
                  alt="Example with no radius"
                  aspect="square"
                  radius="none"
                />
                <p className="mt-2 text-sm text-stone-600">
                  Sharp corners for grid layouts or full-bleed images
                </p>
              </div>
              <div>
                <UIHeader level={2} className="mb-4">
                  Small Radius
                </UIHeader>
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
                  alt="Example with small radius"
                  aspect="square"
                  radius="sm"
                />
                <p className="mt-2 text-sm text-stone-600">
                  Subtle 2px rounding for minimal softening
                </p>
              </div>
              <div>
                <UIHeader level={2} className="mb-4">
                  Large Radius
                </UIHeader>
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
                  alt="Example with large radius"
                  aspect="square"
                  radius="lg"
                />
                <p className="mt-2 text-sm text-stone-600">
                  Prominent 8px rounding for softer appearance
                </p>
              </div>
              <div>
                <UIHeader level={2} className="mb-4">
                  Full Radius
                </UIHeader>
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
                  alt="Example with full radius"
                  aspect="square"
                  radius="full"
                />
                <p className="mt-2 text-sm text-stone-600">
                  Perfect circle, ideal for avatars and profile pictures
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-stone-100 rounded-lg">
              <p className="text-sm text-stone-600">Border radius usage:</p>
              <ul className="mt-2 text-sm text-stone-600 list-disc list-inside space-y-1">
                <li>md (4px) - Default radius, matches buttons and other interactive elements</li>
                <li>none - For images that need sharp edges or full-bleed layouts</li>
                <li>sm (2px) - For subtle softening of edges</li>
                <li>lg (8px) - For more prominent, friendly appearance</li>
                <li>full - For profile pictures and circular elements</li>
              </ul>
            </div>
          </Stack>
        </section>

        {/* Image Position */}
        <section>
          <UIHeader level={1}>Image Position</UIHeader>
          <Stack space="content" className="mt-8">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <UIHeader level={2} className="mb-4">
                  Top Position
                </UIHeader>
                <Image
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200&q=80"
                  alt="Example top position - shows top of landscape"
                  aspect="portrait"
                  position="top"
                />
                <p className="mt-2 text-sm text-stone-600">Shows the top portion of the image</p>
              </div>
              <div>
                <UIHeader level={2} className="mb-4">
                  Center Position
                </UIHeader>
                <Image
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200&q=80"
                  alt="Example center position - shows middle of landscape"
                  aspect="portrait"
                  position="center"
                />
                <p className="mt-2 text-sm text-stone-600">Shows the middle portion of the image</p>
              </div>
              <div>
                <UIHeader level={2} className="mb-4">
                  Bottom Position
                </UIHeader>
                <Image
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200&q=80"
                  alt="Example bottom position - shows bottom of landscape"
                  aspect="portrait"
                  position="bottom"
                />
                <p className="mt-2 text-sm text-stone-600">Shows the bottom portion of the image</p>
              </div>
            </div>

            <div>
              <UIHeader level={2} className="mb-4">
                Horizontal Position Example
              </UIHeader>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <p className="mb-2 text-sm font-medium text-stone-600">Left Position</p>
                  <Image
                    src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=1200&q=80"
                    alt="Example left position - shows left side"
                    aspect="square"
                    position="left"
                  />
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-stone-600">Center Position</p>
                  <Image
                    src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=1200&q=80"
                    alt="Example center position - shows center"
                    aspect="square"
                    position="center"
                  />
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-stone-600">Right Position</p>
                  <Image
                    src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=1200&q=80"
                    alt="Example right position - shows right side"
                    aspect="square"
                    position="right"
                  />
                </div>
              </div>
              <p className="mt-2 text-sm text-stone-600">
                Position controls which part of the image remains visible when cropped. Useful for
                focusing on specific areas of an image.
              </p>
            </div>

            <div className="mt-8 p-4 bg-stone-100 rounded-lg">
              <p className="text-sm text-stone-600">Position usage:</p>
              <ul className="mt-2 text-sm text-stone-600 list-disc list-inside space-y-1">
                <li>
                  Use top/bottom for vertical cropping (e.g., portrait containers with landscape
                  images)
                </li>
                <li>
                  Use left/right for horizontal cropping (e.g., wide containers with portrait
                  images)
                </li>
                <li>Center is the safe default for most cases</li>
                <li>Position only affects images when they need to be cropped (using cover fit)</li>
              </ul>
            </div>
          </Stack>
        </section>

        {/* Border Options */}
        <section>
          <UIHeader level={1}>Border Options</UIHeader>
          <Stack space="content" className="mt-8">
            {/* Border Width Examples */}
            <div>
              <UIHeader level={2} className="mb-4">
                Border Width
              </UIHeader>
              <div className="grid grid-cols-5 gap-8">
                <div>
                  <p className="mb-2 text-sm font-medium text-stone-600">No Border</p>
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
                    alt="Example with no border"
                    aspect="square"
                    borderWidth={0}
                  />
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-stone-600">1px Border</p>
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
                    alt="Example with 1px border"
                    aspect="square"
                    borderWidth={1}
                  />
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-stone-600">2px Border</p>
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
                    alt="Example with 2px border"
                    aspect="square"
                    borderWidth={2}
                  />
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-stone-600">4px Border</p>
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
                    alt="Example with 4px border"
                    aspect="square"
                    borderWidth={4}
                  />
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-stone-600">8px Border</p>
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
                    alt="Example with 8px border"
                    aspect="square"
                    borderWidth={8}
                  />
                </div>
              </div>
            </div>

            {/* Border Color Examples */}
            <div className="mt-12">
              <UIHeader level={2} className="mb-4">
                Border Colors
              </UIHeader>
              <div className="grid grid-cols-4 gap-8">
                <div>
                  <p className="mb-2 text-sm font-medium text-stone-600">Black Border</p>
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
                    alt="Example with black border"
                    aspect="square"
                    borderWidth={2}
                    borderColor="black"
                  />
                  <p className="mt-2 text-sm text-stone-600">Strong contrast (stone-900)</p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-stone-600">Brand Border</p>
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
                    alt="Example with brand border"
                    aspect="square"
                    borderWidth={2}
                    borderColor="brand"
                  />
                  <p className="mt-2 text-sm text-stone-600">Brand accent color</p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-stone-600">Muted Border</p>
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
                    alt="Example with muted border"
                    aspect="square"
                    borderWidth={2}
                    borderColor="muted"
                  />
                  <p className="mt-2 text-sm text-stone-600">Medium contrast (stone-500)</p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-stone-600">Subtle Border</p>
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
                    alt="Example with subtle border"
                    aspect="square"
                    borderWidth={2}
                    borderColor="subtle"
                  />
                  <p className="mt-2 text-sm text-stone-600">Light contrast (stone-200)</p>
                </div>
              </div>
            </div>

            {/* Combined Examples */}
            <div className="mt-12">
              <UIHeader level={2} className="mb-4">
                Combined Examples
              </UIHeader>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <p className="mb-2 text-sm font-medium text-stone-600">Thick Brand Border</p>
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
                    alt="Example with thick brand border"
                    aspect="square"
                    borderWidth={8}
                    borderColor="brand"
                    radius="lg"
                  />
                  <p className="mt-2 text-sm text-stone-600">8px brand border with large radius</p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-stone-600">Medium Black Border</p>
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
                    alt="Example with medium black border"
                    aspect="square"
                    borderWidth={4}
                    borderColor="black"
                    radius="full"
                  />
                  <p className="mt-2 text-sm text-stone-600">4px black border with full radius</p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-stone-600">Thin Muted Border</p>
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
                    alt="Example with thin muted border"
                    aspect="square"
                    borderWidth={1}
                    borderColor="muted"
                    radius="md"
                  />
                  <p className="mt-2 text-sm text-stone-600">1px muted border with medium radius</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-stone-100 rounded-lg">
              <p className="text-sm text-stone-600">Border usage tips:</p>
              <ul className="mt-2 text-sm text-stone-600 list-disc list-inside space-y-1">
                <li>Use black borders for strong emphasis and contrast</li>
                <li>Brand borders work well for highlighting key images</li>
                <li>Muted borders provide definition without drawing too much attention</li>
                <li>Subtle borders work well for light mode interfaces and delicate designs</li>
                <li>Combine border width, color, and radius for different effects</li>
              </ul>
            </div>
          </Stack>
        </section>

        {/* Usage Notes */}
        <section>
          <div className="mt-8 p-4 bg-stone-100 rounded-lg">
            <p className="text-sm text-stone-600">Image component features:</p>
            <ul className="mt-2 text-sm text-stone-600 list-disc list-inside space-y-1">
              <li>Predefined aspect ratios (square, video, portrait)</li>
              <li>Flexible fit modes (cover, contain)</li>
              <li>Image positioning options</li>
              <li>Border radius variants using our scale</li>
              <li>Loading state background</li>
              <li>Responsive by default (full-width)</li>
            </ul>
          </div>
        </section>
      </Stack>
    </div>
  );
}
