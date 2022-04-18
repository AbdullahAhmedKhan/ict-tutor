import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Register.css';
import SocialLogin from './SocialLogin';
const Register = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    if (user) {
        console.log(user);
        navigate('/');
    }
    const handleLogin = () => {
        navigate('/login');
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');
    }
    return (

        <div className='register-container'>
            <h1 className='text-center text-light pt-4'>Please Register!</h1>
            <div className='w-75 mx-auto my-1 register-text p-5'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full name</Form.Label>
                        <Form.Control type="text" placeholder="Full name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required ref={emailRef} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required ref={passwordRef} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">

                        <Form.Check onClick={() => setAgree(!agree)}  className={`ps-4 ${agree ? '' : 'text-danger'}`} htmlFor="terms" type="checkbox" label="Accept terms and conditions" />
                    </Form.Group>
                    <Button disabled={!agree} className='w-100' variant="dark" type="submit">
                        Register
                    </Button>
                    <SocialLogin></SocialLogin>
                    <div className='mt-4'>
                        <small className='me-1'>Already have an account?</small> <span onClick={handleLogin} style={{ cursor: "pointer", width: "115px" }} className='border border-dark border-3 rounded p-2 my-1 fw-bold'>Please login</span>
                    </div>
                </Form>
            </div>
        </div>

    );
};

export default Register;