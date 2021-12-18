import React from 'react';

import DubaiPackages from '../DubaiPackages/DubaiPackages';
import ItalyPackages from '../ItalyPackages/ItalyPackages';
import SpainPackages from '../SpainPackages/SpainPackages';

const CountriesPackages = () => {

    return (
        <div className='mt-5 container'>
            <SpainPackages></SpainPackages>
            <ItalyPackages></ItalyPackages>
            <DubaiPackages></DubaiPackages>
        </div>
    );
};

export default CountriesPackages;