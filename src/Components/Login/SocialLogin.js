import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import googleIcon from '../../images/google.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement =
            <p className='text-danger'>Error: {error?.message}</p>
    }
    if (loading) {
        return <p className='text-light'>Loading...</p>;
    }
    if (user) {
        navigate('/');
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className='bg-dark w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline-dark w-100 fw-bold'><img width="35" className='mx-1' src={googleIcon} alt="" />Google Sign In</button>
            </div>
        </div >
    );
};

export default SocialLogin;
