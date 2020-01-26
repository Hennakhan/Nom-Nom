import React from 'react';

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

  formSubmitHandler = () => {
    console.dir(this.state.formControls);
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

