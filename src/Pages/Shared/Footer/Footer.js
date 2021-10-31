import React from 'react';
import visaImg from '../../../images/visa.png'
import mastercardImg from '../../../images/mastercard.png'
import skrillImg from '../../../images/skrill.png'
import stripeImg from '../../../images/stripe.png'
import discoverImg from '../../../images/discover.png'

const Footer = () => {
    return (
        <div className='bg-dark pt-5'>
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
                        <h3>Contact Us</h3>
                        <div>
                            <p className='my-1'>+01852-1265122</p>
                            <p className='my-1'>+01852-1265122</p>
                        </div>
                        <div>
                            <p className='my-1'>shagar@gmail.com</p>
                            <p className='my-1'>sakib@yahoo.com</p>
                        </div>
                        <div>
                            <p>2752 Willison Street <br />
                                Eagan, United State</p>
                        </div>
                    </div>
                    <div className='col-md-2 mb-2'>
                        <h3>Support</h3>
                        <p>Contact Us</p>
                        <p>About Us</p>
                        <p>Our Blogs</p>
                    </div>
                    <div className='col-md-2 mb-2'>
                        <h3>We Accepts:</h3>
                        <img className='m-1' src={visaImg} alt="" />
                        <img className='m-1' src={mastercardImg} alt="" />
                        <img className='m-1' src={skrillImg} alt="" />
                        <img className='m-1' src={stripeImg} alt="" />
                        <img className='m-1' src={discoverImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;