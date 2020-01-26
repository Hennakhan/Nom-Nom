import React from 'react';
import './App.css';
import { getUserById, getAllFood, getAllUsers, getFoodById, postUser, postFood, Food, User, deleteFoodById } from './utils/DataService';
import { FoodComponent } from './components/FoodView';
import { UserComponent } from './components/UserView';

import { isUndefined } from 'util';


type AppState = {
  foodItem: Food | undefined;
  userItem: User | undefined;
}

class App extends React.Component<{}, AppState> {
  // Set Initial state
  public readonly state: AppState = {
    foodItem: undefined,
    userItem: undefined
  }

  async componentDidMount() {

    // let foodData = {type: "chinese",
    //   servings: "4",
    //   location: {Latitude: 20,
    //     Longitude: 30},
    //   address: "123 Second Street Columbia TN",
    //   prepDate: new Date(),
    //   allergens: [],
    //   name:"karuna",
    //   number:"111-11-1111",
    //   email:"test@test.com",
    //   id: undefined
    // };

    //   await postFood(foodData);

    
    const foodById = await getFoodById('RVvnUn396zVVHzFrZxOu');
     console.table(foodById);
    //console.log(foodById);
    // const userById = await getUserById('PNzJhGWDcyMeU2CZPUMn');
    // //console.table(userById);
    // console.log(userById);
    // this.setState({
    //   foodItem: foodById,
    //   userItem: undefined
    // });

    await deleteFoodById(foodById.id as string);

  }

  render() {
    // const foodItemElement = this.state.foodItem ? <FoodComponent food={this.state.foodItem}></FoodComponent> : 'Loading...';
  
    return <div>
      <h1>Food Items:</h1>
      {/* {foodItemElement} */}
      {/* <h1>Guest Form:</h1>
      <GuestForm></GuestForm> */}
    </div>;
  }
}

export default App;
