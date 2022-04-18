import { Button } from 'bootstrap';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';

const Checkout = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }
    const emailRef = useRef('');
    return (
        <div style={{minHeight:"100vh"}} className="container">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit} style={{maxWidth:"500px"}} className='mx-auto border border-2 p-3 rounded shadow'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Your Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef} required/>
                        
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Service Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef} required/>
                        
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Contact No</label>
                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef} required/>
                        
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Your Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef} required/>
                        
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Your Address</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef} required/>
                        
                </div>
                <button type="submit" class="btn btn-primary w-100">Proceed Checkout</button>
            </form>
        </div>
    );
};

export default Checkout;