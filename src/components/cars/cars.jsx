import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { observer, inject } from 'mobx-react';
import CarCounter from './carsCounter';

@inject('carStore') @observer
class Cars extends Component {

  handleSubmit = e => {

    e.preventDefault();

    this.props.carStore.addCar(this.carInput.value);
    
    e.target.reset();
  }

  render() {
    return (
      <div>
        <CarCounter />
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref={input => (this.carInput = input)} placeholder='Add a car' />
        </form>
        <ul>
          {this.props.carStore.cars.map(car => <li key={car}>{car}</li>)}
        </ul>
      </div>
    );
  }
}

export default Cars;