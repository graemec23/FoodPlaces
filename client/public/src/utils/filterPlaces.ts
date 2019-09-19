
import { IVenue, IUser } from "../interface";

const filteredFoodPlaces = (venues: IVenue[], users: IUser[]) =>
  venues.map(venue => {
    const { food, drinks: venueDrinks } = venue;
    let newVenue = {};

    const avoidItems = users.reduce((avoid, { name: user, wont_eat, drinks: userDrinks }) => {
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
      newVenue = {
        ...venue,
        avoid: avoidItems
      }
    } else {
      const { avoid, ...noAvoid } = venue;
      newVenue = noAvoid;
    }

    return newVenue;

  });

export default filteredFoodPlaces;
