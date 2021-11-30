import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './index.css';

// layouts
import Auth from './layouts/Auth';
import Landing from './layouts/Landing';
import Errorpage from './layouts/Errorpage'
import Content from './layouts/Content';




ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/auth" component={Auth} />

      {/* add routes without layouts */}
      <Route path="/" exact component={Landing} />
      <Route path="/phis"  exact component={Content} />
      <Route path="*"  component={Errorpage} />
      {/* redirect from first page */}
     
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

