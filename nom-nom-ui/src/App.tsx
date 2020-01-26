import React from 'react';
import './styles/app.css';
import { getAllFood, Food } from './utils/DataService';
import MapComponent from './components/MapView';
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
      <MapComponent />
    </div>
  }
}
export default App;