import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div className='mb-5 mx-5 p-5 nl-shadow'>
            <div className='nl-title'>
                <h5 className='d-flex justify-content-center primary-c-color fw-bold'>Newsletter</h5>
                <h1 className='d-flex justify-content-center fw-bold'>Subscribe To Our Newsletter</h1>
                <h1 className='d-flex justify-content-center fw-bold'>For Latest Update</h1>
            </div>
            <div className="input-group w-50 mx-auto ">
                <input type="text" className="form-control" placeholder="Enter Your Email" />
                <button className='button-design d-flex align-items-center justify-content-between'>Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLetter;