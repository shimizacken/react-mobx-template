import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, observer, inject } from 'mobx-react';
import Cars from './components/cars/cars';
import carStore from './stores/carsStore';

const stores = {
  carStore
};

const MainContainer = () => (
  <Cars />
);

ReactDOM.render(
  <Provider {...stores}>
    <MainContainer />
  </Provider>,
  document.getElementById('root')
);