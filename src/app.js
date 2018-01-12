import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, observer, inject } from "mobx-react";
import carStore from "./stores/cars";

const stores = {
  carStore
};

@inject('carStore') @observer
class Cars extends React.Component {

  handleSubmit = e => {

    e.preventDefault();

    this.props.carStore.addCar(this.birdInput.value);
    
    e.target.reset();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={input => (this.birdInput = input)} placeholder="Add a car" />
          <div>
            You have {this.props.carStore.carsCount} cars.
          </div>
        </form>
        <ul>
          {this.props.carStore.cars.map(car => <li key={car}>{car}</li>)}
        </ul>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Cars />
    );
  }
}

ReactDOM.render(
  <Provider {...stores}>
    <App name='shimi!' />
  </Provider>,
  document.getElementById('root')
);