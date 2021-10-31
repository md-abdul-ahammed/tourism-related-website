import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='mb-5' id='blogs'>
            <div className='my-5'>
                <h5 className='d-flex justify-content-center align-content-center primary-c-color'>Latest Blog</h5>
                <h1 className='d-flex justify-content-center align-content-center'>Stay Updated And New Post</h1>
                <h1 className='d-flex justify-content-center align-content-center'>Our Blog</h1>
            </div>
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card className='h-100 hover-effect'>
                        <div className='zoom'>
                            <Card.Img variant="top" src="https://i.ibb.co/x3LJgLQ/b-1-64c64476.png" />
                        </div>
                        <Card.Body className='text-dark'>
                            <Card.Title className='d-flex justify-content-between align-items-center'>
                                <h5>Dina Jems</h5>
                                <h6>(3)Comment</h6>
                            </Card.Title>
                            <Card.Title>“Travel is the only thing you buy that makes you richer”</Card.Title>
                        </Card.Body>
                        <Card.Footer className='text-dark'>
                            <div>
                                <Link className='button-design' to='/blogs'>Reed More</Link>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card className='h-100 hover-effect'>
                        <div className='zoom'>
                            <Card.Img variant="top" src="https://i.ibb.co/cgzH6jN/b-2-83389c8c.png" />
                        </div>
                        <Card.Body className='text-dark'>
                            <Card.Title className='d-flex justify-content-between align-items-center'>
                                <h5>Justina Valentine</h5>
                                <h6>(2)Comment</h6>
                            </Card.Title>
                            <Card.Title>“It feels good to be lost in the right direction” </Card.Title>
                        </Card.Body>
                        <Card.Footer className='text-dark'>
                            <div>
                                <Link className='button-design' to='/blogs'>Reed More</Link>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card className='h-100 hover-effect'>
                        <div className='zoom'>
                            <Card.Img variant="top" src="https://i.ibb.co/vv6bxH5/b-3-f3e9c0bd.png" />
                        </div>
                        <Card.Body className='text-dark'>
                            <Card.Title className='d-flex justify-content-between align-items-center'>
                                <h5>Samy Zayn</h5>
                                <h6>(3)Comment</h6>
                            </Card.Title>
                            <Card.Title>”Life is a journey, not a destination”</Card.Title>
                        </Card.Body>
                        <Card.Footer className='text-dark'>
                            <div>
                                <Link className='button-design' to='/blogs'>Reed More</Link>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Blog;