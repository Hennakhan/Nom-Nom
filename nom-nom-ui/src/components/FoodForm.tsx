import React from 'react';
import { Food, postFood } from '../utils/DataService';
import Autocomplete from 'react-google-autocomplete';


// Followed this guide to create form: https://medium.com/@agoiabeladeyemi/the-complete-guide-to-forms-in-react-d2ba93f32825

export interface TestFood {
  type: string;
  servings: string;
  location: {
    Latitude: number;
    Longitude: number;
  };
  address: string;
  prepDate: Date;
  allergens: string[];
  name: string;
  number: string;
  email: string;
}

type FormContainerState = {
  formControls: any;
  submitted: boolean;
};

const formControls = {
  type: {
    value: ""
  },
  servings: {
    value: ""
  },
  dairy: {
    value: false
  },
  gluten: {
    value: false
  },
  nuts: {
    value: false
  },
  prepDate: {
    value: ""
  },
  firstName: {
    value: ""
  },
  lastName: {
    value: ""
  },
  number: {
    value: ""
  },
  address: {
    value: ""
  },
  email: {
    value: ""
  }
}

class FoodForm extends React.Component<{}, FormContainerState> {
  selectedPlace: any;

  constructor(props: any) {
    super(props);
    this.state = {
      formControls: formControls,
      submitted: false
    }
  }


  checkChangeHandler = (event: any) => {
    const name = event.target.name;

    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: {
          ...this.state.formControls[name],
          value: !this.state.formControls[name].value
        }
      }
    });
  };

  changeHandler = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: {
          ...this.state.formControls[name],
          value
        }
      }
    });

    console.log(this.state);
  };

  formSubmitHandler = async () => {
    console.log("here");
    // coordsFromAddress('1201 Wexfords Downs Ln');
    console.dir(this.state.formControls);

    // Get Allergens
    let allergens: string[] = [];
    if (this.state.formControls.dairy.value) {
      allergens.push("dairy");
    }
    if (this.state.formControls.gluten.value) {
      allergens.push("gluten");
    }
    if (this.state.formControls.nuts.value) {
      allergens.push("nuts");
    }

    // Create Location
    // const coords: any = await coordsFromAddress(this.state.formControls.address.value);
    const location = {
      Latitude: this.selectedPlace.geometry.location.lat() as number,
      Longitude: this.selectedPlace.geometry.location.lng() as number
    };

    // Create Food object
    const submitFood: Food = {
      type: this.state.formControls.type.value,
      servings: this.state.formControls.servings.value,
      address: this.selectedPlace.formatted_address,
      prepDate: new Date(),
      allergens: allergens,
      name:
        this.state.formControls.firstName.value +
        " " +
        this.state.formControls.lastName.value,
      number: this.state.formControls.number.value,
      email: this.state.formControls.email.value,
      location: location
    };

    console.log("Submit food:");
    console.log(submitFood);

    // Send food to database
    postFood(submitFood);
    this.selectedPlace = undefined;
    this.setState({ submitted: true });
    this.setState({
      formControls: formControls
    });
  };

  render() {
    return (
      <section className="give">
        <article>
          <form>
            <h3>User Information</h3>
            <fieldset>
              <div className="split">
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={this.state.formControls.firstName.value}
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={this.state.formControls.lastName.value}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="split">
                <input
                  type="text"
                  placeholder="Email Address"
                  name="email"
                  value={this.state.formControls.email.value}
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="number"
                  value={this.state.formControls.number.value}
                  onChange={this.changeHandler}
                />
              </div>
            </fieldset>
            <h3>Food Information</h3>
            <fieldset>
              <div className="split">
                <input
                  type="text"
                  placeholder="Food Type"
                  name="type"
                  value={this.state.formControls.type.value}
                  onChange={this.changeHandler}
                />
                <input
                  type="number"
                  placeholder="Servings"
                  name="servings"
                  value={this.state.formControls.servings.value}
                  onChange={this.changeHandler}
                />
              </div>

              <Autocomplete
                onPlaceSelected={place => {
                  this.selectedPlace = place;
                }}
                types={["address"]}
                componentRestrictions={{ country: "us" }}
              />

              <div className="split">
                <label>
                  <input
                    type="checkbox"
                    name="dairy"
                    checked={this.state.formControls.dairy.value}
                    value={this.state.formControls.dairy.value}
                    onChange={this.checkChangeHandler}
                  />
                  <span>Dairy</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="gluten"
                    checked={this.state.formControls.gluten.value}
                    value={this.state.formControls.gluten.value}
                    onChange={this.checkChangeHandler}
                  />
                  <span>Gluten</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="nuts"
                    checked={this.state.formControls.nuts.value}
                    value={this.state.formControls.nuts.value}
                    onChange={this.checkChangeHandler}
                  />
                  <span>Nuts</span>
                </label>
              </div>
            </fieldset>
            <footer>
              <span className="message">{ this.state.submitted ? 'Thank you for giving! 🥡😋' : 'Please supply all fields.' }</span>
              <button type="button" onClick={this.formSubmitHandler}>Post</button>
            </footer>
          </form>
        </article>
      </section>
    );
  }
}

export default FoodForm;
