import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import sendSignupDetails from '../store/user_reducer';


const Register = () => {
    const navigate = useNavigate();
    const homePage = () => {
        navigate('/mainpage') , { replace: true }
    }

    const dispatch = useDispatch();
    const state = useSelector(state => state.user);
    console.log(state);
    const { signedUp } = state;
    const [signedUpSuccess , setSignedUpSuccess] = useState(signedUp);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const registerUser = (e) => {
        e.preventDefault();
        const newUser = {
            firstName,
            lastName,
            username
        }
        dispatch(sendSignupDetails(newUser));
        setFirstName('');
        setLastName('');
        setUsername('');
    }

    useEffect(() => {
        setSignedUpSuccess(() => signedUp);
        if(signedUp === 'up') {
            setTimeout(() => homePage() , 1000);
        }
    } , [state])


    return (
        <div className="register">
            <div className="register__container">
                <h1>Sign Up</h1>
                <form>
                    <h5>First Name</h5>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <h5>Last Name</h5>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <h5>Username</h5>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <button type="submit" onClick={registerUser} className="register__registerButton">Create your Account</button>
                </form>
            </div>
        </div>  
    )

}



export default Register;
