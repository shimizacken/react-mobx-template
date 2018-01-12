import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('carStore') @observer
class DeleteCar extends React.Component {

    deleteCar = () => {

        this.props.carStore.deleteCar(this.props.carId);
    }

    render() {
        return(
            <span onClick={this.deleteCar} style={{cursor: 'pointer', color: 'red'}}>
                X
             </span>
        );
    }
}

export default DeleteCar;