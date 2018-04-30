import {
  GET_VENUES
} from '../actions/types';

import venues from './data/venues.json';

// const INITIAL_STATE = [];

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_VENUES:
      return [ ...state, ...venues ]
    default:
      return state;
  }
};
