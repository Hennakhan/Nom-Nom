import React from 'react';

type GiveState = {}

class Give extends React.Component<{}, GiveState> {
 public readonly state: GiveState = {};

  async componentDidMount() {}

  render() {
    return <p>Hello From Give</p>
  }
}

export default Give;