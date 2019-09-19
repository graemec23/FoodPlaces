import React, { FunctionComponent } from "react";
import { css } from "emotion";
import { IVenue } from "../../interface";

interface IVenueList {
  venues: IVenue[];
}

const VenueList: FunctionComponent<IVenueList> = ({ venues }) => (
  <div className={css`
  padding: 16px;`}>
    {venues.length >= 1 && <h3>Places to Go:</h3>}
    {venues.map(venue => (
      <div key={venue.name} className={css`
      margin-bottom: 16px;`}>
        {venue.name}
      </div>
    ))}
  </div>
);


export default VenueList;
