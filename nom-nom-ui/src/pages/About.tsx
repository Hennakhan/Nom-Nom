import React from 'react';

type AboutState = {}

class About extends React.Component<{}, AboutState> {
 public readonly state: AboutState = {};

  async componentDidMount() {}

  render() {
    return (
      <section className="about">
        <article>
          <h2>Nom Nom</h2>
          <p>Nom Nom is aimed to connect People who would like to give away foodand those who are in need of food. Nom Nom solves two major problems &mdash; prevent food wastage and provide food for the needy.</p>
        </article>
      </section>
    )
  }
}

export default About;
