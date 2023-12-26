import type { Meta } from '@storybook/react';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'Example/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
    },
};

export default meta;

export const Visible = {
    args: {
      visible: true,
    },
  };
  
  export const NotVisible = {
    args: {
      visible: false,
    },
  };

  export const children = {
    args: {
      visible: true,
      children: "Текст"
    },
  };
