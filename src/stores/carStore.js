import { mobx, observable, action, computed, autorun } from 'mobx';

class CarStore {

    constructor(){

        autorun(() => {
            console.log(this.cars);
        });
    }

    @observable cars = [];

    @action addCar = (car) => {

        this.cars.push(car);
    }

    @action deleteCar = (carId) => {

        function remove(array, carId) {
            return array.filter(e => e.id !== carId);
        }

        this.cars = remove(this.cars, carId);
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