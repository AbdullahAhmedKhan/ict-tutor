import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className=''>
            <div className='banner d-flex align-items-center justify-content-start'>
                <div className='p-5 ms-3'><h2 className=''>Information & Communications Technology</h2>
                    <p className='w-50 my-3'>It covers any product that will store, retrieve, manipulate, transmit, or receive information electronically in a digital form.</p>
                    <button className='btn btn-success'><a className='text-decoration-none text-light' target='_black' href="https://en.wikipedia.org/wiki/Information_and_communications_technology">More Learn</a></button>
                </div>
            </div>
            {/* <div className='w-50'><img className='img-fluid rounded-3 border border-4 border-dark' src={banner} alt="" /></div> */}
        </div>
    );
};

export default Banner;