import React from 'react';
import { useForm } from "react-hook-form";

const AddANewService = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("http://localhost:5000/services", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("SuccessFully Added Service");
                    reset()
                }
            })
    };
    return (
        <div className="container">
            <form className='d-flex flex-column align-content-center container-fluid justify-content-center' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Service Name' className='mb-3 py-2 border-1 rounded px-2' {...register("name", { required: true })} />
                {errors.name && <span className='text-danger error-customize mb-2'>This name field is required</span>}

                <input placeholder='Days' className='mb-3 py-2 border-1 rounded px-2' {...register("days", { required: true })} />
                {errors.email && <span className='text-danger error-customize mb-2'>This email field is required</span>}

                <input placeholder='Night' className='mb-3 py-2 border-1 rounded px-2' {...register("night", { required: true })} />
                {errors.email && <span className='text-danger error-customize mb-2'>This email field is required</span>}

                <input type='number' placeholder='Price' className='mb-3 py-2 border-1 rounded px-2' {...register("price", { required: true })} />
                {errors.phone && <span className='text-danger error-customize mb-2'>This phone field is required</span>}

                <input placeholder='Image Url' className='mb-3 py-2 border-1 rounded px-2' {...register("img", { required: true })} />
                {errors.phone && <span className='text-danger error-customize mb-2'>This phone field is required</span>}

                <input placeholder='Rating' className='mb-3 py-2 border-1 rounded px-2' {...register("rating", { required: true })} />
                {errors.phone && <span className='text-danger error-customize mb-2'>This phone field is required</span>}

                <input placeholder='Description' className='mb-3 py-2 border-1 rounded px-2' {...register("description", { required: true })} />
                {errors.phone && <span className='text-danger error-customize mb-2'>This phone field is required</span>}

                <input className='mb-3 py-2 border-1 rounded px-2' type="submit" />
            </form>
        </div>
    );
};

export default AddANewService;