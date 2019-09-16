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
      return [...state, ...users]
    case UPDATE_USER:
      return state.map((content, i) =>
        i === action.payload.index ? { ...content, isSelected: action.payload.isSelected }
          : content);
    default:
      return state;
  }
};
