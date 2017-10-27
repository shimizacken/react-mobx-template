import { observable, action, computed } from "mobx";

class CarStore {

    @observable cars = [];

    @action addCar(car){

        this.cars.push(car);
    }

    @computed get carsCount(){

        return this.cars.length;
    }
}

const store = new CarStore();

export default store;