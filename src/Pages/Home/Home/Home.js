import React from 'react';
import { Carousel } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Services from '../Services/Services';
import WhyUs from '../WhyUS/WhyUs';
import './Home.css';


const Home = () => {
    return (
        <div className='container' id='home'>
            <Carousel className='mb-5' fade>
                <Carousel.Item >
                    <div className="drk">
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/nkRqszm/banner-3.png"
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3 className='fw-bolder'>Amazing Tour In <br /> Indonesia</h3>
                        <p className='primary-c-color fw-bolder'>5 Days, 6 Night Tour</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="drk">
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/bsJZtsT/banner-1.png"
                            alt="Second slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3 className='fw-bolder'>Amazing Tour In <br /> Madagascar</h3>
                        <p className='primary-c-color fw-bolder'>5 Days, 6 Night Tour</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="drk">
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/92YXS2b/banner-2.png"
                            alt="Third slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3 className='fw-bolder'>Amazing Tour In <br /> Hampshire</h3>
                        <p className='primary-c-color fw-bolder'>5 Days, 6 Night Tour</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Services></Services>
            <WhyUs></WhyUs>
            <ClientFeedback></ClientFeedback>
            <Blog></Blog>
        </div>
    );
};

export default Home;