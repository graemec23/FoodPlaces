import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import emotionNormalize from "emotion-normalize";
import { Global, css } from "@emotion/core";

import Store from "./store";
import Landing from "./Landing";


const FourOhFour = () => <h1>404</h1>

const App = () =>
  <Provider store={Store}>
    <Global
      styles={css`
    ${emotionNormalize}
    html,
    body {
      padding: 0;
      margin: 0;
      background: white;
      min-height: 100%;
      font-family: Helvetica, Arial, sans-serif;
    }
  `}
    />
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} />
        <Route component={FourOhFour} />
      </Switch>
    </BrowserRouter>
  </Provider>

render(React.createElement(App), document.getElementById("root"));
