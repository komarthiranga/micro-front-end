import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

const mount = (element, { onSignIn, onNavigate, defaultHistory, initialpath }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialpath]
  });
  if(onNavigate) {
    history.listen(onNavigate);
  }
  console.log(history.location.pathname);

  ReactDOM.render(<App onSignIn={onSignIn} history={history} />, element);

  return {
      onParentNavigat({pathname : nextPathName}) {
          const {pathname} = history.location;
          if(pathname !== nextPathName) {
              history.push(nextPathName);
          }
      }
  }
};

if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#auth-root");
  if (element) {
    mount(element, {defaultHistory: createBrowserHistory()});
  }
}

export { mount };
