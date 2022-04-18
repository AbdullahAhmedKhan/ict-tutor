import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk, faStar } from '@fortawesome/free-solid-svg-icons';
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
            <div style={{ maxWidth: "500px" }} className='service bg-light container m-5 mx-auto'>
                <img src={gate} alt="" />
                <h4 className='pt-2'>Logic Gate Practical</h4>
                <h5 style={{ "color": "orange" }}>3500 tk</h5>
                <p><small>A logic gate is a device that acts as a building block for digital circuits. They perform basic logical functions that are fundamental to digital circuits. <br />
                    Here you will learn how to implement logic gate design with breadboard. AND Gate, OR Gate, NOT Gate, NAND Gate, NOR Gate, X-OR Gate, X-NOR Gate also you will learn some implementation of boolean expression by using this type of Gate. This course also will help you for physics 2nd paper practical of digital logic gate design. </small></p>
                <p className='text-center'><FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon></p>
                <button onClick={navigateToCheckout} className='btn w-100 btn-outline-success rounded d-grid mx-auto'>Buy Now</button>

            </div>
            <h2 className='text-center text-success'>10 Important Quotes About Technology</h2>
            <hr />
            <div className='container my-5'>
                <div class="card my-4">
                    <div className="card-header">
                        01
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Matt Mullenweg</h5>
                        <p className="card-text">“Technology is best when it brings people together.”</p>
                    </div>
                </div>
                <div class="card my-4">
                    <div className="card-header">
                        02
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Albert Einstein</h5>
                        <p className="card-text">“It has become appallingly obvious that our technology has exceeded our humanity.”</p>
                    </div>
                </div>
                <div class="card my-4">
                    <div className="card-header">
                        03
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Clive James</h5>
                        <p className="card-text">“It is only when they go wrong that machines remind you how powerful they are.”</p>
                    </div>
                </div>
                <div class="card my-4">
                    <div className="card-header">
                        04
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Tim Berners-Lee</h5>
                        <p className="card-text">“The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.”</p>
                    </div>
                </div>
                <div class="card my-4">
                    <div className="card-header">
                        05
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Frank Lloyd Wright</h5>
                        <p className="card-text">“If it keeps up, man will atrophy all his limbs but the push-button finger.”</p>
                    </div>
                </div>
                <div class="card my-4">
                    <div className="card-header">
                        06
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Lyndon B. Johnson</h5>
                        <p className="card-text">“If future generations are to remember us more with gratitude than sorrow, we must achieve more than just the miracles of technology. We must also leave them a glimpse of the world as it was created, not just as it looked when we got through with it.”</p>
                    </div>
                </div>
                <div class="card my-4">
                    <div className="card-header">
                        07
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Stewart Brand</h5>
                        <p className="card-text">“Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road.”</p>
                    </div>
                </div>
                <div class="card my-4">
                    <div className="card-header">
                        08
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Steve Jobs</h5>
                        <p className="card-text">“It's not a faith in technology. It's faith in people.”</p>
                    </div>
                </div>
                <div class="card my-4">
                    <div className="card-header">
                        09
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Christian Lous Lange</h5>
                        <p className="card-text">“Technology is a useful servant but a dangerous master.”</p>
                    </div>
                </div>
                <div class="card my-4">
                    <div className="card-header">
                        10
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Bill Gates</h5>
                        <p className="card-text">“The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.”</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;