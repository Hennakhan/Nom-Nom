import React from 'react';
import { Link } from 'react-router-dom';
import Autocomplete from 'react-google-autocomplete';
import { getLocation } from '../utils/LocationUtils';
import { addressFromCoords } from '../utils/GeocodeService'

type HomeState = {
  gettingUserLocation: boolean
}

type Coordinate = {
  Latitude: number,
  Longitude: number
}

class Home extends React.Component<{}, HomeState> {
  public readonly state: HomeState = {
    gettingUserLocation: false
  };
  selectedCoordinate: Coordinate = {
    Latitude: 0,
    Longitude: 0
  };

  async componentDidMount() {}

  placeSelected(place) {
    this.selectedCoordinate = {
      Latitude: place.geometry.location.lat() as number,
      Longitude: place.geometry.location.lng() as number
    }
  }

  async setCurrentLocation() {
    this.setState({
      gettingUserLocation: true
    })

    const userLocation = await getLocation();
    this.selectedCoordinate = {
      Latitude: userLocation.coords.latitude,
      Longitude: userLocation.coords.longitude
    }

    const address = await addressFromCoords(this.selectedCoordinate.Latitude, this.selectedCoordinate.Longitude);

    const addressForm = document.querySelector('#autocompleteForm input') as HTMLInputElement
    if (addressForm) {
      addressForm.value = address;
    }

    this.setState({
      gettingUserLocation: false
    })
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
      <section className="home">
        <aside>
          <h2 className="h1">Leftovers, crowdsourced</h2>
          <p className="h4">Donec convallis ante eu nibh pellentesque sagittis. Sed vitae nunc venenatis, pulvinar purus et, auctor nulla. Proin ac urna et justo laoreet accumsan vitae id enim. Etiam non ipsum dui. Nunc sit amet tortor vel odio eleifend commodo vel id mi.</p>
          <form id="autocompleteForm" action="find.html" method="get">
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
              <Link to="/find" className="button" type="submit">Find Food</Link>
            </div>
          </form>
        </aside>
      </section>
    )
  }
}

export default Home;
