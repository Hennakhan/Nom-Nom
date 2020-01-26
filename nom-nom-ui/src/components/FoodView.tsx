import React from "react"; // we need this to make JSX compile
import { Food, deleteFoodById } from "../utils/DataService";

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


const formSubmitHandler = (id: string | undefined, event: any) => {
    console.log(`inside delete ${id}`);
    console.log(id);
   id && deleteFoodById(id);
   console.log('delete done');
   

};

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
        <button className="bottom right" onClick={(evt) => formSubmitHandler(food.id, evt)}>Claim</button>
      </div>
    </article>
  );
};
