import { Button } from 'bootstrap';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import checkout from '../../images/checkout.jpg';

const Checkout = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }
    const emailRef = useRef('');
    const nameRef = useRef('');
    const contactRef = useRef('');
    const addressRef = useRef('');
    return (
        <div style={{ minHeight: "100vh" }} className="container">
            <h2>Checkout</h2>
            <div className='d-flex flex-sm-row'>
                <div>
                    <img src={checkout} alt="" width='500' />
                </div>
                <div className='w-75'>
                    <form onSubmit={handleSubmit} style={{}} className='border border-2 p-3 rounded shadow bg-light'>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Your Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" ref={nameRef} required />

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Service Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" ref={emailRef} required />

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Contact No</label>
                            <input type="number" class="form-control" id="exampleInputEmail1" ref={contactRef} required />

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Your Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" ref={emailRef} required />

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Your Address</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" ref={addressRef} required />

                        </div>
                        <button type="submit" class="btn btn-primary w-100">Place Order</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;