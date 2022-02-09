import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './ClientFeedback.css';
import { GiCommercialAirplane } from "react-icons/gi";
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

const ClientFeedback = () => {
    const carouselProperties = {
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    }


    return (
        <div className='mt-5'>
            <div className='my-5'>
                <h5 className='d-flex justify-content-center align-content-center primary-c-color fw-bold'>Our Traveller Say</h5>
                <h1 className='d-flex justify-content-center align-content-center'>What Oue Traveller Say</h1>
                <h1 className='d-flex justify-content-center align-content-center'>About Us</h1>
            </div>

            <div
                data-aos-duration="2500"
                data-aos="fade-up"
                className='mx-3'>
                <Slider
                    {...carouselProperties}
                    speed={1300}
                    dots
                    dotsClass="slick-dots line-indicator"
                    customPaging={(i) => <div style={{ position: "absolute", width: "100%", top: '-7px', opacity: "0" }}>{i}</div>}
                    autoplay
                >
                    <Col>
                        <Card className='text-center py-5 m-3 custom-rounded bg-dark h-100 hover-effect hover-bg-white'>
                            <div className='d-flex justify-content-center '>
                                <Card.Img className='img-rounded' variant="top" src="https://i.ibb.co/fNfnqVT/reviewer-2-52e03342.png" />
                            </div>
                            <Card.Body>
                                <Card.Title className='fw-bold fs-4 primary-c-color'>Shagar Ahammed</Card.Title>
                                <Card.Title className='fw-bold fs-6 text-muted'><GiCommercialAirplane /> Traveller</Card.Title>
                                <Card.Text className='fw-bolder'>
                                    “A journey of a thousand miles begins with a single step”. Thanks give me opportunity for Travel Go.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='text-center py-5 bg-dark m-3 h-100 hover-effect  hover-bg-white custom-rounded'>
                            <div className='d-flex justify-content-center'>
                                <Card.Img className='img-rounded' variant="top" src="https://i.ibb.co/rGGdB58/reviewer-3-21d99f5c.png" />
                            </div>
                            <Card.Body>
                                <Card.Title className='fw-bold fs-4 primary-c-color'>Rakib Talukder</Card.Title>
                                <Card.Title className='fw-bold fs-6 text-muted'><GiCommercialAirplane /> Traveller</Card.Title>
                                <Card.Text className='fw-bolder'>
                                    “I am not the same, having seen the moon shine on the other side of the world”.Best service I ever seen.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='text-center py-5 m-3 bg-dark h-100 hover-effect  hover-bg-white custom-rounded'>
                            <div className='d-flex justify-content-center'>
                                <Card.Img className='img-rounded' variant="top" src="https://i.ibb.co/9TF5cpQ/reviewer-1-07859027.png" />
                            </div>
                            <Card.Body>
                                <Card.Title className='fw-bold fs-4 primary-c-color'>Shila Akther</Card.Title>
                                <Card.Title className='fw-bold fs-6 text-muted'><GiCommercialAirplane /> Traveller</Card.Title>
                                <Card.Text className='fw-bolder'>
                                    “Do not follow where the path may lead. Go instead where there is no path and leave a trail”. Thanks Travel Go.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='text-center py-5 bg-dark m-3 h-100 hover-effect  hover-bg-white custom-rounded'>
                            <div className='d-flex justify-content-center'>
                                <Card.Img className='img-rounded' variant="top" src="https://i.ibb.co/rGGdB58/reviewer-3-21d99f5c.png" />
                            </div>
                            <Card.Body>
                                <Card.Title className='fw-bold fs-4 primary-c-color'>Rakib Talukder</Card.Title>
                                <Card.Title className='fw-bold fs-6 text-muted'><GiCommercialAirplane /> Traveller</Card.Title>
                                <Card.Text className='fw-bolder'>
                                    “I am not the same, having seen the moon shine on the other side of the world”.Best service I ever seen.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Slider>
            </div>
        </div>
    );
};

export default ClientFeedback;