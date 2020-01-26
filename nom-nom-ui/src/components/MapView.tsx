import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLng } from 'leaflet';
import { getAllFood, Food } from '../utils/DataService';

type State = {
  zoom: number,
  position: LatLng,
  food: Food[]
}

function getLocation(): Promise<Position> {
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
  state: State = {
    zoom: 13,
    position: new LatLng(36.1627, -86.7816), 
    food: []
  }

  async componentDidMount() {
    const userLocation = await getLocation();
    const position = new LatLng(userLocation.coords.latitude, userLocation.coords.longitude);
    this.setState({
      position
    });

    const foodData = await getAllFood();
    this.setState({
      food: foodData
    });
  }

  render() {
    //  const dummyfoodData = [{ type: "chinese", servings: 4, location: { lat: 36.7, lon: -85.7 }, address: "123 Second Street Columbia TN" },
    //  { type: "chinese", servings: 4, location: { lat: 34.8, lon: -86.9 }, address: "Not Specified, TN" }];

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

        {this.state.food.map(food => {
          let pos = new LatLng(food.location.Latitude, food.location.Longitude);
          return <Marker position={pos}>
            <Popup>
              {food.name}
            </Popup>
          </Marker>
        })}
      </Map>
    )
  }
}
