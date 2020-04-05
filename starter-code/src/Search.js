import React, { Component } from 'react';
import foods from './foods.json';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      foods: foods,
      filteredFoods: foods,
    };
  }

  render() {
    return <div></div>;
  }
}

export default Search;
