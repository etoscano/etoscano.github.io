import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MyWork from '../pages/MyWork/MyWork.jsx';

export default {
  title: 'Pages/MyWork',
  component: MyWork,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Router><MyWork {...args} /></Router>;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Default = Template.bind({});

// export const LoggedIn = Template.bind({});
// LoggedIn.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const loginButton = await canvas.getByRole('button', { name: /Log in/i });
//   await userEvent.click(loginButton);
// };
