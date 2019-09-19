import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch, useStore } from "react-redux";
import Header from "./components/common/Header";
import UserList from "./components/UserList";
import VenueList from "./components/VenueList";
import AvoidList from "./components/AvoidList";
import {
  GET_USERS,
  UPDATE_USER,
  GET_VENUES,
  UPDATE_VENUES,
} from "./actions/types";

const App = () => {
  const dispatch = useDispatch();
  const store = useStore();

  useEffect(() => {
    dispatch({ type: GET_VENUES });
    dispatch({ type: GET_USERS });
  }, []);

  const updateUser = useCallback(
    (user) => {
      dispatch({ type: UPDATE_USER, payload: user });
      const { users } = store.getState();
      dispatch({ type: UPDATE_VENUES, payload: users });
    },
    [dispatch],
  );

  const { users, venues } = useSelector((state) => ({
    users: state.users,
    venues: state.venues.filter(() => state.users.filter((res) => res.isSelected).length > 0),
  }));
  return (
    <div className="">
      <Header />

      <div>
        <h3>Users</h3>
        <UserList updateUser={updateUser} users={users} />
      </div>

      <div>
        <VenueList venues={venues.filter((venue) => !venue.avoid)} />
      </div>

      <div>
        <AvoidList venues={venues.filter((venue) => venue.avoid)} />
      </div>

    </div>
  );
};
// class App extends Component {

export default App;
