import React from 'react';

const AvoidList = (props) => (<div className="App">

  <div>
    <h3>Places to avoid</h3>
    <div>
      {
        props.venues
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
)

export default AvoidList;
