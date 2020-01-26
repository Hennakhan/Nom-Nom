import Geocode from 'react-geocode';

import dotEnv from 'dotenv';

// Import all env variables
dotEnv.config();

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey('AIzaSyAyu2dqRS42qIQZxSmsh_0a1on4Csxex6M');

// set response language. Defaults to english.
Geocode.setLanguage("en");

// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("es");

// Enable or disable logs. Its optional.
Geocode.enableDebug();


async function coordsFromAddress(address: string) {
    const response = await Geocode.fromAddress(address);
    const { lat, lng } = response.results[0].geometry.location;
    return [lat, lng];
}

async function addressFromCoords(lat: number, lng: number) {
    const response = await Geocode.fromLatLng(lat, lng)
    console.log(response);
    const address = response.results[0].formatted_address
    return address;
}

export {
    coordsFromAddress,
    addressFromCoords
}