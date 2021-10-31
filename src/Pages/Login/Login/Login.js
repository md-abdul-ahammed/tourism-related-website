import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { signInWithGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation()
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((result) => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className='my-5 py-5'>
            <div className='container d-flex justify-content-center my-5 pt-5 align-items-center'>
                <button className='button-design fs-4' onClick={handleGoogleLogin}><FcGoogle className='fs-2' />Login With Google</button>
            </div>
        </div>
    );
};

export default Login;