import React, { Suspense, useState, lazy, useEffect } from "react";
import AppContainer from "./components/AppConatiner";
import { Switch, Router, Route, Redirect } from "react-router-dom";
import LinearDeterminate from "./components/Progress";
import { unstable_ClassNameGenerator as ClassNameGenerator } from "@mui/material/className";
import { createBrowserHistory } from "history";

ClassNameGenerator.configure((componentName) => `container-${componentName}`);

const history = createBrowserHistory();

export default () => {
  const ProfileApp = lazy(() => import("./components/ProfileApp"));
  const AuthApp = lazy(() => import("./components/AuthApp"));
  const DashboardApp = lazy(() => import("./components/Dashboard"));
  const MarketingApp = lazy( () => import('./components/MarketingApp') );

  const [isSingedIn, setIsSignedIn] = React.useState(false);

  useEffect(() => {
    if (isSingedIn) {
      history.push("/profile");
    }
  }, [isSingedIn]);

  return (     
    <Router history={history}>
      <AppContainer
        onSignOut={() => setIsSignedIn(false)}
        isSignedIn={isSingedIn}
      >
        <Suspense fallback={<LinearDeterminate />}>
          <Switch>
            <Route path="/auth">
              <AuthApp
                onSignIn={() => {
                  setIsSignedIn(true);
                }}
              />
            </Route>
            {/* <Route path="/dashboard">
              {!isSingedIn && <Redirect to="/" />}
              <DashboardApp />
            </Route> */}
            <Route path="/profile" component={ProfileApp} />
            <Route path="/" component={MarketingApp} />
          </Switch>
        </Suspense>
      </AppContainer>
    </Router>
  );
};
