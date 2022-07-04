import React from 'react';

import Row from '../modules/Row/Row.jsx'
import Column from '../modules/Column/Column.jsx'

export default {
  title: 'Structure/Row',
  component: Row,
};

const Template = (args) => <Row {...args}>
  </Row>;

export const Default = Template.bind({});
Default.args = {
};

export const Wrap = Template.bind({});
Wrap.margins = true
Wrap.args = {
  children: <>
    <Column margins={Wrap.margins} size={6}  bgColor={true} > jbkjdwbja</Column>
    <Column margins={Wrap.margins} size={2}  bgColor={true}> jb</Column>
    <Column margins={Wrap.margins} size={9}  bgColor={true}> jbkjdwbja</Column>
  </>,
  extraClass: "row--myClass"
};

export const FourEight = Template.bind({});
FourEight.args = {
  children: <>
  <Column size={4}  bgColor={true}> jbkjdwbja</Column>
  <Column size={8}  bgColor={true}> jb</Column>
</>
};
