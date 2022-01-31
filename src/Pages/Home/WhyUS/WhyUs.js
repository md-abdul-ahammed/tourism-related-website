import React from 'react';
import { FaHandshake } from "react-icons/fa";
import { MdOutlineVerifiedUser, MdOutlineManageAccounts } from "react-icons/md";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import './WhyUs.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

const WhyUs = () => {
    return (
        <div className='bg-img'>
            <div className='my-5'>
                <h5 className='d-flex justify-content-center align-content-center primary-c-color fw-bold'>Why TRAVEL GO</h5>
                <h1 className='d-flex justify-content-center align-content-center'>Why You Are Travel With </h1>
                <h1 className='d-flex justify-content-center align-content-center'>TRAVEL GO</h1>
            </div>
            <div data-aos="fade-down-left" data-aos-duration="2000">
                <div className="row why-us-container container mx-auto justify-content-md-between">
                    <div className="col-lg-3 col-md-6 col-6 mb-3">
                        <div className='d-flex hover-bg-white justify-content-center bg-dark text-white py-5 b-radius'>
                            <div>
                                <MdOutlineManageAccounts className='icon-size d-flex mx-auto primary-c-color' />
                                <h5 className=' d-flex justify-content-center'>2000+ Our</h5>
                                <h5 className='d-flex justify-content-center'>worldwide guide</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6 mb-3">
                        <div className='d-flex hover-bg-white justify-content-center bg-dark text-white py-5 b-radius'>
                            <div>
                                <FaHandshake className='icon-size d-flex mx-auto  primary-c-color' />
                                <h5 className=' d-flex justify-content-center'>100% trusted travel</h5>
                                <h5 className='d-flex justify-content-center'>agency</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6 mb-3">
                        <div className='d-flex hover-bg-white justify-content-center bg-dark text-white py-5 b-radius'>
                            <div>
                                <MdOutlineVerifiedUser className='icon-size d-flex mx-auto primary-c-color' />
                                <h5 className=' d-flex justify-content-center'>10+ year of travel</h5>
                                <h5 className='d-flex justify-content-center'>experience</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6 mb-3">
                        <div className='d-flex hover-bg-white justify-content-center bg-dark text-white py-5 b-radius'>
                            <div>
                                <BsFillEmojiSmileFill className='icon-size d-flex mx-auto primary-c-color' />
                                <h5 className=' d-flex justify-content-center'>90% of our traveller</h5>
                                <h5 className='d-flex justify-content-center'>happy</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;