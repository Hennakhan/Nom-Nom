import React from 'react';
import { coordsFromAddress } from '../utils/GeocodeService';
import { Food, postFood } from '../utils/DataService';

// Followed this guide to create form: https://medium.com/@agoiabeladeyemi/the-complete-guide-to-forms-in-react-d2ba93f32825

export interface TestFood {
  type: string;
  servings: string;
  location: {
      Latitude: number,
      Longitude: number
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
};

class FoodForm extends React.Component<{}, FormContainerState> {
  constructor(props: any) {
    super(props);
    this.state = {
      formControls: {
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
        address: {
          value: ""
        },
        prepDate: {
          value: ""
        },
        name: {
          value: ""
        },
        number: {
          value: ""
        },
        email: {
          value: ""
        }
      }
    };
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
  };

  formSubmitHandler = async () => {
    coordsFromAddress('1201 Wexfords Downs Ln');
    console.dir(this.state.formControls);

    // Get Allergens
    let allergens: string[] = []; 
    if (this.state.formControls.dairy.value) { allergens.push('dairy') };
    if (this.state.formControls.gluten.value) { allergens.push('gluten') };
    if (this.state.formControls.nuts.value) { allergens.push('nuts') };

    
    // Create Location
    const coords: any = await coordsFromAddress(this.state.formControls.address.value);
    const location = {
      Latitude: coords[0] as number,
      Longitude: coords[1] as number
    }

    // Create Food object
    const submitFood: Food = {
      type: this.state.formControls.type.value, 
      servings: this.state.formControls.servings.value, 
      address: this.state.formControls.address.value, 
      prepDate: new Date(), 
      allergens: allergens,
      name: this.state.formControls.name.value, 
      number: this.state.formControls.number.value, 
      email: this.state.formControls.email.value,
      location: location,
    };

    console.log('Submit food:');
    console.log(submitFood);

    // Send food to database
    postFood(submitFood);
  }

  render() {
    return (
      <div>
        <form>
          {/* Type */}
          <div>Type</div>
          <input
            type="text"
            name="type"
            value={this.state.formControls.type.value}
            onChange={this.changeHandler}
          />


          {/* Servings */}
          <div>Servings</div>
          <input
            type="number"
            name="servings"
            value={this.state.formControls.servings.value}
            onChange={this.changeHandler}
          />

          {/* dairy */}
          <div>Contains Dairy</div>
          <input
            type="checkbox"
            name="dairy"
            value={this.state.formControls.dairy.value}
            onChange={this.checkChangeHandler}
          />

          {/* gluten */}
          <div>Contains Gluten</div>
          <input
            type="checkbox"
            name="gluten"
            value={this.state.formControls.gluten.value}
            onChange={this.checkChangeHandler}
          />

          {/* nuts */}
          <div>Contains Nuts</div>
          <input
            type="checkbox"
            name="nuts"
            value={this.state.formControls.nuts.value}
            onChange={this.checkChangeHandler}
          />

          
          {/* address */}
          <div>address</div>
          <input
            type="text"
            name="address"
            value={this.state.formControls.address.value}
            onChange={this.changeHandler}
          />

          {/* prepDate */}
          <div>prepDate</div>
          <input
            type="text"
            name="prepDate"
            value={this.state.formControls.prepDate.value}
            onChange={this.changeHandler}
          />

          {/* name */}
          <div>name</div>
          <input
            type="text"
            name="name"
            value={this.state.formControls.name.value}
            onChange={this.changeHandler}
          />

          {/* number */}
          <div>number</div>
          <input
            type="text"
            name="number"
            value={this.state.formControls.number.value}
            onChange={this.changeHandler}
          />

          {/* email */}
          <div>email</div>
          <input
            type="text"
            name="email"
            value={this.state.formControls.email.value}
            onChange={this.changeHandler}
          />
        </form>
        <button onClick={this.formSubmitHandler}> Submit </button>
      </div>
    );
  }
}

export default FoodForm;

