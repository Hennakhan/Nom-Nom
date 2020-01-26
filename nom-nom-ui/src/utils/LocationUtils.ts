type Coordinate = {
    Latitude: number,
    Longitude: number
}

function degreesToRadians(degrees){
  var pi = Math.PI;
  return degrees * (pi/180);
}

export function calculateDistance(coordsA: Coordinate, coordsB: Coordinate) {
    // Calculation and code from https://www.movable-type.co.uk/scripts/latlong.html
    var R = 3958.8; // miles
    var φ1 = degreesToRadians(coordsA.Latitude);
    var φ2 = degreesToRadians(coordsB.Latitude);
    var Δφ = degreesToRadians(coordsB.Latitude-coordsA.Latitude);
    var Δλ = degreesToRadians(coordsB.Longitude-coordsA.Longitude);
    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d;
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