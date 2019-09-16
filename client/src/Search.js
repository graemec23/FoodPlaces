// @flow
import React, { Component } from 'react';

type Props = {
  places: Array<Place>
}

class Search extends Component<Props> {
  // state = {
  //   searchTerm: ''
  // };

  render() {
    return (
      <div>Hello {this.props.places}</div>
    );
  }
}

export default Search;
