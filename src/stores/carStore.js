import { observable, action, computed } from 'mobx';

class CarStore {

    @observable cars = [];

    @action addCar = car => {

        this.cars.push(parseInt(car));
    }

    @computed get carsCount() {

        return this.cars.length;
    }

    @computed get totalCars() {

        if (this.cars.length < 1) {
            
            return 0;
        }

        function sum(total, num) {
            
            return total + num;
        }

        return this.cars.reduce(sum);
    }
}

export default new CarStore();