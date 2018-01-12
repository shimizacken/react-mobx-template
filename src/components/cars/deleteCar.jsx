import React from 'react';
import { inject, observer } from 'mobx-react';


const DeleteCar = inject('carStore')(observer((props) => {

    const deleteCar = () => {

        props.carStore.deleteCar(props.carId);
    }

    return(
        <span onClick={deleteCar} style={{cursor: 'pointer', color: 'red'}}>
            X
         </span>
    );
}));

export default DeleteCar;