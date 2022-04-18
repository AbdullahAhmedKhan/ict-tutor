import React from 'react';
import notfound from '../../images/notfound.png';
const NotFound = () => {
    return (
        <div style={{ minHeight: "100vh" }} className='text-center my-5'>
            <h1 className='text-danger'>404 Not Found</h1>
            <img className='img-fluid' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;