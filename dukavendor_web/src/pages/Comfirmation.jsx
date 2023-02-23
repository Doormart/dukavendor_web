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
				<div className='side-nav-register'>
					<img src={Logo} style={{ width: "90px" }} /><br /><br /><br /><br />
					<div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#D9D9D9', borderRadius: '10px', padding: "10px", justifyContent: "space-between", paddingLeft: '10px' }}>
						<button onClick={() => navigate('/sign-up')} className='small-button' style={{ backgroundColor: '#476A6F', height: '40px' }}>Sign up</button>
						<p onClick={() => navigate('/sign-in')} className='b-p' style={{ paddingRight: '15px' }}>Login</p>
					</div>
				{/* </div> */}
				<br/><br/>
				<div className='flex-d'>
					<div className='box-btn'>
						<p className='inner-btn'>{pathMatchRoute('/otp') ? 1 : <img width='20px' src={Good} />}</p>
					</div>
					<p className='text'>Business information</p>
				</div>
				<div class="vertical-line"></div>
				<div className='flex-d'>
					<div className='box-btn'>
						<p style={{ paddingTop: '9px' }}>2</p>
					</div>
					<span className='text'>Confirm contact information</span>
				</div>
			</div>
			</div>
			<div className='main-section-register'>
				<img src={Header_svg} style={{ width: '100%' }} />
				<div className='form-div' style={{ textAlign: "" }}>
					<h3>Confirm contact information</h3>
					<p className='greysmallesttext'>Verify your contact information</p>
					<h4>An OTP code has been sent to your email and phone number, enter the code to verify your contact information </h4>
					<div class="" style={{ paddingTop: '20px' }}>
						<form onSubmit={handleSubmit} style={{ textAlign: "" }}>
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
							))}<br /><br/><br/>
							<div>
								<div style={{ textAlign: 'center' }}>
									<button type="submit" className='undesable-btn' style={{ paddingLeft: '20px', paddingRight: '20px', width: '600px' }} disabled={otp.includes('')}>
										Verify contact information
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Comfirmation
