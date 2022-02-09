import React from 'react';

import DubaiPackages from '../DubaiPackages/DubaiPackages';
import ItalyPackages from '../ItalyPackages/ItalyPackages';
import SpainPackages from '../SpainPackages/SpainPackages';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

const CountriesPackages = () => {

    return (
        <div>
            <div className='my-5'>
                <h5 className='d-flex justify-content-center align-content-center primary-c-color fw-bold'>Choose Your Package</h5>
                <h1 className='d-flex justify-content-center align-content-center'>Select Your Best Package</h1>
                <h1 className='d-flex justify-content-center align-content-center'>For Your Travel</h1>
            </div>
            <div className='mx-5'>
                <div
                    data-aos-duration="2500"
                    data-aos="fade-up"
                >
                    <SpainPackages></SpainPackages>
                </div>
                <div
                    data-aos-duration="2500"
                    data-aos="fade-up">
                    <ItalyPackages></ItalyPackages>
                </div>
                <div
                    data-aos-duration="2500"
                    data-aos="fade-up">
                    <DubaiPackages></DubaiPackages>
                </div>
            </div>
        </div>
    );
};

export default CountriesPackages;