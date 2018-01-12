import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { observer, inject } from 'mobx-react';
import CarCounter from './carsCounter';
import DeleteCar from './deleteCar';

@inject('carStore') @observer
class Cars extends Component {

  handleSubmit = e => {

    e.preventDefault();

    let car = {
      id: this.carInput.value,
      name: `car-${this.carInput.value}`
    };

    this.props.carStore.addCar(car);
    
    e.target.reset();
  }

  deleteCar = (id) => {

    console.log(id);
      //this.props.carStore.deleteCar(e.value);
  }

  render() {

    const style = {
      fontFamily: 'verdana',
      color: '#444444',
      float: 'left',
      width: '450px',
      padding: '15px',
      lineHeight: '25px'
    }

    return (
      <div style={style}>
        <div style={{float: 'right'}}>
          <CarCounter />
        </div>
        <div style={{float: 'left'}}>
          <label>
              type number of cars to add:
          </label>
          <form onSubmit={this.handleSubmit}>
            <input type='text' style={{padding: '3px'}} ref={input => (this.carInput = input)} placeholder='Add a car' />
          </form>
          <ul style={{
            listStyleType: 'none',
            padding: 0,
            margin: 0,
            marginTop: '15px'
          }}>
            {
              this.props.carStore.cars.map(car => 
                <li key={car.id}>{car.name} 
                  <DeleteCar carId={car.id} />
                </li>)
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Cars;