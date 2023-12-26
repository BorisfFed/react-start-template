import type { Meta } from '@storybook/react';
import { ButtonAddToCart } from './ButtonAddToCart';

const meta: Meta<typeof ButtonAddToCart> = {  
  title: 'Компоненты/Buttons/ButtonAddToCart',
  component: ButtonAddToCart,
  tags: ['autodocs'],
  argTypes: {
    count: {control: "number"},
  },
};

export default meta;

export const Счётчик_равен_нулю = {
  args: {
    count: 0
  },
};

export const Счётчик_меньше_нуля = {
  args: {
    count: -1
  },
};

export const Счётчик_больше_нуля = {
  args: {
    count: 3
  },
};