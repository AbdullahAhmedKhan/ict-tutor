import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import checkout from '../../images/checkout.jpg';
import './Checkout.css';

const Checkout = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        toast.success(`Thanks ${name}. Your order received.`);
        // modal

    }
    const emailRef = useRef('');
    const nameRef = useRef('');
    const contactRef = useRef('');
    const addressRef = useRef('');
    return (
        <div style={{ minHeight: "100vh" }} className="container">
            <h1 className='mt-5 px-4'>Checkout Please! </h1>
            <hr className='bg-dark mx-4' />
            <div className='checkout-container my-3'>
                <div>
                    <img className='img-fluid' src={checkout} alt="" width='700' />
                </div>
                <div className='w-75 mx-auto'>
                    <form onSubmit={handleSubmit} style={{}} className='border border-2 p-3 rounded shadow-lg bg-dark bg-opacity-75 text-light'>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Your Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" ref={nameRef} required />

                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Service Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" ref={emailRef} required />

                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Contact No</label>
                            <input type="number" className="form-control" id="exampleInputEmail1" ref={contactRef} required />

                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Your Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" ref={emailRef} required />

                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Your Address</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" ref={addressRef} required />

                        </div>
                        <button type="submit" className="btn btn-success w-100"><FontAwesomeIcon className='mx-2' icon={faCartShopping}></FontAwesomeIcon>Place Order</button>
                        <ToastContainer></ToastContainer>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;