import React, { Component } from 'react';
import { connect } from 'react-redux';
// import set from 'lodash/set';
// import omit from 'lodash/omit';
import { getVenues } from '../../actions';

class AvoidList extends Component {

  /**
   *
   * Updates the venues list given the selected users
   *
   */
  getAvailableVenues(users = [], venues = []) {
    // creates a new venues list
    return venues.map(venue => {

      const { food, drinks: venueDrinks } = venue;

      // checks if this venue should be avoided
      const avoid = users.reduce((avoid, { name: user, wont_eat, drinks: userDrinks }) => {

        const avoidFood = food.filter(meal => !wont_eat.includes(meal)).length === 0;
        const avoidDrinks = venueDrinks.filter(drink => userDrinks.includes(drink)).length === 0;

        if (avoidFood || avoidDrinks) {
          return {
            ...avoid,
            ...set({}, user, { avoidFood, avoidDrinks })
          };
        }

        return avoid;

      }, {});

      // only includes the 'avoid' object if the venue should be avoided
      // which makes it simple for the UI to filter the venues
      if (Object.keys(avoid).length) {
        venue = {
          ...venue,
          avoid
        };
      } else {
        venue = omit(venue, 'avoid');
      }

      return venue;
    });

  }

  /**
   *
   * Returns only the selected users
   *
   */
  getSelectedUsers(users = this.props.users) {
    return users.filter(user => user.isSelected);
  }


  /**
   *
   * Returns an array with the valid and invalid venues
   *
   */
  getVenues(venues = this.props.venues, users = this.getSelectedUsers()) {
    return [
      venues
        .filter(venues => users.length > 0)
        .filter(venue => !venue.avoid),
      venues
        .filter(venue => !!venue.avoid),
    ];
  }

  /**
   *
   * Callback for the toggleUser method
   * updates the valid and invalid venues
   *
   */
  updateVenuesList() {

    const { venues = [] } = this.props;

    this.setState({
      venues: this.getAvailableVenues(this.getSelectedUsers(), venues)
    });

  }

  /**
   *
   * Toggles the given user 'isSelected'
   *
   */


  render() {

    // const { users=[] } = this.state;
    const [validVenues, invalidVenues] = this.getVenues();

    return (
      <div className="App">

        <div>
          <h3>Places to avoid</h3>
          <div>
            {
              invalidVenues
                .map(venue => (
                  <div
                    key={venue.name}
                    className="invalid-venues"
                  >
                    {venue.name}
                    <div className="avoid">
                      {
                        Object.entries(venue.avoid).map(([user, { avoidFood, avoidDrinks }], index) => (
                          <div
                            key={index}
                          >
                            There is nothing for {user} to
                            {avoidFood && ' eat '}
                            {avoidFood && avoidDrinks && 'or'}
                            {avoidDrinks && ' drink'}
                          </div>
                        ))
                      }
                    </div>
                  </div>
                ))
            }
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = ({ venues, users }) => {
  return { venues, users }
};

export default connect(mapStateToProps, {
  getVenues,
  // getUsers
})(AvoidList);
