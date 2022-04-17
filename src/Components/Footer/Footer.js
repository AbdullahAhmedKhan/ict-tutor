import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <p className='bg-dark text-secondary p-3 text-center my-0'>&copy; All right reserved by Abdullah || {year}</p>
        </div>
    );
};

export default Footer;