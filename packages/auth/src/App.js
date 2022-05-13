import React, { lazy, Suspense } from "react";
import { Switch, Route, Router } from "react-router-dom";
import { unstable_ClassNameGenerator as ClassNameGenerator } from "@mui/material/className";
import SignIn from "./components/Signin";
import SignUp from "./components/SignUp";

ClassNameGenerator.configure((componentName) => `auth-${componentName}`);

export default ({ history, onSignIn }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/auth/signin" exact>
          <SignIn onSignIn={onSignIn} />
        </Route>
        <Route path="/auth/signup" exact>
           <SignUp onSignIn={onSignIn} />
        </Route>
      </Switch>
    </Router>
  );
};
