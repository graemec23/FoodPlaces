import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducer from '../reducer';

const middleware = [ReduxThunk];
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger());
//   middleware.push(reduxImmutableStateInvariant());
// }

const Store = createStore(
  Reducer,
  applyMiddleware(...middleware),
);

  console.log('store', Store.getState());

  export default Store;
