import {
  GET_VENUES,
  VenueActionType
} from "../actions/types";
import { IVenue } from "../interface"

import venues from "./data/venues.json";

const INITIAL_STATE: IVenue[] = [];

export default (state = INITIAL_STATE, action: VenueActionType) => {
  switch (action.type) {
    case GET_VENUES:
      return [...state, ...venues]
    default:
      return state;
  }
};
