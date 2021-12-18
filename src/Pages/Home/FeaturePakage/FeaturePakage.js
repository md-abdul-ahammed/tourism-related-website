import React from 'react';
import { Card } from 'react-bootstrap';
import Slider from 'react-slick';
import { AiTwotoneStar } from "react-icons/ai";
import './FeaturePakage.css'

const FeaturePakage = () => {
    return (
        <div className='mt-custom'>
            <div className='my-5'>
                <h5 className='d-flex justify-content-center align-content-center primary-c-color fw-bold'>Feature Tours</h5>
                <h1 className='d-flex justify-content-center align-content-center'>See Our Best Popular</h1>
                <h1 className='d-flex justify-content-center align-content-center'>Destinations</h1>
            </div>
            <Slider
                slidesToShow={2}
                autoplay
            >
                <div>
                    <div className='d-flex mx-3  bg-dark hover-bg-white featured-border align-items-center justify-content-between'>
                        <div>
                            <img style={{ height: '180px', width: '180px', objectFit: "cover", borderRadius: '3px' }} src="https://i.imgur.com/J09rmVV.png" alt="" />
                        </div>
                        <div className='pe-3'>
                            <Card.Title className='fw-bold fs-4 '>Group Travel go to Sea-Beach</Card.Title>
                            <p><AiTwotoneStar className='fs-5 primary-c-color' /> 7k+ Rating</p>
                            <h4><span className='fs-3 fw-bolder me-3 primary-c-color'>$150</span><del>$200</del></h4>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='d-flex mx-3 bg-dark hover-bg-white featured-border align-items-center justify-content-between'>
                        <div>
                            <img style={{ height: '180px', width: '180px', objectFit: "cover", borderRadius: '3px' }} src="https://i.imgur.com/J09rmVV.png" alt="" />
                        </div>
                        <div className='pe-3'>
                            <Card.Title className='fw-bold fs-4 '>Group Travel go to Sea-Beach</Card.Title>
                            <p><AiTwotoneStar className='fs-5 primary-c-color' /> 7k+ Rating</p>
                            <h4><span className='fs-3 fw-bolder me-3 primary-c-color'>$150</span><del>$200</del></h4>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='d-flex mx-3 bg-dark hover-bg-white featured-border align-items-center justify-content-between'>
                        <div>
                            <img style={{ height: '180px', width: '180px', objectFit: "cover", borderRadius: '3px' }} src="https://i.imgur.com/CPZPqQy.png" alt="" />
                        </div>
                        <div className='pe-3'>
                            <Card.Title className='fw-bold fs-4 '>Group Travel go to Sea-Beach</Card.Title>
                            <p><AiTwotoneStar className='fs-5 primary-c-color' /> 7k+ Rating</p>
                            <h4><span className='fs-3 fw-bolder me-3 primary-c-color'>$150</span><del>$200</del></h4>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default FeaturePakage;