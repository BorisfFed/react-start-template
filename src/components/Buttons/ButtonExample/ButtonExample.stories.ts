import type { Meta } from '@storybook/react';
import { ButtonExample } from './ButtonExample';



const meta: Meta<typeof ButtonExample> = {
  title: 'Example/ButtonExample',
  component: ButtonExample,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;

export const ButtonExampleZero = {
  args: {
    count: 0,
  },
};
