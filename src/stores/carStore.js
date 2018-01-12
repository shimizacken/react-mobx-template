import { mobx, observable, action, computed, autorun } from 'mobx';

class CarStore {

    @observable cars = [];

    @action addCar = (car) => {

        this.cars.push(car);
    }

    constructor(){

        autorun(() => {
            console.log(this.cars);
        });
    }

    @computed get carsCount() {

        return this.cars.length;
    }

    @computed get totalCars() {

        if (this.cars.length < 1) {
            
            return 0;
        }

        return this.carsCount;
    }
}

export default new CarStore();