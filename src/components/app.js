import React, { Component } from 'react';
import WeatherListComponents from '../container/weatherlistcomponents'

import SearchBar from '../container/searchbar'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherListComponents />
      </div>
    );
  }
}
