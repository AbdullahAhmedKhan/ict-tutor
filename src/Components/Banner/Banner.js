import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className=''>
            <div className='banner'>

                <div className='rounded bg-img mx-3'>
                    <h2 className=''>Information & Communications Technology</h2>
                    <hr />
                    <p className='me-3 my-3'>It covers any product that will store, retrieve, manipulate, transmit, or receive information electronically in a digital form.</p>
                    <button className='btn btn-success'><a className='text-decoration-none text-light' target='_black' href="https://en.wikipedia.org/wiki/Information_and_communications_technology">More Learn<FontAwesomeIcon className='ms-2' icon={faArrowRight}></FontAwesomeIcon></a></button>
                </div>
            </div>
            {/* <div className='w-50'><img className='img-fluid rounded-3 border border-4 border-dark' src={banner} alt="" /></div> */}
        </div>
    );
};

export default Banner;