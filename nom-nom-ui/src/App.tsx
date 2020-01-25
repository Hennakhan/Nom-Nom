import React from 'react';
import './App.css';
import { getUserById, getAllFood, getAllUsers, getFoodById, postUser, postFood, Food } from './utils/DataService';
import { FoodComponent } from './components/FoodView';

type AppState = {
  foodItem: Food | undefined;
}

class App extends React.Component<{}, AppState> {
  // Set Initial state
  public readonly state: AppState = {
    foodItem: undefined
  }

  async componentDidMount() {
    const foodById = await getFoodById('5kAI1oX8SJjnXVOz3x2i');
    console.table(foodById);
    this.setState({
      foodItem: foodById
    });
  }

  render() {
    const foodItemElement = this.state.foodItem ? <FoodComponent food={this.state.foodItem}></FoodComponent> : 'Loading...';

    return <div>
      <h1>Food Items:</h1>
      {foodItemElement}
    </div>;
  }
}

export default App;
