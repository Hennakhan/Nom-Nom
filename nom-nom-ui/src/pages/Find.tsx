import React from 'react';

type FindState = {}

class Find extends React.Component<{}, FindState> {
 public readonly state: FindState = {};

  async componentDidMount() {}

  render() {
    return <p>Hello From Find</p>
  }
}

export default Find;
