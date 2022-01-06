import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { AiTwotoneStar, AiOutlineStar, AiOutlinePicture } from "react-icons/ai";
import { BiCircle, BiBusSchool } from "react-icons/bi";
import { GoChevronRight } from "react-icons/go";
import { VscNotebookTemplate } from "react-icons/vsc";
import { BsClockHistory, BsCheck } from "react-icons/bs";
import { IoFootstepsOutline, IoLanguageSharp } from "react-icons/io5";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { HiOutlineUserGroup, HiOutlineInformationCircle } from "react-icons/hi";
import { ImCross } from "react-icons/im";


const Booking = () => {
    const [service, setService] = useState({})
    const { serviceId } = useParams();
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const onSubmit = data => {
        data.login_user = user.email;
        data.service = service;
        data.status = "pending";
        fetch('https://thawing-eyrie-67434.herokuapp.com/order', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        alert("SuccessFully Booked")
        reset()
    }

    useEffect(() => {
        fetch(`https://thawing-eyrie-67434.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])

    return (
        <div>
            <div className='n-mt-3 mb-5 d-flex  justify-content-center align-items-center'>
                <div>
                    <h1 className='fs-1 fw-bold'>Tour Package Details</h1>
                    <p className='fs-5 fw-bold text-center'>Home <span className='primary-c-color'><GoChevronRight />Package Details </span></p>
                </div>
            </div>
            <div className='row container mx-auto py-5 '>
                <div className='col-md-8'>
                    <div>
                        <img className='cropped rounded-3' src={service.image} alt="" />
                    </div>
                    {/* <div className='text-center'>
                        <h3 className='mt-5 fw-bold primary-c-color'>{service.name}</h3>
                        <p>{service.description}</p>
                        <h4>Price: <span className='fs-2 primary-c-color'>${service.price}</span></h4>
                        <h5 className='mb-0'><AiTwotoneStar className='fs-3 primary-c-color' /> {service.rating}</h5>
                    </div> */}
                    <div className='mt-5 d-flex justify-content-between align-items-center'>
                        <div>
                            <h1 className='fs-2'>Western Express Northbound</h1>
                            <h2 className='fs-5 text-muted mt-2'><MdOutlineAddLocationAlt className='fs-5 text-muted' /> {service.name}</h2>
                        </div>
                        <div>
                            <p className='mb-0 d-flex justify-content-center '>Excellent</p>
                            <p className='primary-c-color d-flex justify-content-center mb-0'><span><AiTwotoneStar /></span><span><AiTwotoneStar /></span><span><AiTwotoneStar /></span><span><AiTwotoneStar /></span><span><AiOutlineStar /></span></p>
                            <p className='d-flex justify-content-center'>800 Review</p>
                        </div>
                    </div>
                    <div className='row border mx-0 border-start-0 py-3 my-lg-2 mb-sm-4 border-end-0 border-1'>
                        <div className="col-md-6 d-flex justify-content-around">
                            <div className='d-flex justify-content-center align-items-center'>
                                <div>
                                    <BsClockHistory className='fs-2 me-3 primary-c-color' />
                                </div>
                                <div>
                                    <h1 className='m-0 fs-5'>Duration</h1>
                                    <p className='m-0 text-secondary fw-bold cfs-7'>Daily Tour</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <div>
                                    <IoFootstepsOutline className='fs-2 me-3 primary-c-color' />
                                </div>
                                <div>
                                    <h1 className='m-0 fs-5'>Tour type</h1>
                                    <p className='m-0 text-secondary fw-bold cfs-7'>{service.days} Days</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-around">
                            <div className='d-flex justify-content-center align-items-center'>
                                <div>
                                    <HiOutlineUserGroup className='fs-2 me-3 primary-c-color' />
                                </div>
                                <div>
                                    <h1 className='m-0 fs-5'>Group Size</h1>
                                    <p className='m-0 text-secondary fw-bold cfs-7'>30 People</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <div>
                                    <IoLanguageSharp className='fs-2 me-3 primary-c-color' />
                                </div>
                                <div>
                                    <h1 className='m-0 fs-5'>Languages</h1>
                                    <p className='m-0 text-secondary fw-bold cfs-7'>Any Languages</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='col-md-4 px-4 pt-5 c-shadow'>
                    <h4 className='py-3 fw-bold primary-c-color'>Book This Package</h4>
                    <form className='d-flex flex-column align-content-center justify-content-center' onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Your Full Name' className='mb-3 outline-a py-2 border-1 rounded px-2' defaultValue={user.displayName} {...register("name", { required: true })} />
                        {errors.name && <span className='text-danger error-customize mb-2'>This name field is required</span>}

                        <input placeholder='Your Email' className='mb-3 outline-a py-2 border-1 rounded px-2' defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className='text-danger error-customize mb-2'>This email field is required</span>}

                        <input type='number' placeholder='Phone' className='mb-3 outline-a py-2 border-1 rounded px-2' {...register("phone", { required: true })} />
                        {errors.phone && <span className='text-danger error-customize mb-2'>This phone field is required</span>}

                        <select className='mb-3 py-2 border-1 rounded px-2' {...register("ticket", { required: true })}>
                            <option value="Ticket Type" >Ticket Type</option>
                            <option value="Travel With Bus">Travel With Bus</option>
                            <option value="Travel With Plane">Travel With Plane</option>
                        </select>
                        {errors.ticket && <span className='text-danger error-customize mb-2'>This Ticket Type field is required</span>}

                        <input type='date' className='mb-3 outline-a py-2 border-1 rounded px-2' {...register("date", { required: true })} />
                        {errors.date && <span className='text-danger error-customize mb-2'>Must be added your destination data</span>}
                        <textarea placeholder='Your Message' className='mb-3 outline-a py-2 border-1 rounded px-2' {...register("message", { required: true })} />
                        {errors.message && <span className='text-danger error-customize mb-2'>You have to write something</span>}
                        <input className='mb-3 py-2 border-1 button-design rounded px-2' type="submit" />
                    </form>
                </div>
            </div>
            <div className="row container mx-auto">
                <div className="col-md-8">
                    <div>
                        <div className="bloc-tabs">
                            <button
                                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(1)}
                            >
                                <span className='fs-5 fw-bold'><HiOutlineInformationCircle className='fs-3' /> Information</span>
                            </button>
                            <button
                                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(2)}
                            >
                                <span className='fs-5 fw-bold'><VscNotebookTemplate className='fs-5 me-1' /> Travel Plan</span>
                            </button>
                            <button
                                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(3)}
                            >
                                <span className='fs-5 fw-bold'><AiOutlinePicture className='fs-4 me-1' /> Our Gallery</span>
                            </button>
                        </div>

                        <div className="content-tabs">
                            <div
                                className={toggleState === 1 ? "content  active-content" : "content"}
                            >
                                <div>
                                    <h3 className='fw-bold my-4'>Overview</h3>
                                    <p className='text-muted'>
                                        Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla. Duis aliquet varius mauris eget rutrum. Nullam sit amet justo consequat, bibendum orci in, convallis enim. Proin convallis neque viverra finibus cursus. Mauris lacinia lacinia erat in finibus. In non enim libero.Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
                                    </p>
                                </div>
                                <div>
                                    <h3 className='fw-bold mt-4 mb-3'>Highlight</h3>
                                    <p className='text-muted'><span className='primary-c-color me-3'><BiCircle /> </span>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p>
                                    <p className='text-muted'><span className='primary-c-color me-3'><BiCircle /> </span>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p>
                                    <p className='text-muted'><span className='primary-c-color me-3'><BiCircle /> </span>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p>
                                </div>

                                <table class="table text-muted fs-5 table-bordered">
                                    <tbody>
                                        <tr>
                                            <th className='text-white' scope="row">Destination</th>
                                            <td>New York City</td>
                                        </tr>
                                        <tr>
                                            <th className='text-white' scope="row">Depature</th>
                                            <td>Yes Required</td>
                                        </tr>
                                        <tr>
                                            <th className='text-white' scope="row">Depature</th>
                                            <td colspan="2">01 April, 2021 10.00AM</td>
                                        </tr>
                                        <tr>
                                            <th className='text-white' scope="row">Return Time</th>
                                            <td colspan="2">08 April, 2021 10.00AM</td>
                                        </tr>
                                        <tr>
                                            <th className='text-white' scope="row">Included</th>

                                            <td colspan="2">
                                                <p className='my-2'><BsCheck className='primary-c-color fs-4' />  Specilaized Bilingual Guide</p>
                                                <p className='my-2'><BsCheck className='primary-c-color fs-4' />  Private Transport</p>
                                                <p className='my-2'><BsCheck className='primary-c-color fs-4' />  Entrance Fees</p>
                                                <p className='my-2'><BsCheck className='primary-c-color fs-4' />  Box Lunch,Water,Dinner and Snacks</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className='text-white' scope="row">Excluded</th>
                                            <td colspan="2">
                                                <p className='my-2'><ImCross className='text-danger ms-1 me-2 fs-6' />  Additional Services</p>
                                                <p className='my-2'><ImCross className='text-danger ms-1 me-2 fs-6' />  Insurance</p>
                                                <p className='my-2'><ImCross className='text-danger ms-1 me-2 fs-6' />  Drink</p>
                                                <p className='my-2'><ImCross className='text-danger ms-1 me-2 fs-6' />  Tickets</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" class="text-center fw-bold fs-4"><BiBusSchool className='primary-c-color fs-3 me-2' /> Travel With Bus</td></tr>
                                    </tbody>
                                </table>



                            </div>

                            <div
                                className={toggleState === 2 ? "content  active-content" : "content"}
                            >
                                <h2>Content 2</h2>
                                <hr />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                                    voluptatum qui adipisci.
                                </p>
                            </div>

                            <div
                                className={toggleState === 3 ? "content  active-content" : "content"}
                            >
                                <h2>Content 3</h2>
                                <hr />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                                    nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                                    Accusamus in quia odit aspernatur provident et ad vel distinctio
                                    recusandae totam quidem repudiandae omnis veritatis nostrum
                                    laboriosam architecto optio rem, dignissimos voluptatum beatae
                                    aperiam voluptatem atque. Beatae rerum dolores sunt.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">

                </div>
            </div>
        </div>
    );
};

export default Booking;