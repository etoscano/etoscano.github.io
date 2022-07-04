import React from 'react';

import Header from '../modules/Header/Header.jsx';

export default {
  title: 'Modules/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Header {...args} />;

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   user: {
//     name: 'Jane Doe',
//   },
// };

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};

export const Default = Template.bind({});
Default.args = {};
