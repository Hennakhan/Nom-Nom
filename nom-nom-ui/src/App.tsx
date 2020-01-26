import React from 'react';
import './App.css';
import { getAllFood, Food } from './utils/DataService';
import { ListFoodComponent } from './components/ListFoodComponent';
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
      <FoodForm></FoodForm>
      <h2>Food List</h2>
      <ListFoodComponent foodItems={this.state.foodItems} />
    </div>
  }
}

export default App;
