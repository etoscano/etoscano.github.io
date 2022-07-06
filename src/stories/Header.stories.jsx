import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from '../modules/Header/Header.jsx';

export default {
  title: 'Modules/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Router><Header {...args} /></Router>;

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
