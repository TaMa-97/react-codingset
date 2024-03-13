import React from 'react';
import { Meta, Story } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '@/components/layouts/header/Header';

export default {
  title: 'components/layouts/header/Header',
  component: Header,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const Default = Template.bind({});
