import React from 'react';

const VenueList = (props) => (
  <div className="c-venue-list">
    <h3>Places to Go</h3>
    {props.venues.map(venue => (
      <div key={venue.name} className="c-venue-list__item">
        {venue.name}
      </div>
    ))}
  </div>
)

export default VenueList;
