import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Store from "./store";
import Landing from "./Landing";
// import Search from "./Search";
import Details from "./Details";

const FourOhFour = () => <h1>404</h1>

const App = () =>
  <Provider store={Store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} />
        <Route component={FourOhFour} />
      </Switch>
    </BrowserRouter>
  </Provider>

render(React.createElement(App), document.getElementById("root"));
  /* <Route path="/search" component={props => <Search places={preload.places} /> */
                // <Route path="/details:/id"
                //   component={props => <Details show={preload.shows.find(show => props.match.params.id === show.imdbID)} />}
                // />
