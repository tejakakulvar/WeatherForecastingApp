import React from 'react';
import {connect} from 'react-redux';
import chartgenerator from '../components/chartgenerator'

class WeatherListComponents extends React.Component{

  citydata (weather) {
    const listoftemp = weather.list.map(weather => weather.main.temp);
    console.log(listoftemp);
    return (
      <tr key={weather.city.id}>
      <td>{weather.city.name}</td>
      <td> <h1> hi </h1> </td>
      <td>
        <chartgenerator />
      </td>
      </tr>);
  }
  render(){
      return(
        <table className="table table-hover">
          <thead>
            <tr>
              <td><b> City </b></td>
              <td><b> Temperature </b></td>
              <td><b> Pressure </b></td>
              <td><b> Humidity </b></td>
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
