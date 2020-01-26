import React from 'react';
import './App.css';
import {  getAllFood,  Food } from './utils/DataService';
import FoodForm from './components/FoodForm';


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
      <FoodForm></FoodForm>
    </div>
  }
}

export default App;
