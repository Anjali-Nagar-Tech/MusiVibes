import React from 'react'
import { useState } from "react";
import { useContext } from 'react';
import { UserContext } from './UserContext';
import { Link } from "react-router-dom";
import axios from "axios";
import './login.css';
import SignUp from './Signup';
import { useNavigate } from "react-router-dom";

function Login() {
    const { setuserName } = useContext(UserContext);
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(result => {console.log(result)
            
            if (result.data === "Success") {
                
                navigate('/userhome')
            }

        })
        .catch(err => console.log(err))
    }
    
    return (
        <div className="login-page">
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
           
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
                    Login
                </button>
                </form>
                <p>Don't have an Account</p>
                <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    SignUp
                </Link>
                
            </div>
        </div>
    );
}

export default Login;