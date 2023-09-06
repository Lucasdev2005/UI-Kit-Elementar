import React from 'react';
import { Meta, Story } from '@storybook/react';
import {Input, InputProps} from '../src/Input/Input';

const meta: Meta = {
  title: 'Input',
  component: Input,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<InputProps> = args => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {};