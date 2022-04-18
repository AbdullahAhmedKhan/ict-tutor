import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAsterisk, faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import { useNavigate } from 'react-router-dom';
import gate from '../../images/gate.jpg';

const Home = () => {
    const navigate = useNavigate();
    const navigateToCheckout = () => {
        navigate('/checkout');
    }
    return (
        <div style={{ minHeight: "100vh" }} className=''>
            <Banner></Banner>
            <Services></Services>
            <h1 className='text-center mt-5 text-warning bg-light py-3'><FontAwesomeIcon icon={faAsterisk}></FontAwesomeIcon><FontAwesomeIcon icon={faAsterisk}></FontAwesomeIcon><FontAwesomeIcon icon={faAsterisk}></FontAwesomeIcon> Special Course</h1>
            <div style={{maxWidth:"500px"}} className='service bg-light container m-5 mx-auto'>
                <img src={gate} alt="" />
                <h4 className='pt-2'>Logic Gate Practical</h4>
                <h5 style={{ "color": "orange" }}>3500 tk</h5>
                <p><small>A logic gate is a device that acts as a building block for digital circuits. They perform basic logical functions that are fundamental to digital circuits. <br />
                Here you will learn how to implement logic gate design with breadboard. AND Gate, OR Gate, NOT Gate, NAND Gate, NOR Gate, X-OR Gate, X-NOR Gate also you will learn some implementation of boolean expression by using this type of Gate. This course also will help you for physics 2nd paper practical of digital logic gate design. </small></p>
                <p className='text-center'><FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon></p>
                <button onClick={navigateToCheckout} className='btn w-100 btn-outline-success rounded d-grid mx-auto'>Buy Now</button>

            </div>
        </div>
    );
};

export default Home;