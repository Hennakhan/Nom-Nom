import React from 'react';
import './app.css';
import { getUserById, getAllFood, getAllUsers, getFoodById, postUser, postFood, Food, User, deleteFoodById } from './utils/DataService';
import { FoodComponent } from './components/FoodView';
import MapComponent from './components/MapView';
import { UserComponent } from './components/UserView';

import { isUndefined } from 'util';
import { ListFoodComponent } from './components/ListFoodComponent';


type AppState = {
  foodItems: Food[] | undefined;
}

class App extends React.Component<{}, AppState> {
  // Set Initial state
  public readonly state: AppState = {
    foodItems: undefined,
  }

  async componentDidMount() {
    const foodItems = await getAllFood();
    this.setState({ foodItems });
  }

  render() {
    return <div>
      <h2>Food List</h2>
      <ListFoodComponent foodItems={this.state.foodItems} />
    </div>
  }
}

export default App;
