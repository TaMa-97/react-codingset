import React from 'react';
import { Meta, Story } from '@storybook/react';
import SampleButton, {
  SampleButtonProps,
} from '@/components/elements/button/sampleButton/SampleButton';

export default {
  title: 'components/elements/button/SampleButton',
  component: SampleButton,
} as Meta;

const Template: Story<typeof SampleButton> = (args) => (
  <SampleButton {...args} />
);

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Small Button',
};

export const Sample = Template.bind({});
Sample.args = {
  size: 'default',
  children: 'Sample Button',
};
