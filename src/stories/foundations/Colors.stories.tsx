import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Foundations/Colors',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;

type ColorSwatchProps = {
  label: string;
  color?: string;
  textColor?: string;
  className?: string;
  value?: string;
  cssVar?: string;
};

function ColorSwatch({
  label,
  color,
  value,
  textColor = 'text-stone-900',
  className,
  cssVar,
}: ColorSwatchProps) {
  // Convert space-separated HSL values to comma-separated for the hsl() function
  const getHslColor = (variable: string) => {
    const style = getComputedStyle(document.documentElement);
    const value = style.getPropertyValue(variable).trim();
    const [h, s, l] = value.split(' ');
    return `hsl(${h}, ${s}, ${l})`;
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        className={`h-16 w-full rounded-md ${className}`}
        style={{
          minWidth: '150px',
          backgroundColor: cssVar ? getHslColor(cssVar) : color,
        }}
      />
      <div className="space-y-1">
        <div className={`text-sm font-mono ${textColor}`}>{label}</div>
        {value && <div className="text-xs font-mono text-stone-500">{value}</div>}
      </div>
    </div>
  );
}

function ColorSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-stone-900">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">{children}</div>
    </div>
  );
}

export const ProductIdentity: StoryObj = {
  render: () => (
    <div className="space-y-12">
      <ColorSection title="Product Identity">
        <ColorSwatch label="Ocean" cssVar="--ocean" value="Professional tools" />
        <ColorSwatch label="Ocean Hover" cssVar="--ocean-hover" value="Interactive state" />
        <ColorSwatch label="Ocean Active" cssVar="--ocean-active" value="Active state" />

        <ColorSwatch label="Sunset" cssVar="--sunset" value="Creative tools" />
        <ColorSwatch label="Sunset Hover" cssVar="--sunset-hover" value="Interactive state" />
        <ColorSwatch label="Sunset Active" cssVar="--sunset-active" value="Active state" />

        <ColorSwatch label="Sun" cssVar="--sun" value="Publishing tools" />
        <ColorSwatch label="Sun Hover" cssVar="--sun-hover" value="Interactive state" />
        <ColorSwatch label="Sun Active" cssVar="--sun-active" value="Active state" />

        <ColorSwatch label="Marine" cssVar="--marine" value="Technical tools" />
        <ColorSwatch label="Marine Hover" cssVar="--marine-hover" value="Interactive state" />
        <ColorSwatch label="Marine Active" cssVar="--marine-active" value="Active state" />
      </ColorSection>

      <ColorSection title="Supporting Accents">
        <ColorSwatch label="Seafoam" cssVar="--seafoam" value="Secondary accent" />
        <ColorSwatch label="Coral" cssVar="--coral" value="Secondary accent" />
        <ColorSwatch label="Navy" cssVar="--navy" value="Secondary accent" />
        <ColorSwatch label="Amber" cssVar="--amber" value="Secondary accent" />
        <ColorSwatch label="Lagoon" cssVar="--lagoon" value="Secondary accent" />
        <ColorSwatch label="Peach" cssVar="--peach" value="Secondary accent" />
        <ColorSwatch label="Slate" cssVar="--slate" value="Secondary accent" />
        <ColorSwatch label="Gold" cssVar="--gold" value="Secondary accent" />
      </ColorSection>

      <ColorSection title="Status Colors">
        <ColorSwatch label="Success" cssVar="--success" value="Positive feedback" />
        <ColorSwatch label="Warning" cssVar="--warning" value="Cautionary feedback" />
        <ColorSwatch label="Error" cssVar="--error" value="Negative feedback" />
        <ColorSwatch label="Info" cssVar="--info" value="Informational feedback" />
      </ColorSection>

      <ColorSection title="Stone Scale">
        <ColorSwatch label="Stone 50" cssVar="--stone-50" value="Lightest background" />
        <ColorSwatch label="Stone 100" cssVar="--stone-100" value="Light background" />
        <ColorSwatch label="Stone 200" cssVar="--stone-200" value="Subtle background" />
        <ColorSwatch label="Stone 300" cssVar="--stone-300" value="UI element background" />
        <ColorSwatch label="Stone 400" cssVar="--stone-400" value="Muted text" />
        <ColorSwatch label="Stone 500" cssVar="--stone-500" value="Secondary text" />
        <ColorSwatch label="Stone 600" cssVar="--stone-600" value="Primary text" />
        <ColorSwatch label="Stone 700" cssVar="--stone-700" value="Emphasized text" />
        <ColorSwatch label="Stone 800" cssVar="--stone-800" value="Dark background" />
        <ColorSwatch label="Stone 900" cssVar="--stone-900" value="Darkest background" />
      </ColorSection>

      <ColorSection title="Surface & UI Colors">
        <ColorSwatch label="Surface" cssVar="--surface" value="Default background" />
        <ColorSwatch label="Surface Hover" cssVar="--surface-hover" value="Interactive surface" />
        <ColorSwatch label="Surface Active" cssVar="--surface-active" value="Active surface" />
        <ColorSwatch label="Border" cssVar="--border" value="Primary border" />
        <ColorSwatch label="Border Subtle" cssVar="--border-subtle" value="Secondary border" />
        <ColorSwatch label="Border Hover" cssVar="--border-hover" value="Interactive border" />
      </ColorSection>
    </div>
  ),
};
