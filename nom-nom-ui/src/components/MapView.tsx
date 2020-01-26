import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLng, LatLngBounds, latLng } from 'leaflet';

type State = {
  zoom: number,
  position: LatLng,
}

export function getLocation(): Promise<Position> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      console.log("Geolocation is not supported by this browser.");
      reject("Geolocation is not supported by this browser.");
    }
  });
}

export default class MapComponent extends Component<{}, State> {
  state = {
    zoom: 13,
    position: new LatLng(36.1627, -86.7816)
  }


  async componentDidMount() {
    const userLocation = await getLocation();
    const position = new LatLng(userLocation.coords.latitude, userLocation.coords.longitude);
    this.setState({
      position
    });
  }

  render() {
    return (
      <Map center={this.state.position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={this.state.position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
  }
}
