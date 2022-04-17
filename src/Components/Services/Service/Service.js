import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Service.css';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToCheckout = id => {
        navigate('/checkout');
    }
    return (
        <div className='service bg-light'>
            <img src={img} alt="" />
            <h4 className='pt-2'>{name}</h4>
            <h5 style={{ "color": "orange" }}>${price}</h5>
            <p><small>{description}</small></p>
            <p className='text-center'><FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='text-warning' icon={faStarHalfStroke}></FontAwesomeIcon></p>
            <button onClick={navigateToCheckout} className='btn w-100 btn-outline-success rounded d-grid mx-auto'>Buy Now</button>

        </div>
    );
};

export default Service;