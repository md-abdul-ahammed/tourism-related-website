import React from 'react';
import { ImLocation2 } from "react-icons/im";
import { MdMarkEmailUnread } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { GiClockwork } from "react-icons/gi";
import { useForm } from "react-hook-form";
import './ContactUs.css'

const ContactUs = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='container' id='contactUs'>
            <div className='cpt-5'>
                <div className='py-5'>
                    <div className="row justify-content-md-between">
                        <div className="col-md-4 mb-3">
                            <div className='d-flex hover-bg-white justify-content-center bg-dark text-white py-5 b-radius'>
                                <div>
                                    <ImLocation2 className='icon-size primary-c-color d-flex mx-auto' />
                                    <h5 className=' d-flex justify-content-center'>2000+ Our</h5>
                                    <h5 className='d-flex justify-content-center'>worldwide guide</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className='d-flex hover-bg-white justify-content-center bg-dark text-white py-5 b-radius'>
                                <div>
                                    <MdMarkEmailUnread className='icon-size primary-c-color d-flex mx-auto ' />
                                    <h5 className=' d-flex justify-content-center'>100% trusted travel</h5>
                                    <h5 className='d-flex justify-content-center'>agency</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className='d-flex hover-bg-white justify-content-center bg-dark text-white py-5 b-radius'>
                                <div>
                                    <TiMessages className='icon-size primary-c-color d-flex mx-auto' />
                                    <h5 className=' d-flex justify-content-center'>10+ year of travel</h5>
                                    <h5 className='d-flex justify-content-center'>experience</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-6 my-5 mb-5">
                        <h5 className='fw-bold mb-5'>Get In Touch</h5>
                        <p className='mb-5'>
                            Our office opening and closing update below....
                        </p>
                        <div className='d-flex align-items-center justify-content-start mb-3'>
                            <div>
                                <GiClockwork className='fs-1 primary-c-color me-3' />
                            </div>
                            <div>
                                <h4 className='mb-0 fw-bold fs-3 primary-c-color'>Open Hour</h4>
                                <p className='mb-0 text-muted fs-4'>Sat - Thu At</p>
                                <p className='mb-0 text-muted fs-4'>10.00Am to 10.00PM</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-start mb-3 mt-5'>
                            <div>
                                <GiClockwork className='fs-1 primary-c-color me-3' />
                            </div>
                            <div>
                                <h4 className='mb-0 fw-bold fs-3 primary-c-color'>Close Hour</h4>
                                <p className='mb-0 text-muted fs-4'>Friday Office Close</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 my-5">
                        <h5 className='fw-bold'>Contact Us</h5>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='d-flex justify-content-lg-around'>
                                <input placeholder='Full Name' className='d-block outline-a border-0 w-100 px-3 py-2 fs-6 rounded-3 me-2 my-2'  {...register("example")} />
                                <input placeholder='Subject' className='d-block outline-a border-0 px-3 py-2 fs-6 rounded-3 w-100 ms-2 my-2' {...register("exampleRequired", { required: true })} />
                            </div>
                            <div className='d-flex justify-content-lg-around'>
                                <input placeholder='Your Email' className='d-block outline-a border-0 px-3 py-2 fs-6 rounded-3 w-100 me-2 my-2'  {...register("example")} />
                                <input placeholder='Phone' className='d-block w-100 outline-a border-0 px-3 py-2 fs-6 rounded-3 ms-2 my-2' {...register("exampleRequired", { required: true })} />
                            </div>
                            <div>
                                <textarea placeholder='Message' rows="8" className='d-block outline-a border-0 px-3 py-2 fs-6 rounded-3 w-100 my-2' {...register("exampleRequired", { required: true })} />
                            </div>
                            <input className='button-design' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;