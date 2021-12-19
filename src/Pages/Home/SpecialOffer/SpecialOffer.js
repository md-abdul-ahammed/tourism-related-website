import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiCalendarStar } from "react-icons/bi";
import { MdOutlineAddLocationAlt, MdAdd } from "react-icons/md";
import { AiTwotoneStar } from "react-icons/ai";

const SpecialOffer = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://dark-phantom-03023.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 3)));
    }, [])
    return (
        <div className='container mb-5'>
            <div className='mb-5'>
                <h5 className='d-flex justify-content-center primary-c-color fw-bold'>Choose Your Package</h5>
                <h1 className='d-flex justify-content-center'>Select Your Best Package</h1>
                <h1 className='d-flex justify-content-center'>For Your Travel</h1>
            </div>

            {
                services.length === 0
                    ?
                    <div className='d-flex justify-content-center align-content-center py-5'>
                        <Spinner className='fs-2 p-5' animation="border" variant="primary" />
                    </div>
                    :
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            services.map(service =>
                                <Col key={service._id}>
                                    <Card className='h-100 hover-effect bg-dark  hover-bg-white'>
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
                                                {service.description}
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className='d-flex justify-content-between align-items-center'>
                                            <div>
                                                <Link className='button-design d-flex align-items-center justify-content-between' to={`/booking/${service._id}`}>Book Now <MdAdd className='fs-5' /> </Link>
                                            </div>
                                            <p className='mb-0'><AiTwotoneStar className='fs-5 primary-c-color' /> {service.rating}</p>
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