import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from '../modules/Footer/Footer.jsx';

export default {
  title: 'Modules/Footer',
  component: Footer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Router><Footer {...args} /></Router>;

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
