import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiCalendarStar } from "react-icons/bi";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { AiTwotoneStar } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();


const SpecialOffer = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://thawing-eyrie-67434.herokuapp.com/specialOffer')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className='container'>
            <div className='mb-5'>
                <h5 className='d-flex justify-content-center primary-c-color fw-bold'>Special offer</h5>
                <h1 className='d-flex justify-content-center'>Our Most Popular And</h1>
                <h1 className='d-flex justify-content-center'>Best Adventures</h1>
            </div>

            {
                services.length === 0
                    ?
                    <div className='d-flex justify-content-center align-content-center py-5'>
                        <Spinner className='fs-2 p-5' animation="border" variant="primary" />
                    </div>
                    :
                    <Row data-aos-duration="2000"
                        data-aos="fade-right" xs={1} md={2} lg={3} className="g-4">
                        {
                            services.map(service =>
                                <Col key={service._id}>
                                    <Card className='h-100 hover-effect bg-dark  hover-bg-white'>
                                        <div className='zoom'>
                                            <Link to={`/booking/${service._id}`} ><Card.Img variant="top" src={service.image} /></Link>
                                        </div>
                                        <Card.Body >
                                            <Card.Title className='d-flex justify-content-between align-items-center'>
                                                <h6><BiCalendarStar className='fs-3' /> {service.days} Days/{service.night} night</h6>
                                                <p className='mb-0'><AiTwotoneStar className='fs-5 primary-c-color' /><AiTwotoneStar className='fs-5 primary-c-color' /><AiTwotoneStar className='fs-5 primary-c-color' /><AiTwotoneStar className='fs-5 primary-c-color' /><AiTwotoneStar className='fs-5 primary-c-color' /> {service.rating}</p>
                                            </Card.Title>
                                            <Card.Title className='fw-bold primary-c-color'><MdOutlineAddLocationAlt className='fs-2 text-muted' /> <Link className='fw-bold text-decoration-none primary-c-color' to={`/booking/${service._id}`}>{service.name}</Link></Card.Title>

                                        </Card.Body>
                                        <Card.Footer className='d-flex justify-content-between align-items-center'>
                                            <div>
                                                <h4><span className='fs-3 fw-bolder me-3'>${service.special_price}</span><del>${service.price}</del></h4>

                                                {/* <Link className='button-design d-flex align-items-center justify-content-between' to={`/booking/${service._id}`}>Book Now <MdAdd className='fs-5' /> </Link> */}
                                            </div>


                                        </Card.Footer>
                                    </Card>
                                </Col>
                            )
                        }
                    </Row>
            }
        </div >
    );
};

export default SpecialOffer;