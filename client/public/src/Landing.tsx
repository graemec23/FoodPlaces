import React, { FunctionComponent, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ISystemState, IVenue } from "./interface";

import Header from "./components/common/Header";
import UserList from "./components/UserList";
import VenueList from "./components/VenueList";
import AvoidList from "./components/AvoidList";

import filteredFoodPlaces from "./utils/filterPlaces";

import {
  GET_USERS,
  UPDATE_USER,
  GET_VENUES,
} from "./actions/types";

const App: FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_VENUES });
    dispatch({ type: GET_USERS });
  }, []);

  const updateUser = useCallback(
    user => {
      dispatch({ type: UPDATE_USER, payload: user });
    },
    [dispatch],
  );

  const { users, venues } = useSelector((state: ISystemState) => ({
    users: state.users,
    venues: filteredFoodPlaces(state.venues, state.users.filter(res => res.isSelected))
      .filter(() => state.users.filter(res => res.isSelected).length > 0)
  }));
  return (
    <div>
      <Header />

      <UserList updateUser={updateUser} users={users} />

      <VenueList venues={venues.filter((venue): venue is IVenue => !venue.avoid)} />

      <AvoidList venues={venues.filter(venue => venue.avoid) as IVenue[]} />

    </div>
  );
};

export default App;
