import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Register.css';
const Register = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    }
    return (

        <div className='register-container'>
            <h1 className='text-center text-light pt-4'>Please Register!</h1>
            <div className='w-75 mx-auto my-1 register-text p-5'>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full name</Form.Label>
                        <Form.Control type="text" placeholder="Full name" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept terms and conditions" />
                    </Form.Group>
                    <Button className='w-100' variant="dark" type="submit">
                        Register
                    </Button>
                    <div className='mt-4'>
                        <span className='me-2'>Already have an account?</span> <span onClick={handleLogin} style={{ cursor: "pointer" }} className='border border-dark border-3 rounded p-2 my-3 fw-bold'>Please login</span>
                    </div>
                </Form>
            </div>
        </div>

    );
};

export default Register;