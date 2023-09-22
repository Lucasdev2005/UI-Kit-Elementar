import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Box, BoxProps } from '../src/Box/Box';

const meta: Meta = {
  title: 'Box',
  component: Box,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<BoxProps> = args => <Box {...args} />;

export const Default = Template.bind({});

Default.args = {};