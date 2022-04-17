
import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const goRegister = () => {
        navigate('/register');
    }
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleLogin = event => {
        event.preventDefault();
    }
    return (
        <div className='mt-0 login-container'>
            <h1 className='text-center pt-5 text-light'>Please Login!</h1>
            <div className='mx-auto my-2 login-text p-5'>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" ref={emailRef} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
                    </Form.Group>
                    <Button className='w-100' variant="dark" type="submit">
                        Login
                    </Button>
                    <div className='text-center mt-4'>
                        <span className='me-2'>New to ICT Tutor?</span> <span onClick={goRegister} style={{ cursor: "pointer" }} className='text-dark fw-bold border border-3 p-2 border-dark rounded-3'>Please register</span>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Login;