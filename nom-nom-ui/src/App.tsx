import React from 'react';
import './App.css';
import { getUserById, getAllFood, getAllUsers, getFoodById } from './utils/DataService';

class App extends React.Component {

  async componentDidMount() {
    const host = await getUserById('cw25NFiW1vNLtFzhmp0k');
    console.table(host);
    
    const foods = await getAllFood();
    console.table(foods);

    const users = await getAllUsers();
    console.table(users);

    const foodById = await getFoodById('5kAI1oX8SJjnXVOz3x2i');
    console.table(foodById);

  }

  render() {
    return <h1>Hello World</h1>;
  }
}

export default App;
