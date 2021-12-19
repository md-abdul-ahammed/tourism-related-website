import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiUserCheck } from "react-icons/fi";
import { BiMessageRoundedDots } from "react-icons/bi";
import { ImArrowRight } from "react-icons/im";
import { BiCalendarStar } from "react-icons/bi";
import './Blog.css'

const Blog = () => {
    return (
        <div className='mb-5 container' id='blogs'>
            <div className='my-5'>
                <h5 className='d-flex justify-content-center align-content-center primary-c-color fw-bold'>Latest Blog</h5>
                <h1 className='d-flex justify-content-center text-center align-content-center'>Stay Updated And New Post</h1>
                <h1 className='d-flex justify-content-center align-content-center'>Our Blog</h1>
            </div>
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card className='bg-dark h-100 hover-effect p-relative hover-bg-white'>
                        <div className='zoom'>
                            <Card.Img variant="top" src="https://i.ibb.co/x3LJgLQ/b-1-64c64476.png" />
                        </div>
                        <Card.Body>
                            <Card.Title className='d-flex justify-content-between align-items-center'>
                                <h5 className='fw-bold text-muted fs-6'><FiUserCheck className='fs-6 me-2 primary-c-color' />Dina Jems</h5>
                                <h6 className='text-muted fs-6'><BiMessageRoundedDots className='fs-6 me-2 primary-c-color' />(3)Comment</h6>
                            </Card.Title>
                            <Card.Title className='fw-bold fs-4 '>“Travel is the only thing you buy that makes you richer”</Card.Title>
                        </Card.Body>
                        <Card.Footer className='text-dark'>
                            <div>
                                <Link className='button-design' to='/blogs'>Reed More <ImArrowRight /></Link>
                            </div>
                        </Card.Footer>
                        <div className='p-absolute'>
                            <h6 className='bg-dark text-white'><BiCalendarStar className='fs-3' /> 1 April, 2021</h6>
                        </div>
                    </Card>

                </Col>
                <Col>
                    <Card className='bg-dark h-100 hover-effect p-relative hover-bg-white'>
                        <div className='zoom'>
                            <Card.Img variant="top" src="https://i.ibb.co/cgzH6jN/b-2-83389c8c.png" />
                        </div>
                        <Card.Body>
                            <Card.Title className='d-flex justify-content-between align-items-center'>
                                <h5 className='fw-bold text-muted fs-6'><FiUserCheck className='fs-6 me-2 primary-c-color' />Justina Valentine</h5>
                                <h6 className='text-muted fs-6'><BiMessageRoundedDots className='fs-6 me-2 primary-c-color' />(2)Comment</h6>
                            </Card.Title>
                            <Card.Title className='fw-bold fs-4 '>“It feels good to be lost in the right direction”</Card.Title>
                        </Card.Body>
                        <Card.Footer className='text-dark'>
                            <div>
                                <Link className='button-design' to='/blogs'>Reed More <ImArrowRight /></Link>
                            </div>
                        </Card.Footer>
                        <div className='p-absolute'>
                            <h6 className='bg-dark text-white'><BiCalendarStar className='fs-3' /> 1 April, 2021</h6>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className='bg-dark h-100 hover-effect p-relative hover-bg-white'>
                        <div className='zoom'>
                            <Card.Img variant="top" src="https://i.ibb.co/vv6bxH5/b-3-f3e9c0bd.png" />
                        </div>
                        <Card.Body>
                            <Card.Title className='d-flex justify-content-between align-items-center'>
                                <h5 className='fw-bold text-muted fs-6'><FiUserCheck className='fs-6 me-2 primary-c-color' />Samy Zayn</h5>
                                <h6 className='text-muted fs-6'><BiMessageRoundedDots className='fs-6 me-2 primary-c-color' />(3)Comment</h6>
                            </Card.Title>
                            <Card.Title className='fw-bold fs-4 '>”Life is a journey, not a destination”</Card.Title>
                        </Card.Body>
                        <Card.Footer className='text-dark'>
                            <div>
                                <Link className='button-design' to='/blogs'>Reed More <ImArrowRight /></Link>
                            </div>
                        </Card.Footer>
                        <div className='p-absolute'>
                            <h6 className='bg-dark text-white'><BiCalendarStar className='fs-3' /> 1 April, 2021</h6>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Blog;