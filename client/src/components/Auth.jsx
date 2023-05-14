import React, { useState } from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios'
import signinImage from '../assets/signup.jpg'

const initailState = {
    fullname : '',
    username : '',
    phoneNumber : '',
    avatarURL : '',
    password : '',
    confirmPassword : ''
}

const Auth = () => {
    const[form,setForm] = useState(initailState)
    const[isSignup,setIsSignup] = useState(true)

    console.log(form)
    const handleFormData = (e) =>{ 
        setForm({...form,[e.target.name] : e.target.value})
    }

    const switchMode = () =>{
        setIsSignup((preisSignup)=> !preisSignup)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        alert()
    }

  return (
    <div className='auth-form-container'>
        <div className='auth-form-container-fields'>
            <div className="auth-form-container-fields-content">
                <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
                <form onSubmit={handleSubmit}>
                    {
                        isSignup && (
                            <div className="auth-form-container-fields-content-input">
                                <label htmlFor="fullname">Full Name</label>
                                <input 
                                    name='fullname'
                                    type='text'
                                    placeholder='Full Time'
                                    onChange={handleFormData}
                                    required
                                />
                            </div>
                        )
                    }
                    <div className="auth-form-container-fields-content-input">
                        <label htmlFor="username">Username</label>
                        <input 
                            name="username" 
                            type="text"
                            placeholder="Username"
                            onChange={handleFormData}
                            required
                        />
                    </div>
                    {
                        isSignup && (
                            <div className="auth-form-container-fields-content-input">
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input 
                                    name="phoneNumber" 
                                    type="text"
                                    placeholder="Phone Number"
                                    onChange={handleFormData}
                                    required
                                />
                            </div>
                        )
                    }
                    {
                        isSignup && (
                            <div className="auth-form-container-fields-content-input">
                                <label htmlFor="avatarURL">Avatar URL</label>
                                <input 
                                    name="avatarURL" 
                                    type="text"
                                    placeholder="Avatar URL"
                                    onChange={handleFormData}
                                    required
                                />
                            </div>
                        )
                    }
                    <div className="auth-form-container-fields-content-input">
                        <label htmlFor="password">Password</label>
                        <input 
                            name="password" 
                            type="password"
                            placeholder="Password"
                            onChange={handleFormData}
                            required
                        />
                    </div>
                    {
                        isSignup && (
                            <div className="auth-form-container-fields-content-input">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input 
                                    name="confirmPassword" 
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={handleFormData}
                                    required
                                />
                            </div>
                        )
                    }
                    <div className="auth-form-container-fields-content-button">
                        <button>{isSignup ? "Sign Up" : "Sign In"}</button>
                    </div>
                </form>


                <div className="auth-form-container-fields-account">
                    <p>
                        {
                            isSignup ? "Already have an account?" 
                            : "Don't have an account?"
                        }
                        <span onClick={switchMode}>
                            {isSignup ? 'Sign In' : 'Sign Up'}
                        </span>
                    </p>
                </div>


            </div>
        </div>

        <div className="auth-form-container-image">
            <img src={signinImage} alt="sign in" />
        </div>
    </div>
  )
}

export default Auth