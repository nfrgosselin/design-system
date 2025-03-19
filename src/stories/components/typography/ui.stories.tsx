import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UIHeader, UILabel, UICaption } from '@/components/typography/ui';

const meta = {
  title: 'Components/Typography/UI',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;

export const Headers: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <UIHeader variant="primary">Primary UI Header</UIHeader>
      <UIHeader variant="secondary">Secondary UI Header</UIHeader>
      <UIHeader variant="supporting">Supporting UI Header</UIHeader>
    </div>
  ),
};

export const Labels: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <div>
        <UILabel>Uppercase Label (Default)</UILabel>
      </div>
      <div>
        <UILabel isUppercase={false}>Regular Case Label</UILabel>
      </div>
    </div>
  ),
};

export const Captions: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <UICaption>
        A caption providing additional context or information about a UI element.
      </UICaption>
      <UICaption>Another caption example showing how multiple captions might appear.</UICaption>
    </div>
  ),
};

export const CompleteExample: StoryObj = {
  render: () => (
    <div className="space-y-8">
      <div>
        <UIHeader variant="primary">Account Settings</UIHeader>
        <UICaption>Manage your account preferences and security settings.</UICaption>
      </div>

      <div className="space-y-2">
        <UILabel>Email Address</UILabel>
        <input
          type="email"
          className="block w-full rounded-md border border-stone-200 px-3 py-2"
          placeholder="your@email.com"
        />
        <UICaption>We&apos;ll never share your email with anyone else.</UICaption>
      </div>

      <div className="space-y-2">
        <UIHeader variant="secondary">Notification Preferences</UIHeader>
        <div className="space-y-4">
          <div>
            <UILabel isUppercase={false}>Email Notifications</UILabel>
            <UICaption>Receive updates about your account activity.</UICaption>
          </div>
          <div>
            <UILabel isUppercase={false}>Marketing Communications</UILabel>
            <UICaption>Get the latest news and product updates.</UICaption>
          </div>
        </div>
      </div>
    </div>
  ),
};
