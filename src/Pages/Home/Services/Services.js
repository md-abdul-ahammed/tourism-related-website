import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='container mb-5' id='services'>
            <div className='mb-5'>
                <h5 className='d-flex justify-content-center primary-c-color'>Choose Your Package</h5>
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
                    <Row xs={1} md={3} className="g-4">
                        {
                            services.map(service =>
                                <Col key={service._id}>
                                    <Card className='h-100 hover-effect'>
                                        <div className='zoom'>
                                            <Card.Img variant="top" src={service.img} />
                                        </div>
                                        <Card.Body className='text-dark'>
                                            <Card.Title className='d-flex justify-content-between align-items-center'>
                                                <h5>${service.price}/Per Person</h5>
                                                <h6>{service.days} Days/{service.night} night</h6>
                                            </Card.Title>
                                            <Card.Title className='fw-bold primary-c-color'>{service.name}</Card.Title>
                                            <Card.Text>
                                                {service.description}
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className='d-flex justify-content-between align-items-center text-dark'>
                                            <div>
                                                <Link className='button-design' to={`/booking/${service._id}`}>Book Now</Link>
                                            </div>
                                            <p className='mb-0'>{service.rating}</p>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            )
                        }
                    </Row>
            }
        </div>
    );
};

export default Services;