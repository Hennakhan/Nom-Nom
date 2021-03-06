import React from 'react';
import { ListFoodComponent } from '../components/ListFoodComponent';
import { Food, getAllFood } from '../utils/DataService';
import { NomMapComponent } from '../components/MapView';
import { getLocation } from '../utils/LocationUtils';
import { LatLng } from 'leaflet';
import { addressFromCoords } from '../utils/GeocodeService';
import Autocomplete from 'react-google-autocomplete';

type FindState = {
  foodList: Food[]
  userPosition: LatLng
  gettingUserLocation: boolean
  mapZoom: number
}

class Find extends React.Component<{}, FindState> {
  public readonly state: FindState = {
    foodList: [],
    userPosition: new LatLng(0, 0),
    gettingUserLocation: false,
    mapZoom: 13
  };

  async componentDidMount() {
    const userLocation = await getLocation();
    const userPosition = new LatLng(userLocation.coords.latitude, userLocation.coords.longitude);
    this.setState({
      userPosition
    });

    const foodList = await getAllFood();
    this.setState({ foodList });
  }

  mapZoomChanged(e) {
    let { name, value } = e.target;
    this.setState({
      mapZoom: value
    });
  }

  placeSelected(place) {
    // Temporarily set this to something else so that the map will re-center if you have moved it but not set the state to something else
    this.setState({
      userPosition: new LatLng(0, 0)
    });

    this.setState({
      gettingUserLocation: false,
      userPosition: new LatLng(place.geometry.location.lat(), place.geometry.location.lng())
    })
  }

  async setCurrentLocation() {
    this.setState({
      gettingUserLocation: true
    })

    const userLocation = await getLocation();
    const address = await addressFromCoords(userLocation.coords.latitude, userLocation.coords.longitude);

    const addressForm = document.querySelector('#autocompleteForm input') as HTMLInputElement
    if (addressForm) {
      addressForm.value = address;
    }

    // Temporarily set this to something else so that the map will re-center if you have moved it but not set the state to something else
    this.setState({
      userPosition: new LatLng(0, 0)
    });

    this.setState({
      gettingUserLocation: false,
      userPosition: new LatLng(userLocation.coords.latitude, userLocation.coords.longitude)
    });
  }

  render() {
    let locationButtonIcon;
    if (this.state.gettingUserLocation) {
      locationButtonIcon = <i className="fas fa-circle-notch fa-spin"></i>
    } else {
      locationButtonIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M496 224h-50.88C431.61 143.66 368.34 80.39 288 66.88V16c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v50.88C143.66 80.39 80.39 143.66 66.88 224H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h50.88C80.39 368.34 143.66 431.61 224 445.12V496c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-50.88c80.34-13.51 143.61-76.78 157.12-157.12H496c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM256 384c-70.7 0-128-57.31-128-128s57.3-128 128-128 128 57.31 128 128-57.3 128-128 128zm0-216c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88z" />
      </svg>
    }

    return (
      <section className="find">
        <aside>
          <form id="autocompleteForm" method="" action="">
            <div className="input">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
              </svg>
              <Autocomplete
                  onPlaceSelected={(place) => {
                    this.placeSelected(place);
                  }}
                  types={['address']}
                  componentRestrictions={{country: "us"}}
              />
              <button id="location" type="button" onClick={() => this.setCurrentLocation()}>
                {locationButtonIcon}
              </button>
            </div>
            <div className="filters split">
              <button type="button" className="invert">Dairy</button>
              <button type="button" className="invert">Gluten</button>
              <button type="button" className="invert disabled">Nuts</button>
              <select className="inline right" defaultValue="5" onChange={this.mapZoomChanged.bind(this)}>
                <option disabled>Range</option>
                <option value="13">5 Miles</option>
                <option value="12">10 Miles</option>
                <option value="11">15 Miles</option>
                <option value="10">20 Miles</option>
              </select>
            </div>
          </form>
        </aside>
        <hr />
        <NomMapComponent food={this.state.foodList} position={this.state.userPosition} zoom={this.state.mapZoom}></NomMapComponent>
        <ListFoodComponent foodItems={this.state.foodList} userCoords={this.state.userPosition}></ListFoodComponent>
      </section>
    )
  }
}

export default Find;
