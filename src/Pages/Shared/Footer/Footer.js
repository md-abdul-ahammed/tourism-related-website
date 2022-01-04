import React from 'react';
import visaImg from '../../../images/visa.png';
import mastercardImg from '../../../images/mastercard.png';
import skrillImg from '../../../images/skrill.png';
import stripeImg from '../../../images/stripe.png';
import discoverImg from '../../../images/discover.png';
import { BiPhoneCall, BiMessageRoundedAdd, BiLocationPlus } from "react-icons/bi";
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className='bg-dark pt-5 pb-3'>
            <div className='container'>
                <div className='row text-white'>
                    <div className='col-md-4 mb-2'>
                        <img
                            width='260px'
                            height='100px'
                            src='https://i.ibb.co/S3SpPN2/4208928-ai-1.png'
                            alt="React Bootstrap logo"
                        />
                        <p>“Man cannot discover new oceans unless he has the courage to lose sight of the shore”</p>
                    </div>
                    <div className='col-md-3 mb-2'>
                        <h3 className='mb-4 fw-bold'>Contact Us</h3>
                        <div className='d-flex align-items-center justify-content-start mb-3'>
                            <div>
                                <BiPhoneCall className='fs-5 primary-c-color me-3' />
                            </div>
                            <div>
                                <p className='mb-0'>+01852-1265122</p>
                                <p className='mb-0'>+01852-1265122</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-start mb-3'>
                            <div>
                                <BiMessageRoundedAdd className='fs-5 primary-c-color me-3' />
                            </div>
                            <div>
                                <p className='mb-0'>shagarmd2082@gmail.com</p>
                                <p className='mb-0'>shagar@yahoo.com</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-start mb-3'>
                            <div>
                                <BiLocationPlus className='fs-5 primary-c-color me-3' />
                            </div>
                            <div>
                                <p className='mb-0'>2752 Willison Street</p>
                                <p className='mb-0'>Eagan, United State</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2 mb-2'>
                        <h3 className='mb-4 fw-bold'>Support</h3>
                        <HashLink className='text-decoration-none d-block text-white mb-2' to='/home#home'>Home</HashLink>
                        <HashLink className='text-decoration-none d-block text-white mb-2' to='/contactUs#contactUs'>Contact Us</HashLink>
                        <HashLink className='text-decoration-none d-block text-white mb-2' to='/home#blogs'>Our Blogs</HashLink>
                    </div>
                    <div className='col-md-2 mb-2'>
                        <h3 className='fw-bold mb-4'>We Accepts:</h3>
                        <img className='m-1' src={visaImg} alt="" />
                        <img className='m-1' src={mastercardImg} alt="" />
                        <img className='m-1' src={skrillImg} alt="" />
                        <img className='m-1' src={stripeImg} alt="" />
                        <img className='m-1' src={discoverImg} alt="" />
                    </div>
                </div>
                <hr />
                <span className='text-center d-block d-flex justify-content-center'>© 2020-2021 <span className='primary-c-color mx-1'>Abdul Ahammed</span> All Rights Reserved</span>
            </div>

        </div>
    );
};

export default Footer;