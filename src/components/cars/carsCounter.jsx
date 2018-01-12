
import React from 'react';
import { inject, observer } from 'mobx-react';

const CarCounter = inject('carStore')(observer((props) => {

    return(
        <div>
            You have {props.carStore.totalCars} cars.
        </div>
    );
}));


export default CarCounter;