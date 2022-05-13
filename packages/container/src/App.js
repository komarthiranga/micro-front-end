import React, {Suspense, useState, lazy} from "react";
import AppContainer from './components/AppConatiner';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LinearDeterminate from './components/Progress';
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className';
ClassNameGenerator.configure((componentName) => `container-${componentName}`);

export default () => {
  const ProfileApp = lazy( () => import('./components/ProfileApp') );
  const AuthApp = lazy( () => import('./components/AuthApp') );
  const [isSingedIn, setIsSignedIn] = React.useState(false);
  return (
    <BrowserRouter>
      <AppContainer onSignOut={ () => setIsSignedIn(false)} isSignedIn={isSingedIn} >
        <Suspense fallback={<LinearDeterminate />}>
           <Switch>
              <Route path="/auth">
                 <AuthApp onSignIn={ () => setIsSignedIn(true)} />
              </Route>  
              <Route path="/" component={ProfileApp} />
           </Switch>
         </Suspense>    
      </AppContainer>  
    </BrowserRouter>
  );
};
