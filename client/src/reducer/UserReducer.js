import {
  GET_USERS,
  UPDATE_USER
} from '../actions/types';

import users from './data/users.json';

// const INITIAL_STATE = [];

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return [ ...state, ...users ]
    case UPDATE_USER:
    return [...state.slice(0, action.payload.index),
      Object.assign({}, state[action.payload.index], {isSelected: action.payload.isSelected}),
      ...state.slice(action.payload.index + 1)]
    default:
      return state;
  }
};
