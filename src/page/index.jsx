/* eslint-disable react/prop-types */
/**
 * title: index.jsx
 *
 * date: / /
 *
 * author: javier olaya
 *
 * description: this component handles all the pages to render on the webpage
 */
// main page component create the 404 page and the all other
// pages as exported components
import React from 'react';
import MainMenu from './MainMenu';
import MiddleBody from './MiddleBody';

// bring what ever component to render
import SomeArticle from '../components/SomeArticle';

export const Whoops404 = ({ location }) => (
  <div className="whoops404">
    <h1>
      resources not found at
      {` ${location.pathname}`}
    </h1>
  </div>
);

export const PageTemplate = ({ children }) => (
  <div className="page">
    <MainMenu />
    {children}
  </div>
);

export const myComponent = () => (
  <PageTemplate>
    <div className="rightBody">
      <MiddleBody />
    </div>
  </PageTemplate>
);

export const articleHtml = () => <SomeArticle />;
