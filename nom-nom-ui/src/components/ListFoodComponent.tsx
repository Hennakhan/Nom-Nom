import React from 'react'; // we need this to make JSX compile
import { Food } from '../utils/DataService';
import { FoodComponent } from './FoodView';
import { LatLng } from 'leaflet';
import { calculateDistance } from '../utils/LocationUtils';

type ListFoodComponentProps = {
    foodItems: Food[] | undefined;
    userCoords: LatLng | undefined;
}

export const ListFoodComponent = ({ foodItems, userCoords }: ListFoodComponentProps) => {
    let foodDistances: {foodItem: Food, distanceFromUser: number}[] = [];
    if (userCoords && foodItems) {
        foodItems.forEach(foodItem => {
            const distance = calculateDistance({ Latitude: userCoords?.lat, Longitude: userCoords?.lng }, foodItem.location);
            const distanceFromUser = Math.max(Math.round(distance * 10) / 10, 2.8);
            foodDistances.push({
                foodItem,
                distanceFromUser
            });
        });

        foodDistances.sort((a, b) => {
            if (a.distanceFromUser > b.distanceFromUser) return 1;
            else if (a.distanceFromUser < b.distanceFromUser) return -1;
            else return 0;
        });
    }

    if (foodItems !== undefined) {
        const foodItemsElements = foodDistances.map((foodDistance, index) => {
            return <FoodComponent food={foodDistance.foodItem} key={index} distanceFromUser={foodDistance.distanceFromUser} />
        });

        return <div className="list">{foodItemsElements}</div>
    } else {
        return <p>Loading...</p>;
    }

}