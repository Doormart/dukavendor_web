import React from 'react'
import { useState } from 'react';
import Logo from '../img/logo.svg'
import Header_svg from '../img/header_svg.svg'
import Remove from '../img/remove.svg'
import Plus from '../img/plus.svg'
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate()
  const location = useNavigate()
  const pathMatchRoute = (route) =>{
    if(route == location.pathname){
     return true
    } 
 }

  const [files, setFiles] = useState([]);

  const handleChange = (event) => {
    const newFiles = [...event.target.files];
    setFiles([...files, ...newFiles]);
  };
  const handleRemove = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  return (
    <div className='dashbord-container'>
      <div className='side-nav-register'>
        <img src={Logo} />
        <section className='button-section'>
          <button className='reg-btn'onClick={()=> navigate('/')}>Sign up</button>
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
          <span className='text'>Confirm contact information</span>
        </div>
      </div>
      <div className='main-section-register'>
        <img src={Header_svg} style={{ minWidth: '100%' }} />
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
          </div>
          <button className='undesable-btn' >Login</button>
        </div>
        
      </div>
    </div>
  )
}

export default Login
