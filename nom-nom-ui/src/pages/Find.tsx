import React from 'react';
import { ListFoodComponent } from '../components/ListFoodComponent';
import { Food, getAllFood } from '../utils/DataService';
import { MapComponent } from 'react-leaflet';

type FindState = {
  foodList: Food[]
}

class Find extends React.Component<{}, FindState> {
 public readonly state: FindState = {
   foodList: []
 };

  async componentDidMount() {
    const foodList = await getAllFood();
    this.setState({ foodList });
  }

  render() {
    return (
      <section className="find">
        <aside>
          <form method="" action="">
            <div className="input">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
              </svg>
              <input type="text" placeholder="Address or zip code" />
              <button id="location" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M496 224h-50.88C431.61 143.66 368.34 80.39 288 66.88V16c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v50.88C143.66 80.39 80.39 143.66 66.88 224H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h50.88C80.39 368.34 143.66 431.61 224 445.12V496c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-50.88c80.34-13.51 143.61-76.78 157.12-157.12H496c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM256 384c-70.7 0-128-57.31-128-128s57.3-128 128-128 128 57.31 128 128-57.3 128-128 128zm0-216c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88z" />
                </svg>
              </button>
            </div>
            <div className="filters split">
              <button type="button" className="invert">Dairy</button>
              <button type="button" className="invert">Gluten</button>
              <button type="button" className="invert disabled">Nuts</button>
              <select className="inline right">
                <option disabled>Range</option>
                <option value="5">5 Miles</option>
                <option value="10" selected>10 Miles</option>
                <option value="15">15 Miles</option>
                <option value="20">20 Miles</option>
              </select>
            </div>
          </form>
        </aside>
        <hr />
        <ListFoodComponent foodItems={this.state.foodList}></ListFoodComponent>
        {/* <article>
          <div className="split">
            <h2>Lentil soup (3)</h2>
            <h3 className="right">0.3mi</h3>
          </div>
          <div className="split">
            <span>
              <h4>(192) 8374-650</h4>
              <h5>169 Avenue Street, Murfreesboro TN 37128</h5>
            </span>
            <button className="bottom right">Claim</button>
          </div>
        </article>
        <article>
          <div className="split">
            <h2>Pizza (2)</h2>
            <h3 className="right">0.5mi</h3>
          </div>
          <div className="split">
            <span>
              <h4>(564) 738-391</h4>
              <h5>961 Street Avenue, Murfreesboro TN 37128</h5>
            </span>
            <button className="bottom right">Claim</button>
          </div>
        </article> */}
      </section>
    )
  }
}

export default Find;
