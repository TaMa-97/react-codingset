import React from 'react';
import { Meta, Story } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from '@/components/layouts/footer/Footer';

export default {
  title: 'components/layouts/footer/Footer',
  component: Footer,
} as Meta;

const Template: Story = (args) => <Footer {...args} />;

export const Default = Template.bind({});
