import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/common/Header';
import UserList from './components/UserList';
import VenueList from './components/VenueList';
import AvoidList from './components/AvoidList';

import { getVenues, getUsers, updateUser } from './actions';

class App extends Component {

  UNSAFE_componentWillMount() {
    this.props.getVenues();

    this.props.getUsers();
  }

  render() {
    return (
      <div className="">
        <Header />

        <div>
          <h3>Users</h3>
          <UserList updateUser={this.props.updateUser} users={this.props.users} />
        </div>

        <div>
          <VenueList venues={this.props.venues.filter(venue => !venue.avoid)} />
        </div>

        <div>
          <AvoidList venues={this.props.venues.filter(venue => venue.avoid)} />
        </div>

      </div>
    );
  }
}

const mapStateToProps = ({ venues, users }) => ({
  venues: venues.filter(() => users.filter(res => res.isSelected).length > 0),
  users
});


export default connect(mapStateToProps, {
  getVenues,
  getUsers,
  updateUser
})(App);
// export default App;
