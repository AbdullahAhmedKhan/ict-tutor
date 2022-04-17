import React from 'react';
import './About.css';
import profile from '../../images/profile.png';
const About = () => {
    return (
        <div className='about-div' style={{ minHeight: "100vh" }}>
            <div className='main-container mx-5'>
                <div className='div-text'>
                    <h2><span className='text-light fw-bold fs-1 bg-dark px-2 mx-1 rounded'>A</span>BDULLAH AHAMMED KHAN</h2>
                    <hr className='me-2' />
                    <p className='my-0'>I am a fast learner and like to work with new technologies. I feel comfortable working with a team. Creative works, advance UI my favorite zone. </p>
                    <small><span className='fw-bold text-success'>Educational Qualification:</span> BSc. in Computer Science & Engineering</small> <br />
                    <small><span className='fw-bold text-success'>Age:</span> 24</small> <br />
                    <small><span className='fw-bold text-success'>Religion:</span> Islam</small> <br />
                    <small><span className='fw-bold text-success'>Address:</span> Dhaka, Bangladesh</small> <br />

                    <button className='btn btn-success mt-1 '><a target='_blank' className='text-decoration-none text-light' href="https://www.facebook.com/AbdullahAhmedKha">Send Message</a></button>
                </div>
                <div className='img-container'>
                    <img src={profile} alt="" />
                </div>
            </div>
            <div className='container question-container'>
                <div className="question">
                    <h4 className='text-success'>My goal</h4>
                    <hr />
                    <p>I hope that I will work as a backend engineer one day. But this time I'm working with frontend section. I wish I will work with a team for a large commercial project. My dream is to work in a giant company as a software engineer, to provide service for our users.</p>
                </div>
                <div className="question">
                    <h4 className='text-success'>My attempts to achieve the goal</h4>
                    <hr />
                    <p>Nowadays I am learning some technologies and some frameworks. I working with medium level project where needed some functional options and interactions. By practicing functional works my skills are improving day by day. We know that "Practices makes a man perfect" so everyday should have to pass time with coding. </p>
                </div>
            </div>
        </div>
    );
};

export default About;