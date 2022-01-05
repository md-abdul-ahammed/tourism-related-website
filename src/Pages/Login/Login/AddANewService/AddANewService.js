import { useForm } from "react-hook-form";
import React, { useState, useMemo } from 'react'
import countryList from 'react-select-country-list'
import { AiOutlineCloudUpload } from 'react-icons/ai'



const AddANewService = () => {
    const [image, setImage] = useState(null)
    const options = useMemo(() => countryList().getData(), []);
    const [isSpecial, setIsSpecial] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();



    const handleSpecialChange = (e) => {
        setIsSpecial(e.target.value)
    }


    const onSubmit = data => {
        const formData = new FormData();
        if (isSpecial) {
            formData.append('name', data.name);
            formData.append('image', image);
            formData.append('days', data.days);
            formData.append('featured', data.featured);
            formData.append('long_description', data.long_description);
            formData.append('country', data.country);
            formData.append('night', data.night);
            formData.append('price', data.price);
            formData.append('short_description', data.short_description);
            formData.append('special_price', data.special_price);
        } else {
            formData.append('name', data.name);
            formData.append('image', image);
            formData.append('days', data.days);
            formData.append('featured', data.featured);
            formData.append('long_description', data.long_description);
            formData.append('country', data.country);
            formData.append('night', data.night);
            formData.append('price', data.price);
            formData.append('short_description', data.short_description);
            formData.append('special_price', data.special_price = 'undefined');
        }


        fetch('https://thawing-eyrie-67434.herokuapp.com/services', {

            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("SuccessFully Added Service");
                    reset()
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

    };



    // console.log(options);


    return (
        <div className="container py-5">
            <div>
                <h1 className='fw-bold primary-c-color text-center mb-4'>Add a new service</h1>
            </div>
            <form className='row gy-4 container ' onSubmit={handleSubmit(onSubmit)}>
                <div className='col-md-6'>
                    <label >Service Name</label>
                    <input style={{ height: "1.75rem" }} placeholder='Service Name' className='outline-a border-1 w-100 rounded p-2' {...register("name", { required: true })} />
                    {errors.name && <span className='text-danger error-customize mb-2'>This name field is required</span>}
                </div>

                <div className='col-md-6'>
                    <div className='row'>
                        <div className="col-md-6">
                            <label >How Many Days?</label>
                            <input type='number' style={{ height: "1.75rem" }} placeholder='Days' className='outline-a border-1 w-100 rounded p-2' {...register("days", { required: true })} />
                            {errors.days && <span className='text-danger error-customize mb-2'>This days field is required</span>}
                        </div>
                        <div className="col-md-6">
                            <label >How many Nights?</label>
                            <input type='number' placeholder='Night' style={{ height: "1.75rem" }} className='outline-a border-1 w-100 rounded p-2' {...register("night", { required: true })} />
                            {errors.night && <span className='text-danger error-customize mb-2'>This nights field is required</span>}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label >Short Description</label>
                    <textarea maxLength="100" placeholder='Short Description' className='outline-a border-1 w-100 rounded p-2' {...register("short_description", { required: true })} />
                    <p style={{ textAlign: 'right', fontSize: '.75rem' }} className='mb-2 p-0'>Max length 120 characters</p>
                    {errors.short_description && <span className='text-danger error-customize '>This short description field is required</span>}

                </div>

                <div className="col-md-6">
                    <label >Long Description</label>
                    <textarea placeholder='Long Description' className='outline-a border-1 w-100 rounded p-2' {...register("long_description", { required: true })} />
                    {errors.long_description && <span className='text-danger error-customize '>This log description field is required</span>}

                </div>

                <div className='col-md-6'>
                    <div className='row'>
                        <div className="col-md-6">
                            <label >Price Per person</label>
                            <input type='number' style={{ height: "1.75rem" }} placeholder='price per person' className='outline-a border-1 w-100 rounded p-2' {...register("price", { required: true })} />
                            {errors.price && <span className='text-danger error-customize mb-2'>This price field is required</span>}
                        </div>
                        <div className="col-md-6">
                            <label >Select Country Name</label>
                            <select style={{ height: "1.75rem" }} className='outline-a border-1 w-100 rounded px-2' {...register("country")}>
                                {
                                    options.map(option => <option key={option.value} value={option.label}>{option.label}</option>)
                                }
                            </select>
                            {errors.country && <span className='text-danger error-customize mb-2'>This country field is required</span>}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='row'>
                        <div className="col-md-6">
                            <label >Is It Featured Package?</label>
                            <select style={{ height: "1.75rem" }} className='outline-a border-1 w-100 rounded px-2' {...register("featured")}>
                                <option value='yes'>Yes</option>
                                <option value='no'>No</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label >Is It has Special Offer?</label>
                            <select onChange={handleSpecialChange} style={{ height: "1.75rem" }} className='outline-a border-1 w-100 rounded px-2'>
                                <option value={false}>No</option>
                                <option value={true}>Yes</option>

                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    {isSpecial === 'true' && <div>
                        <label className='text-center d-block' >Special Price Per person</label>
                        <input type='number' style={{ height: "1.75rem" }} placeholder='special price per person' className='outline-a border-1 w-75 mx-auto d-block rounded p-2' {...register("special_price", { required: true })}
                        />
                    </div>}
                    {errors.special_price && <span className='text-danger text-center d-block mb-2'>This special_price field is required</span>}
                </div>

                <div>
                    <input accept='image/*' onChange={e => setImage(e.target.files[0])} type='file' id='file' className='outline-a border-1 w-75 mx-auto d-block rounded p-2 d-none '
                    />
                    <div className='text-center'><label style={{ border: '1px solid white' }} htmlFor='file' className='text-center px-2 py-1' > <AiOutlineCloudUpload className='fs-3' /> {image ? image?.name : 'Upload Service Photo'}</label></div>
                    <p className='text-center text-warning mt-2'>(<span className='fw-bold'>N.B:</span> It takes a long time for pictures to come from the "mongodb", so for the time being I am adding the system but keeping it off.)</p>
                </div>
                <input className='mb-3 button-design py-2 border-1 rounded w-25 mx-auto px-2' type="submit" />
            </form>

        </div>
    );
};

export default AddANewService;



