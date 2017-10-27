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

  render() {
    return (
      <div>
        You have {this.props.CarStore.carsCount} cars.
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