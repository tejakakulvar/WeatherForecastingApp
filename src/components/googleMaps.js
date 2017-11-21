import React from 'react';

class GoogleMaps extends React.Component{

  componentDidMount(){
     new google.maps.Map(this.refs.map,{
       zoom: 12,
       center: {
         lat: this.props.lat,
         lng: this.props.lng
       }
     });
  }
  render(){
    console.log(this.props.lng);
    return(
      <div ref="map" />
    );
  }
}

export default GoogleMaps;
