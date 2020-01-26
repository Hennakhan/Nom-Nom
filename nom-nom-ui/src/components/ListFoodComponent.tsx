import React from 'react'; // we need this to make JSX compile
import { Food } from '../utils/DataService';
import { FoodComponent } from './FoodView';

type ListFoodComponentProps = {
    foodItems: Food[] | undefined;
}

export const ListFoodComponent = ({ foodItems }: ListFoodComponentProps) => {

    if (foodItems !== undefined) {
        const foodItemsElements = foodItems.map((food, index) => {
           return <FoodComponent food={food} key={index} />
        });

        return <div>{foodItemsElements}</div>
    } else {
        return <p>Loading...</p>;
    }

}