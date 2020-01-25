import React from 'react'; // we need this to make JSX compile
import { Food } from '../utils/DataService';

type ListFoodComponentProps = {
    food: Food[] | undefined;
}

export const ListFoodComponent = ({ food }: ListFoodComponentProps) => <div>
        Hello World!!
     
</div>

