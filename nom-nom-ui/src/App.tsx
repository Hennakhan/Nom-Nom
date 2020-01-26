import React from 'react';
import './App.css';
import { getUserById, getAllFood, getAllUsers, getFoodById, postUser, postFood, Food, User } from './utils/DataService';
import { FoodComponent } from './components/FoodView';
import MapComponent from './components/MapView';
import { UserComponent } from './components/UserView';
import { isUndefined } from 'util';
import { ListFoodComponent } from './components/ListFoodComponent';
import { TestComponent } from './components/TestComponent';

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
      <TestComponent></TestComponent>
    </div>
  }
}

export default App;
