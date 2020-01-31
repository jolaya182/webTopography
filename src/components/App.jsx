/* eslint-disable no-unused-vars */
/**
 * title: App.js
 *
 * date: / /
 *
 * author: javier olaya
 *
 * description: this component handles the basic routing for the webpage
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import { Whoops404, myComponent, articleHtml } from '../page';
import pages from '../css/index.scss';

const App = () => (
  <ErrorBoundary>
    <Router>
      <Switch>
        <Route path="/" exact component={myComponent} />
        <Route path="/Profile" component={myComponent} />
        <Route path="/Feature" component={myComponent} />
        <Route component={Whoops404} />
      </Switch>
    </Router>
  </ErrorBoundary>
);

// const App = () => (
//   <div>
//     cool story bro
//   </div>
// );

App.PropType = {
  myComponent: PropTypes.elementType
};

export default App;
