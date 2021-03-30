import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Button ,{  ButtonProps } from './button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;


export const Primary = Template.bind({});
Primary.args = {
  btnType: 'primary',
  children:'primary'
};
export const Link = Template.bind({});
Link.args = {
  btnType: 'link',
  href:'www.baidu.com',
  children:'111'
};



export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  children:'Large'
};

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
