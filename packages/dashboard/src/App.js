import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { unstable_ClassNameGenerator as ClassNameGenerator } from "@mui/material/className";
import Dashboard from "./components/dashboard";
import KristalInfo from "./components/kristal";

ClassNameGenerator.configure((componentName) => `profile-${componentName}`);

export default ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/dashboard/profile" exact component={Dashboard}></Route>
          <Route path="/dashboard/profile/kristal-info" component={KristalInfo} exact/>
        </Switch>
      </Router>
    </div>
  );
};
