import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 3.1390,
      lng: 101.6869
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '80%', width: '85%', marginTop: '40px' }} className="map">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
