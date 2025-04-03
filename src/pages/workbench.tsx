import React from 'react';
import { Stack } from '../components/layout/stack';

export default function Workbench() {
  return (
    <div className="p-8 bg-background text-foreground min-h-screen">
      <Stack space="section">
        <h1 className="text-4xl font-bold">Design System v2 Workbench</h1>

        {/* Active component testing area */}
        <div id="active-component-workspace">
          <Stack space="content">
            <h2 className="text-2xl font-semibold">Stack Component Examples</h2>

            {/* Vertical Stack (Default) */}
            <section>
              <h3 className="text-xl mb-4">Vertical Stack (Default)</h3>
              <Stack space="element" className="bg-surface p-4">
                <div className="bg-ocean p-4 text-white">Item 1</div>
                <div className="bg-ocean p-4 text-white">Item 2</div>
                <div className="bg-ocean p-4 text-white">Item 3</div>
              </Stack>
            </section>

            {/* Horizontal Stack */}
            <section>
              <h3 className="text-xl mb-4">Horizontal Stack</h3>
              <Stack direction="row" space="element" className="bg-surface p-4">
                <div className="bg-sunset p-4 text-white">Item 1</div>
                <div className="bg-sunset p-4 text-white">Item 2</div>
                <div className="bg-sunset p-4 text-white">Item 3</div>
              </Stack>
            </section>

            {/* Responsive Stack */}
            <section>
              <h3 className="text-xl mb-4">Responsive Stack (Row to Column)</h3>
              <Stack direction="row" breakAt="md" space="element" className="bg-surface p-4">
                <div className="bg-marine p-4 text-white">Item 1</div>
                <div className="bg-marine p-4 text-white">Item 2</div>
                <div className="bg-marine p-4 text-white">Item 3</div>
              </Stack>
            </section>

            {/* Spacing Variants */}
            <section>
              <h3 className="text-xl mb-4">Spacing Variants</h3>
              <Stack space="element">
                <Stack space="compact" className="bg-surface p-4">
                  <div className="bg-sun p-4 text-white">Compact Spacing</div>
                  <div className="bg-sun p-4 text-white">Compact Spacing</div>
                </Stack>
                <Stack space="relaxed" className="bg-surface p-4">
                  <div className="bg-seafoam p-4 text-white">Relaxed Spacing</div>
                  <div className="bg-seafoam p-4 text-white">Relaxed Spacing</div>
                </Stack>
                <Stack space="content" className="bg-surface p-4">
                  <div className="bg-coral p-4 text-white">Content Spacing</div>
                  <div className="bg-coral p-4 text-white">Content Spacing</div>
                </Stack>
              </Stack>
            </section>

            {/* Alignment Examples */}
            <section>
              <h3 className="text-xl mb-4">Alignment Examples</h3>
              <Stack space="element">
                <Stack
                  direction="row"
                  align="center"
                  justify="between"
                  space="element"
                  className="bg-surface p-4 h-32"
                >
                  <div className="bg-navy p-4 text-white">Center Aligned</div>
                  <div className="bg-navy p-4 text-white">Space Between</div>
                </Stack>
                <Stack
                  direction="row"
                  align="start"
                  justify="center"
                  space="element"
                  className="bg-surface p-4 h-32"
                >
                  <div className="bg-amber p-4 text-white">Top Aligned</div>
                  <div className="bg-amber p-4 text-white">Centered</div>
                </Stack>
              </Stack>
            </section>

            {/* Container Width Examples */}
            <section>
              <h3 className="text-xl mb-4">Container Width Examples</h3>
              <Stack space="element">
                <Stack maxWidth="content" className="bg-surface p-4">
                  <div className="bg-lagoon p-4 text-white">Content Width Container</div>
                </Stack>
                <Stack maxWidth="form" className="bg-surface p-4">
                  <div className="bg-peach p-4 text-white">Form Width Container</div>
                </Stack>
              </Stack>
            </section>
          </Stack>
        </div>
      </Stack>
    </div>
  );
}
