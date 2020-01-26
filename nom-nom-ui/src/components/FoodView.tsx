import React from "react"; // we need this to make JSX compile
import { Food } from "../utils/DataService";
import { calculateDistance } from "../utils/LocationUtils"
import { LatLng } from "leaflet";

type FoodProps = {
  food: Food;
  userCoords: LatLng | undefined;
};

// type AllergenProps = {
//   allergens: string[];
// };

// const Allergens = ({ allergens }: AllergenProps) => {
//   const allergensList = allergens.map((allergenString, index) => (
//     <li key={index}>{allergenString}</li>
//   ));
//   return <ul>{allergensList}</ul>;
// };

export const FoodComponent = ({ food, userCoords }: FoodProps) => {
  let distanceFromUser = 'N/A';
  if (userCoords) {
    const distance = calculateDistance({ Latitude: userCoords?.lat, Longitude: userCoords?.lng }, food.location);
    distanceFromUser = Math.max( Math.round(distance * 10) / 10, 2.8 ).toString();
  }

  return (
    <article>
      <div className="split">
        <h2>
          {food.type} ({food.servings})
        </h2>
      <h3 className="right">{distanceFromUser}mi</h3>
      </div>
      <div className="split">
        <span>
          <h4>{food.number}</h4>
          <h5>{food.address}</h5>
        </span>
        <button className="bottom right">Claim</button>
      </div>
    </article>
  );
};
