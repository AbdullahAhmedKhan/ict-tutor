import React from 'react';
import './About.css';
import profile from '../../images/profile.png';
const About = () => {
    return (
        <div className='about-div' style={{ minHeight: "100vh" }}>
           <div className='main-container mx-5'>
               <div className='div-text'>
                   <h2>ABDULLAH AHAMMED KHAN</h2>
                   <hr className='me-2'/>
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque nesciunt iusto obcaecati, veniam officia fuga alias repudiandae ducimus praesentium perspiciatis?</p>
                   <button className='btn btn-outline-dark mb-3'>Send Message</button>
               </div>
               <div className='img-container'>
                   <img src={profile} alt="" />
               </div>
           </div>
        </div>
    );
};

export default About;