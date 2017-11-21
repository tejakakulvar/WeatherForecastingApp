import React from 'react';
import {connect} from 'react-redux';
import chartgenerator from '../components/chartgenerator'

class WeatherListComponents extends React.Component{

  citydata (weather) {
    return (
      <div>
      <chartgenerator />
      </div>
    );
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
