import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './ClientFeedback.css';

const ClientFeedback = () => {
    return (
        <div className='my-5'>
            <div className='my-5'>
                <h5 className='d-flex justify-content-center align-content-center primary-c-color'>Why TRAVEL GO</h5>
                <h1 className='d-flex justify-content-center align-content-center'>Why You Are Travel With </h1>
                <h1 className='d-flex justify-content-center align-content-center'>TRAVEL GO</h1>
            </div>

            <Row xs={1} md={3} className="g-4 container-md container-lg mx-auto">
                <Col>
                    <Card className='text-center py-5 text-dark custom-rounded'>
                        <div className='d-flex justify-content-center'>
                            <Card.Img className='img-rounded' variant="top" src="https://i.ibb.co/fNfnqVT/reviewer-2-52e03342.png" />
                        </div>
                        <Card.Body>
                            <Card.Title className='fw-bold fs-4 primary-c-color'>Shagar Ahammed</Card.Title>
                            <Card.Title className='fw-bold fs-6 text-muted'>Traveller</Card.Title>
                            <Card.Text>
                                “A journey of a thousand miles begins with a single step”. Thanks give me opportunity for Travel Go.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='text-center py-5 text-dark custom-rounded'>
                        <div className='d-flex justify-content-center'>
                            <Card.Img className='img-rounded' variant="top" src="https://i.ibb.co/9TF5cpQ/reviewer-1-07859027.png" />
                        </div>
                        <Card.Body>
                            <Card.Title className='fw-bold fs-4 primary-c-color'>Shila Akther</Card.Title>
                            <Card.Title className='fw-bold fs-6 text-muted'>Traveller</Card.Title>
                            <Card.Text>
                                “Do not follow where the path may lead. Go instead where there is no path and leave a trail”. Thanks Travel Go.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='text-center py-5 text-dark custom-rounded'>
                        <div className='d-flex justify-content-center'>
                            <Card.Img className='img-rounded' variant="top" src="https://i.ibb.co/rGGdB58/reviewer-3-21d99f5c.png" />
                        </div>
                        <Card.Body>
                            <Card.Title className='fw-bold fs-4 primary-c-color'>Rakib Talukder</Card.Title>
                            <Card.Title className='fw-bold fs-6 text-muted'>Traveller</Card.Title>
                            <Card.Text>
                                “I am not the same, having seen the moon shine on the other side of the world”.Best service I ever seen.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default ClientFeedback;