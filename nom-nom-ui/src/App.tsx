import React from 'react';
import './App.css';
import { getUserById, getAllFood, getAllUsers, getFoodById, postUser, postFood, Food, User } from './utils/DataService';
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

    this.setState({
      foodItems
    });

    console.log(foodItems);
  }

  render() {
    return <ListFoodComponent foodItems={this.state.foodItems}></ListFoodComponent>
  }
}

export default App;
