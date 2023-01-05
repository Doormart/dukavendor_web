import React from 'react'
import { useState, useRef } from 'react';
import Logo from '../img/logo.svg'
import Header_svg from '../img/header_svg.svg'
import Good from '../img/good.svg'
import { useNavigate } from 'react-router-dom';
function Comfirmation() {
    const navigate = useNavigate()
    const location = useNavigate()
    const pathMatchRoute = (route) => {
        if (route == location.pathname) {
            return true
        }
    }
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]).current;

    const handleChange = (event, index) => {
        const newOtp = [...otp];
        newOtp[index] = event.target.value;
        setOtp(newOtp);

        if (event.target.value) {
            inputRefs[index + 1].focus();
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Submit the OTP code to the server
    };




    return (
        <div className='dashbord-container'>
            <div className='side-nav-register'>
                <img src={Logo} />
                <section className='button-section'>
                    <button className='reg-btn'onClick={()=> navigate('/')}>Sign up</button>
                    <button className='logo-btn'onClick={()=> navigate('/sign-in')}>Login</button>
                </section>
                <div className='flex-d'>
                    <div className='box-btn'>
                        <p className='inner-btn'>{pathMatchRoute('/otp') ?1 : <img width='20px' src={Good}/>}</p>
                    </div>
                    <p className='text'>Business information</p>
                </div>
                <div class="vertical-line"></div>

                <div className='flex-d'>
                    <div className='box-btn'>
                        <p style={{paddingTop:'10px'}}>2</p>
                    </div>
                    <span className='text'>Confirm contact information</span>
                </div>
            </div>
            <div className='main-section-register'>
                <img src={Header_svg} style={{ minWidth: '100%' }} />
                <div className='form-div'>
                    <h3>Confirm contact information</h3>
                    <p className='text-p'>Verify your contact information</p>
                    <h4>An OTP code has been sent to your email and phone number, enter the code to verify your contact information </h4>
                    <div class="container" style={{paddingTop:'60px'}}>
                        <form onSubmit={handleSubmit}>
                            {otp.map((value, index) => (
                                <div key={index} className="otp-box">
                                    <input
                                        className='otp-input'
                                        type="text"
                                        maxLength="1"
                                        ref={(ref) => (inputRefs[index] = ref)}
                                        onChange={(event) => handleChange(event, index)}
                                        value={value}
                                    />
                                </div>
                            ))}<br/>
                            <button type="submit" className='undesable-btn' disabled={otp.includes('')}>
                            Verify contact information
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Comfirmation
