import React from "react"; // we need this to make JSX compile
import { Food } from "../utils/DataService";

type FoodProps = {
  food: Food;
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

export const FoodComponent = ({ food }: FoodProps) => {
  return (
    <article>
      <div className="split">
        <h2>
          {food.type} ({food.servings})
        </h2>
        <h3 className="right">0.5mi</h3>
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
