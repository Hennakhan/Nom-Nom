import React from 'react';
import FoodForm from '../components/FoodForm';

type GiveState = {}

class Give extends React.Component<{}, GiveState> {
 public readonly state: GiveState = {};

  async componentDidMount() {}

  render() {
    return (
      <FoodForm />
    )
  }
}

export default Give;
