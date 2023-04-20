import type { Meta, StoryObj } from '@storybook/react';
import Button2 from './Button2';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Button2',
  component: Button2,
  tags: ['autodocs'],
  argTypes: {
    // size: {
    //   options: ['small', 'medium', 'large'],
    // },
    // disabled: {
    //   type: 'boolean',
    // },
  },
} satisfies Meta<typeof Button2>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Medium: Story = {
  args: {
    size: 'medium',
    disabled: false,
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    disabled: false,
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    disabled: false,
    children: 'Button',
  },
};
