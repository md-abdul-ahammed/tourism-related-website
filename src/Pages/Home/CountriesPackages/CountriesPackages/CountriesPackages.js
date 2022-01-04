import React from 'react';

import DubaiPackages from '../DubaiPackages/DubaiPackages';
import ItalyPackages from '../ItalyPackages/ItalyPackages';
import SpainPackages from '../SpainPackages/SpainPackages';

const CountriesPackages = () => {

    return (
        <div className='container'>
            <div className='my-5'>
                <h5 className='d-flex justify-content-center align-content-center primary-c-color fw-bold'>Choose Your Package</h5>
                <h1 className='d-flex justify-content-center align-content-center'>Select Your Best Package</h1>
                <h1 className='d-flex justify-content-center align-content-center'>For Your Travel</h1>
            </div>

            <SpainPackages></SpainPackages>
            <ItalyPackages></ItalyPackages>
            <DubaiPackages></DubaiPackages>
        </div>
    );
};

export default CountriesPackages;