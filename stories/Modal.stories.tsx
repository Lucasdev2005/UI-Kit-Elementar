import React from 'react';
import { Meta, Story } from '@storybook/react';
import {Modal, ModalProps} from '../src/Modal/Modal';

const meta: Meta = {
  title: 'Modal',
  component: Modal,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ModalProps> = args => <Modal {...args} />;

export const Default = Template.bind({});

Default.args = {};