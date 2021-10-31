import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const [service, setService] = useState({})
    const { serviceId } = useParams();
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.login_user = user.email;
        data.service = service;
        data.status = "pending";
        fetch('http://localhost:5000/order', {
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
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])

    return (
        <div>
            <div className='row container mx-auto py-5 '>
                <div className='col-md-8'>
                    <div>
                        <img className='cropped rounded-3' src={service.img} alt="" />
                    </div>
                </div>
                <div className='col-md-4 p-4 rounded-3 shadow'>
                    <h4 className='py-3'>Book This Package</h4>
                    <form className='d-flex flex-column align-content-center justify-content-center' onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Your Full Name' className='mb-3 py-2 border-1 rounded px-2' defaultValue={user.displayName} {...register("name", { required: true })} />
                        {errors.name && <span className='text-danger error-customize mb-2'>This name field is required</span>}

                        <input placeholder='Your Email' className='mb-3 py-2 border-1 rounded px-2' defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className='text-danger error-customize mb-2'>This email field is required</span>}

                        <input type='number' placeholder='Phone' className='mb-3 py-2 border-1 rounded px-2' {...register("phone", { required: true })} />
                        {errors.phone && <span className='text-danger error-customize mb-2'>This phone field is required</span>}

                        <select className='mb-3 py-2 border-1 rounded px-2' {...register("ticket", { required: true })}>
                            <option value="Ticket Type" disabled >Ticket Type</option>
                            <option value="Travel With Bus">Travel With Bus</option>
                            <option value="Travel With Plane">Travel With Plane</option>
                        </select>
                        {errors.ticket && <span className='text-danger error-customize mb-2'>This Ticket Type field is required</span>}

                        <input type='date' className='mb-3 py-2 border-1 rounded px-2' {...register("date", { required: true })} />
                        {errors.date && <span className='text-danger error-customize mb-2'>Must be added your destination data</span>}
                        <textarea placeholder='Your Message' className='mb-3 py-2 border-1 rounded px-2' {...register("message", { required: true })} />
                        {errors.message && <span className='text-danger error-customize mb-2'>You have to write something</span>}
                        <input className='mb-3 py-2 border-1 rounded px-2' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;