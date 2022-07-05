import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from '../pages/Contact/Contact.jsx';

export default {
  title: 'Pages/Contact',
  component: Contact,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Router><Contact {...args} /></Router>;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Log in/i });
  await userEvent.click(loginButton);
};
