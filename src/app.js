import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, observer, inject } from 'mobx-react';
import carStore from './stores/carsStore';

const stores = {
  carStore
};

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
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref={input => (this.carInput = input)} placeholder='Add a car' />
          <div>
            You have {this.props.carStore.totalCars} cars.
          </div>
        </form>
        <ul>
          {this.props.carStore.cars.map(car => <li key={car}>{car}</li>)}
        </ul>
      </div>
    );
  }
}

const App = () => (
  <Cars />
);

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);