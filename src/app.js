import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, observer, inject } from "mobx-react";
import CarStore from "./stores/cars";

window.stores = CarStore;

@inject('CarStore')
@observer
class Cars extends React.Component {

  constructor(props){
    super(props);
  }

  handleSubmit = e => {

    e.preventDefault();
    this.props.CarStore.addCar(this.birdInput.value);
    e.target.reset();
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" ref={input => (this.birdInput = input)} placeholder="Add a car" />
          <div>
            You have {this.props.CarStore.carsCount} cars.
          </div>
        </form>
        <ul>
          {CarStore.cars.map(car => <li key={car}>{car}</li>)}
        </ul>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Provider CarStore={CarStore}>
        <Cars />
      </Provider>
    );
  }
}

ReactDOM.render(
  <Provider carStore={CarStore}>
    <App name='shimi!' />
  </Provider>,
  document.getElementById('root')
);