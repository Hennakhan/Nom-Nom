import React from 'react';
import FoodForm from '../components/FoodForm';

type GiveState = {}

class Give extends React.Component<{}, GiveState> {
 public readonly state: GiveState = {};

  async componentDidMount() {}

  render() {
    return (
      <FoodForm />
      // <section className="give">
      //   <article>
      //     <form method="" action="">
      //       <h3>User Information</h3>
      //       <fieldset>
      //         <div className="split">
      //           <input type="text" placeholder="First Name" />
      //           <input type="text" placeholder="Last Name" />
      //         </div>
      //         <div className="split">
      //           <input type="text" placeholder="Email Address" />
      //           <input type="text" placeholder="Phone Number" />
      //         </div>
      //       </fieldset>
      //       <h3>Food Information</h3>
      //       <fieldset>
      //         <div className="split">
      //           <input type="text" placeholder="Food Type" />
      //           <select>
      //             <option disabled selected>Servings</option>
      //             <option value="1">1</option>
      //             <option value="2">2</option>
      //             <option value="3">3</option>
      //             <option value="4">4</option>
      //             <option value="5">5</option>
      //           </select>
      //         </div>
      //         <input type="text" placeholder="Email Address" />
      //         <textarea rows={2} placeholder="Address"></textarea>
      //         <div className="split">
      //           <label>
      //             <input type="checkbox" />
      //             <span>Dairy</span>
      //           </label>
      //           <label>
      //             <input type="checkbox" />
      //             <span>Gluten</span>
      //           </label>
      //           <label>
      //             <input type="checkbox" />
      //             <span>Nuts</span>
      //           </label>
      //         </div>
      //       </fieldset>
      //       <button type="submit">Post</button>
      //     </form>
      //   </article>
      // </section>
    )
  }
}

export default Give;
