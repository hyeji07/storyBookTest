import Button, { ButtonProps } from '../Button';
import type { Meta, StoryFn } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
/* const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}; */

/* export default meta; */

export default {
  title: 'Button',
  component: Button,
  argTypes: { handleClick: { action: 'clicked' } },
} as Meta;
/* 
type Story = StoryObj<typeof Button>; */

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const RedBtn = Template.bind({});
RedBtn.args = {
  label: 'Red',
  backgroundColor: 'red',
  size: 'md',
  color: 'white',
};

export const BlueBtn = Template.bind({});
BlueBtn.args = {
  label: 'Blue',
  backgroundColor: 'blue',
  size: 'md',
  color: 'white',
};

export const SmBtn = Template.bind({});
SmBtn.args = {
  label: 'Sm Btn',
  backgroundColor: 'gray',
  size: 'sm',
  color: 'white',
};

export const LgBtn = Template.bind({});
LgBtn.args = {
  label: 'Lg Btn',
  backgroundColor: 'gray',
  size: 'lg',
  color: 'white',
};

export const MainBtn = Template.bind({});
MainBtn.args = {
  label: 'Main Btn',
  backgroundColor: 'brown',
  size: 'md',
};
