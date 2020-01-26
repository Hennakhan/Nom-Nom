import Geocode from 'react-geocode';

import dotEnv from 'dotenv';

// Import all env variables
dotEnv.config();

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey('GEOCODE_KEY');
 
// set response language. Defaults to english.
Geocode.setLanguage("en");
 
// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("es");
 
// Enable or disable logs. Its optional.
Geocode.enableDebug();
 
// Get latidude & longitude from address.
Geocode.fromAddress("Eiffel Tower").then(
  response => {
    const { lat, lng } = response.results[0].geometry.location;
    console.log(lat, lng);
  },
  error => {
    console.error(error);
  }
);


async function coordsFromAddress(address: string) {
    const response = await Geocode.fromAddress(address);
    const { lat, lng } = response.results[0].geometry.location;
    console.log(lat, lng);
}

export {
    coordsFromAddress
}