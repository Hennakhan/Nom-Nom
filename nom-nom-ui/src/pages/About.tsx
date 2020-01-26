import React from 'react';

type AboutState = {}

class About extends React.Component<{}, AboutState> {
 public readonly state: AboutState = {};

  async componentDidMount() {}

  render() {
    return <p>Hello From About</p>
  }
}

export default About;