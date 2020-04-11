import React from 'react';
import './styles/app.css';
import { getAllFood, Food } from './utils/DataService';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';

import Home from './pages/Home';
import Give from './pages/Give';
import Find from './pages/Find';
import About from './pages/About';
import Camera from './pages/Camera';

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
    return (
      <Router>
        <SiteHeader />
          <Switch>
            <Route path="/give">
              <Give />
            </Route>
            <Route path="/find">
              <Find />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/camera">
              <Camera />
            </Route>
          </Switch>
        <SiteFooter />
      </Router>
    );
  }
}

export default App;
