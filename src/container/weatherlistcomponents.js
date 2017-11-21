import React from 'react';
import {connect} from 'react-redux';
import Chartgenerator from '../components/Chartgenerator'
import GoogleMaps from '../components/googleMaps'

class WeatherListComponents extends React.Component{

  citydata (weather) {
    const listoftemp = weather.list.map(weather => (weather.main.temp)*(9/5)-459.67);
    const listofpressure = weather.list.map(weather => weather.main.pressure);
    const listofhumidities = weather.list.map(weather => weather.main.humidity);
    const longitude = weather.city.coord.lon;
    const latitude = weather.city.coord.lat;
    console.log(listoftemp);
    return (
      <tr key={weather.city.id}>
        <td><GoogleMaps lng={longitude} lat={latitude}/></td>
        <td>
          <Chartgenerator data={listoftemp} color="orange" units="F"/>
        </td>
        <td>
          <Chartgenerator data={listofpressure} color="blue" units="hPa"/>
        </td>
        <td>
          <Chartgenerator data={listofhumidities} color="green" units="%"/>
        </td>
      </tr>);
  }
  render(){
      return(
        <table className="table table-hover">
          <thead>
            <tr>
              <th> City </th>
              <th> Temperature (F) </th>
              <th> Pressure (hPa) </th>
              <th> Humidity (%) </th>
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
