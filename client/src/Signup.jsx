import React, { useState } from "react";
import { useContext } from 'react';
import { UserContext } from './UserContext';
import { Link } from "react-router-dom";
import axios from "axios";
import './register.css';
import { useNavigate } from "react-router-dom";

function SignUp() {
    var [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const { setUserName } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', { name, email, password })
        .then(result => {
            console.log(result);
            console.log(name);
            if (result.data === 'Success') {
                sessionStorage.setItem('name',name);
                setUserName(name);
            }                navigate('/login');

            
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="register-page">
            <div className="register-form">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name">
                        <strong>Name</strong>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      autoComplete="off"
                      name="email"
                      className="form-control rounded-0"
                      onChange={(e) => setName(e.target.value)}
                    />

                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      autoComplete="off"
                      name="email"
                      className="form-control rounded-0"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">
                        <strong>Password</strong>
                    </label>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      className="form-control rounded-0"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0">
                    Register
                </button>
                </form>
                <p>Already Have an Account</p>
                <Link to="/login" className="btn btn-default border w-100 bg-dark rounded-0 text-decoration-none">
                    Login
                </Link>
                
            </div>
        </div>
    );
}

export default SignUp;