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

    const style = {
      color: 'red',
      float: 'left',
      width: '350px'
    }

    return (
      <div style={style}>
        <div style={{float: 'right'}}>
          <CarCounter />
        </div>
        <div style={{float: 'left'}}>
          <form onSubmit={this.handleSubmit}>
            <input type='text' ref={input => (this.carInput = input)} placeholder='Add a car' />
          </form>
          <ul style={{
            listStyleType: 'none',
            padding: 0,
            margin: 0,
            marginTop: '15px'
          }}>
            {this.props.carStore.cars.map(car => <li key={car}>{car}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Cars;