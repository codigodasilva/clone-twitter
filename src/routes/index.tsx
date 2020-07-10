import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { ExamplePage } from '../pages';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ExamplePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
