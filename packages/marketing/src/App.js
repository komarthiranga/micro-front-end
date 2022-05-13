import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { unstable_ClassNameGenerator as ClassNameGenerator } from "@mui/material/className";
import Explore from "./components/explore";

ClassNameGenerator.configure((componentName) => `marketing-${componentName}`);

export default ({history}) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Explore} />
        </Switch>
      </Router>
    </div>
  );
};
