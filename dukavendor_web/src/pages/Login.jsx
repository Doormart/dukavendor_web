import React from 'react'
import { useState } from 'react';
import Logo from '../img/logo.svg'
import Header_svg from '../img/header_svg.svg'
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate()
  const location = useNavigate()
  const pathMatchRoute = (route) =>{
    if(route == location.pathname){
     return true
    } 
 }
  return (
    <div className='dashbord-container'>
      <div className='side-nav-register'>
        <img src={Logo} />
        <section className='button-section'>
          <button className='reg-btn'onClick={()=> navigate('/sign-up')}>Sign up</button>
          <button  className='logo-btn' onClick={()=> navigate('/sign-in')}>Login</button>
        </section>
        <div className='flex-d'>
          <div className='box-btn'>
            <p className='inner-btn'>1</p>
          </div>
          <p className='text'>Business information</p>
        </div>
        <div class="vertical-line"></div>

        <div className='flex-d'>
          <div className='box-btn'>
            <p >2</p>
          </div>
          <p className='text'>Confirm contact information</p>
        </div>
      </div>
      <div className='main-section-register'>
        <img src={Header_svg} style={{ width: '100%' }} />
        <div className='form-div'>
          <h3>Personal information</h3>
          <p>Enter your Loin information</p>
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
            <div style={{textAlign:'center'}}>
                   <button className='undesable-btn' >Next</button>
                 </div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Login
