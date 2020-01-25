import React from 'react';
import './App.css';
import { getUserById, getAllFood, getAllUsers, getFoodById, postUser, postFood, Food, User } from './utils/DataService';
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

    let foodData = {type: "chinese",
      servings: "4",
      location: {Latitude: 20,
        Longitude: 30},
      address: "123 Second Street Columbia TN",
      prepDate: new Date(),
      allergens: [],
      name:"karuna",
      number:"111-11-1111",
      email:"test@test.com"
    };

      await postFood(foodData);

    let userData = {name: "Heena", number:"6154561234", email:"test@test.com"};
    await postUser(userData);

    const foodById = await getFoodById('5kAI1oX8SJjnXVOz3x2i');
    // console.table(foodById);
    console.log(foodById);
    // const userById = await getUserById('PNzJhGWDcyMeU2CZPUMn');
    // //console.table(userById);
    // console.log(userById);
    this.setState({
      foodItem: foodById,
      userItem: undefined
    });
  }

  render() {
    const foodItemElement = this.state.foodItem ? <FoodComponent food={this.state.foodItem}></FoodComponent> : 'Loading...';
  //  const userItemElement = this.state.userItem ? <UserComponent user={this.state.userItem}></UserComponent> : 'Loading...';

    return <div>
      <h1>Food Items:</h1>
      {foodItemElement}
      {/* <h1>User Items:</h1>
      {userItemElement} */}
    </div>;
  }
}

export default App;
