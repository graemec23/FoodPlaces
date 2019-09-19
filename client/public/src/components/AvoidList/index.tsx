import React, { FunctionComponent } from 'react';
import { css } from 'emotion'

import { IVenue } from "../../interface"

interface IVenueList {
  venues: IVenue[]
}

const AvoidList: FunctionComponent<IVenueList> = ({ venues }) => (
  <div className={css`padding: 16px;`}>
    <div>
      {venues.length >= 1 && <h3>Places to avoid:</h3>}
      <div>
        {
          venues
            .map(venue => (
              <div
                key={venue.name}
                className={css`margin-bottom:16px;`}
              >
                {venue.name}
                <div className={css`margin:8px 0 0 16px;`}>
                  {
                    venue.avoid && Object.entries(venue.avoid)
                      .map(([user, { avoidFood, avoidDrinks }]) => (
                        <div key={user}>
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

export default AvoidList;
