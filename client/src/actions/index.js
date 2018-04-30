
import {
    getUsersJson,
    // getVenuesJson
} from './api';

import {
    GET_USERS,
    UPDATE_USER,
    GET_VENUES
} from './types';

export const getUsers = (prop) => ({
  type: GET_USERS
});

export const updateUser = (user) => (dispatch) => {

  console.log('user', user)
  dispatch({type: UPDATE_USER, payload: user})
};

export const getVenues = (prop) => ({
  type: GET_VENUES
});


// export const getUsers = () => (dispatch) => {
  // getUsersJson()
  // .then((res) => {
  //   console.log('get', res)
  //   // dispatch({ type: GET_USERS }, );
  // })
  // .catch((err) => {
  //   console.log('err', err);
  // })
// };

