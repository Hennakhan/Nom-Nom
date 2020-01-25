import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLng, LatLngBounds } from 'leaflet';

type State = {

  zoom: number,
}

export default class MapComponent extends Component<{}, State> {
  state = {
    zoom: 13,
  }

  render() {
    const dummyfoodData = [{type: "chinese", servings: 4, location: {lat: 36.7, lon: -85.7}, address: "123 Second Street Columbia TN"},
                          {type: "chinese", servings: 4, location: {lat: 34.8, lon: -86.9}, address: "Not Specified, TN"}];

    const position = new LatLng(36.174465, -86.767960);

    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

      {dummyfoodData.map(food => {
        let pos = new LatLng(food.location.lat, food.location.lon);
        return <Marker position={pos}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      })}
      </Map>
    )
  }
}
