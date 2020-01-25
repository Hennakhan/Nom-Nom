import React from 'react'; // we need this to make JSX compile
import { Food } from '../utils/DataService';

type FoodProps = {
    food: Food
}

type AllergenProps = {
    allergens: string[];
}

const Allergens = ({ allergens }: AllergenProps) =>  {
    const allergensList = allergens.map((allergenString) => <li>{allergenString}</li>);
    return <ul>{allergensList}</ul>;
}

export const FoodComponent = ({ food }: FoodProps) => <div>
    <ul>
        <li>Type: {food.type}</li>
        <li>Servings: {food.servings}</li>
        <li>address: {food.address}</li>
        <li>
            <Allergens allergens={food.allergens}></Allergens>
        </li>
    </ul>
</div>