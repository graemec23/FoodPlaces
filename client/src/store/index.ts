import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import Reducer from "../reducer";
import { createLogger } from "redux-logger";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";


const middleware = [ReduxThunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
  middleware.push(reduxImmutableStateInvariant());
}

const Store = createStore(
  Reducer,
  applyMiddleware(...middleware),
);

// console.log("store", Store.getState());

export default Store;
