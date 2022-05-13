import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { unstable_ClassNameGenerator as ClassNameGenerator } from "@mui/material/className";
import Dashboard from './components/dashboard';
import KristalInfo from './components/kristal';

ClassNameGenerator.configure((componentName) => `profile-${componentName}`);

export default ({history}) => {
 return( <div>
    <Router history={history}>
      <Switch>
        <Route path="/profile/kristal-info" exact component={KristalInfo} />
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </Router>
  </div>);
};
