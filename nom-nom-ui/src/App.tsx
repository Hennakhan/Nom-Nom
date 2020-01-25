import React from 'react';
import './App.css';
import { getHostById } from './utils/DataService';

class App extends React.Component {

  async componentDidMount() {
    const host = await getHostById('OdpoxsDTa8kQodxse7N2');
    console.table(host);
  }

  render() {
    return <h1>Hello World</h1>;
  }
}

export default App;
