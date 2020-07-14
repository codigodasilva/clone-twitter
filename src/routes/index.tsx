import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { Profile } from '../pages';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
