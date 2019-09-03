import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class DogForm extends Component {

  static propTypes = {
    createDog: PropTypes.func.isRequired
  };

  state = {
    name: '',
    weight: '',
    age: '',
    color: '',
    breed: '',
    image: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createDog(this.state);
  };

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" placeholder="Name..." required onChange={this.handleChange}></input>
        <input name="weight" placeholder="Weight..." required onChange={this.handleChange}></input>
        <input name="age" placeholder="Age..." required onChange={this.handleChange}></input>
        <input name="color" placeholder="Color..." required onChange={this.handleChange}></input>
        <input name="breed" placeholder="Breed..." required onChange={this.handleChange}></input>
        <input name="image" placeholder="Image URL..." type="url" onChange={this.handleChange}></input>
        <button>Submit</button>
      </form>
    );
  }
}
