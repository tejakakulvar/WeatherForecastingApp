import React from 'react';
import {connect} from 'react-redux';

class WeatherListComponents extends React.Component{
  citydata (weather) {
    return (
      <tr key={weather.city.id}>
      <td>{weather.city.name}</td>
      </tr>);
  }
  render(){
      return(
        <table className="table table-hover">
          <thead>
            <tr>
              <td> City </td>
              <td> Temperature </td>
              <td> Pressure </td>
              <td> Humidity </td>
            </tr>
          </thead>
          <tbody>
              {this.props.weather.map(this.citydata)}
          </tbody>
        </table>
      );
    }

  }


function mapStateToProps(state) {
  return {weather: state.weatherdata};
}
export default connect(mapStateToProps)(WeatherListComponents);
