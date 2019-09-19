import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

import Reducer from "../reducer";

const middleware = [ReduxThunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
  middleware.push(reduxImmutableStateInvariant());
}

const Store = createStore(
  Reducer,
  applyMiddleware(...middleware),
);

export default Store;
