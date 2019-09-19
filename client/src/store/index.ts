import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
<<<<<<< HEAD:client/src/store/index.ts
import Reducer from "../reducer";
=======
>>>>>>> moving to react hooks:client/public/src/store/index.ts
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

<<<<<<< HEAD:client/src/store/index.ts
// console.log("store", Store.getState());

=======
>>>>>>> moving to react hooks:client/public/src/store/index.ts
export default Store;
