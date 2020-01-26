import React from 'react'; // we need this to make JSX compile
import { Food } from '../utils/DataService';
import { FoodComponent } from './FoodView';
import { LatLng } from 'leaflet';

type ListFoodComponentProps = {
    foodItems: Food[] | undefined;
    userCoords: LatLng | undefined;
}

export const ListFoodComponent = ({ foodItems, userCoords }: ListFoodComponentProps) => {

    if (foodItems !== undefined) {
        const foodItemsElements = foodItems.map((food, index) => {
           return <FoodComponent food={food} key={index} userCoords={userCoords} />
        });

        return <div>{foodItemsElements}</div>
    } else {
        return <p>Loading...</p>;
    }

}