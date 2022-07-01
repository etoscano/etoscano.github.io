import React from 'react';

import Column from '../modules/Column/Column.jsx'

export default {
  title: 'Structure/Column',
  component: Column,
};

const Template = (args) => <Column {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Color = Template.bind({});
Color.bgColor = true
Color.args = {
};