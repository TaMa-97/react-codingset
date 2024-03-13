import React from 'react';
import { Meta, Story } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import BackToTop from '@/components/layouts/backToTop/BackToTop';

export default {
  title: 'components/layouts/backToTop/BackToTop',
  component: BackToTop,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: Story = (args) => <BackToTop {...args} />;

export const Default = Template.bind({});
