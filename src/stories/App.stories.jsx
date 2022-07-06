import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from '../App.js';

export default {
  title: 'App',
  component: App,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <App {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Default = Template.bind({});


