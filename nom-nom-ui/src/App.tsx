import React from 'react';
import './App.css';
import { getUserById, getAllFood, getAllUsers, getFoodById, postUser, postFood } from './utils/DataService';

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

    let userData = {name: "Heena", number:"6154561234", email:"test@test.com"};
    await postUser(userData);
    
    
    
    let foodData = {type: "chinese",
      servings: "4",
      location: {Latitude: 20,
        Longitude: 30},
      address: "123 Second Street Columbia TN",
      prepDate: new Date(),
      allergens: []
    };

      await postFood(foodData);

  }

  render() {
    return <h1>Hello World</h1>;
  }
}

export default App;
