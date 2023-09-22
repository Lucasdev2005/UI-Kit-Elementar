import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Text, TextProps} from '../src/Text/Text';

const meta: Meta = {
  title: 'Text',
  component: Text,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TextProps> = args => <Text {...args} />;

export const Default = Template.bind({});

Default.args = {};