import {
  GET_USERS,
  UPDATE_USER,
  UserActionTypes
} from "../actions/types";

import { IUpdateUser } from "../interface"

import users from "./data/users.json";

const INITIAL_STATE: IUpdateUser[] = [];

export default (state = INITIAL_STATE, action: UserActionTypes) => {
  switch (action.type) {
    case GET_USERS:
      return [...state, ...users];
    case UPDATE_USER:
      return state.map((content, i) =>
        i === action.payload.index ? { ...content, isSelected: action.payload.isSelected }
          : content);
    default:
      return state;
  }
};
