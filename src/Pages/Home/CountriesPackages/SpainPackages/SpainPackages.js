import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiCalendarStar } from "react-icons/bi";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { AiTwotoneStar } from "react-icons/ai";
import './SpainPackages.css';

const SpainPackages = () => {
    const [services, setServices] = useState([]);
    const sliderRef = useRef(null);

    const carouselProperties = {
        slidesToShow: 3,
        speed: 1300,
        ref: sliderRef,
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

    useEffect(() => {
        fetch('https://dark-phantom-03023.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <div className="row">
                <div className="col-md-12 col-lg-3 col-sm-12">
                    <div className='spain-cover-img'>
                        <img className='img-fluid' src="https://i.imgur.com/4W0dMwW.png" alt="" />
                        <div class="pakage-overlay fs-2 text-white"><strong>Spain</strong></div>
                        <div className='left-right-icon'>
                            <BsChevronDoubleLeft onClick={() => sliderRef.current.slickPrev()} className='me-3 slider-left-right-icon fw-bold fs-3 text-white' />
                            <BsChevronDoubleRight onClick={() => sliderRef.current.slickNext()} className='ms-3 slider-left-right-icon fw-bold fs-3 text-white' />
                        </div>
                    </div>
                </div>

                <div className="col-md-12 col-lg-9 col-sm-12">
                    <Slider
                        {...carouselProperties}
                    >
                        {
                            services.map(service =>
                                <Col key={service._id}>
                                    <Card className='h-100 hover-effect bg-dark mx-2 hover-bg-white'>
                                        <div className='zoom'>
                                            <Card.Img variant="top" src={service.img} />
                                        </div>
                                        <Card.Body >
                                            <Card.Title className='d-flex justify-content-between align-items-center'>
                                                <h5><span className='fs-3 fw-bolder'>${service.price}</span>/Per Person</h5>
                                                <h6><BiCalendarStar className='fs-3' /> {service.days} Days/{service.night} night</h6>
                                            </Card.Title>
                                            <Card.Title className='fw-bold primary-c-color'><MdOutlineAddLocationAlt className='fs-2 text-muted' /> {service.name}</Card.Title>
                                            <Card.Text>
                                                {service.description.slice(0, 90)}
                                            </Card.Text>
                                        </Card.Body>
                                        {/* <Card.Footer className='d-flex justify-content-between align-items-center'> */}
                                        <Card.Footer >
                                            <div>
                                                {/* <Link className='button-design d-flex align-items-center justify-content-between' to={`/booking/${service._id}`}>Book Now <MdAdd className='fs-5' /> </Link> */}
                                            </div>
                                            <p className='mb-0'><AiTwotoneStar className='fs-5 primary-c-color' /> {service.rating}</p>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            )
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default SpainPackages;