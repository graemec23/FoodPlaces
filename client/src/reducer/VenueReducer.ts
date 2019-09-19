import {
  GET_VENUES,
  UPDATE_VENUES
} from "../actions/types";

import venues from "./data/venues.json";

// const INITIAL_STATE = [];

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_VENUES:
      return [...state, ...venues]
    case UPDATE_VENUES:
      return [...state.map(venue => {
        const { food, drinks: venueDrinks } = venue;

        const avoidItems = action.payload.filter(res => res.isSelected).reduce((avoid, { name: user, wont_eat, drinks: userDrinks }) => {
          const avoidFood = food.filter(meal => !wont_eat.includes(meal)).length === 0;
          const avoidDrinks = venueDrinks.filter(drink => userDrinks.includes(drink)).length === 0;

          if (avoidFood || avoidDrinks) {

            return {
              ...avoid,
              [user]: {
                avoidDrinks,
                avoidFood
              }
            }
          }

          return avoid;
        }, {})

        if (Object.keys(avoidItems).length) {
          venue = {
            ...venue,
            avoid: avoidItems
          }
        } else {
          const { avoid, ...noAvoid } = venue;
          venue = noAvoid;
        }

        return venue;

      })]
    default:
      return state;
  }
};
