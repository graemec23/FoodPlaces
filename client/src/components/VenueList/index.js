import React, { Component } from 'react';
import { connect }  from 'react-redux';

import { getVenues } from '../../actions';
class VenueList extends Component {

  componentWillMount() {
    this.props.getVenues();
  }

  filterVenues(venues, users){
    return venues.filter(venue => {
      const {food: venueFood, drinks: venueDrinks} = venue;
      return users.reduce((filteredArray, user) => {

        const {name, wont_eat, drinks: userDrinks} = user;
        const filteredFood = venueFood.filter(food => !wont_eat.includes(food)).length === 0;
        const filteredDrinks = venueDrinks.filter(drink => userDrinks.includes(drink)).length == 0;

        if(filteredFood || filteredDrinks) {
            return filteredArray;
        }

      }, []);
    });
  }



    // state = {  }
  render() {

    const selectedUsers = this.props.users.filter(res => res.isSelected);
    const filteredVenues = this.filterVenues(this.props.venues, selectedUsers);

    console.log('filtered', this.filterVenues(this.props.venues, selectedUsers));
    // const filteredVenues = this.filterVenues(this.props.venues, selectedUsers);

      return (
      <div className="c-venue-list">
          {filteredVenues.map(venue => (
              <div key={venue.name} className="c-venue-list__item">
                  <div>
                      {venue.name}
                  </div>
              </div>
          ))}
      </div>
      );
  }
}

const mapStateToProps = ({venues, users}) => {
    return {venues, users}
};

export default connect(mapStateToProps, {
    getVenues,
    // getUsers
})(VenueList);
