import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

import './Login.css';
import SocialLogin from './SocialLogin';

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    if (user) {
        navigate(from, { replace: true });
    }
    if(loading){
        <p>Loading...</p>
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');

    }
    const goRegister = () => {
        navigate('/register');
    }
    return (
        <div className='mt-0 login-container'>
            <h1 className='text-center pt-5 text-light'>Please Login!</h1>
            <div className='mx-auto my-2 login-text p-5'>
                <Form onSubmit={handleSubmit}>
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
                        <span className='me-2'>Forget Password?</span> <span onClick={resetPassword} style={{ cursor: "pointer" }} className='text-dark fw-bold'>Reset Password</span>
                    </div>
                    <SocialLogin></SocialLogin>
                    <div className='mt-4'>
                        <span className='me-2'>New to ICT Tutor?</span> <span onClick={goRegister} style={{ cursor: "pointer" }} className='text-dark fw-bold border border-3 p-2 border-dark rounded-3'>Please register</span>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Login;