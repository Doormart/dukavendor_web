import React from 'react'
import { useState } from 'react';
import Logo from '../img/logo.svg'
import Header_svg from '../img/header_svg.svg'
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate()
  const location = useNavigate()
  const pathMatchRoute = (route) => {
    if (route == location.pathname) {
      return true
    }
  }
  return (
    <div className='dashbord-container'>
      <div className='side-nav-register'>
        <img src={Logo} style={{ width: "90px" }} /><br /><br /><br /><br /><br />
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#D9D9D9', borderRadius: '10px', padding: "10px", justifyContent: "space-between", paddingLeft: '25px' }}>
          <p onClick={() => navigate('/sign-up')} className='b-p'>Sign up</p>
          <button onClick={() => navigate('/sign-in')} className='small-button' style={{ backgroundColor: '#476A6F', height: '40px' }}>Login</button>
        </div>
      </div>
      <div className='main-section-register'>
        <img src={Header_svg} style={{ width: '100%' }} />
        <img className='mobile-logo' src={Logo} style={{ width: "90px" }} /><br /><br />
        <div className='form-div'>
        <div className='mobile-div-cont'>
          <div className='mobile-sign-up-btn' style={{ display: 'flex', alignItems: 'center', backgroundColor: '#D9D9D9', borderRadius: '10px', padding: "10px", justifyContent: "space-between", paddingLeft: '25px' }}>
            <p onClick={() => navigate('/sign-up')} className='b-p'>Sign up</p>
            <button onClick={() => navigate('/sign-in')} className='small-button' style={{ backgroundColor: '#476A6F', height: '40px' }}>Login</button>
          </div>
        </div>
          <h3>Login</h3>
          <p>Enter correct email & password</p>
          <div class="container">
            <div class="row">
              <div className='int'>
                <label>Email address</label>
                <input class="input" type="email" placeholder="example@gmail.com" />
              </div>
              <div className='int'>
                <label>Password</label>
                <input class="input" type="password" placeholder="enter password" />
              </div>
            </div>
            <br />
            <div style={{ textAlign: 'center' }}>
              <p>Forgot password? Reset password</p>
              <br />
              <div style={{ textAlign: 'center' }}>
                <button className='undesable-btn' >Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
