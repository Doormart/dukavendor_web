import React from 'react'
import { useState } from 'react';
import Logo from '../img/logo.svg'
import Header_svg from '../img/header_svg.svg'
import Remove from '../img/remove.svg'
import Plus from '../img/plus.svg'
import Eye from '../img/eye.svg'
import { useNavigate } from 'react-router-dom';
function Register() {
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
  const [buisiness, setBuisines] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [password2, setPassword2] = useState('');
  const [address, setAddress] = useState('');
  const [select, setSelect] = useState('');
  const [number, setNumber] = useState('');
  const [formError, setFormError] = useState('');
  const [inputType, setInputType] = useState('password');
  function handleClick() {
    setInputType(inputType === 'password' ? 'text' : 'password');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (buisiness === '' || password === '' || files.length === 0 || select === '' || number === ''|| email ===''|| password2==='' || address==='') {
      setFormError('All fields are required');
    } else {
      setFormError('');
      // valid correct
    }
  };


  return (
    <div className='dashbord-container'>
      <div className='side-nav-register'>
        <img src={Logo} />
        <section className='button-section'>
          <button className='reg-btn' onClick={()=> navigate('/sign-up')}>Sign up</button>
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
          <div className={pathMatchRoute('/')?'inner-btn':'inner-btn-disabled'}>
            <p className='inner-btn'>2</p>
          </div>
          <span className={pathMatchRoute('/') ?'text':'text-disabled'}>Confirm contact information</span>
        </div>
      </div>
      <div className='main-section-register'>
        <img src={Header_svg} style={{ minWidth: '100%' }} />
        <div className='form-div'>
          <h3>Business information</h3>
          <p>Enter your business information</p>
          <div class="container">
            <div class="row">
              <div className='int'>
                <label>Business</label>
                <input class="input" type="text" placeholder="enter business name"  value={buisiness} onChange={(event) => setBuisines(event.target.value)} required/>
              </div>
              <div className='int'>
                <label>Vendor category</label>
                <div class="input">
                <select style={{width:'95%','::placeholder': { color: 'blue' }}}   placeholder="placeholder"  value={select} onChange={(event) => setSelect(event.target.value)} required>
                  <option value="" disabled>Select category</option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div className='int'>
                <label>Email address</label>
                <input class="input" type="email" placeholder="example@gmail.com" value={email} onChange={(event) => setEmail(event.target.value)} required/>
              </div>
              <div className='int'>
                <label>Phone number</label>
                <input class="input" type="number" placeholder="+2349054123250" value={number} onChange={(event) => setNumber(event.target.value)} required />
              </div>
            </div>
            <div className="row">
              <div className='int'>
                <label>Address</label>
                <input class="input" type="text" placeholder="enter your address" value={address} onChange={(event) => setAddress(event.target.value)} required />
              </div>
            </div>
            <div class="row">
              <div className='int'>
                <label>Password</label>
                <div style={{display:'flex', justifyContent:'space-between'}} class="input"> 
                  <input className='passwordinput'  type={inputType} placeholder="enter password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                  <img  onClick={handleClick} src={Eye} />
                </div>
              </div>
              <div className='int'>
                <label>Confirm password</label>
                <div style={{display:'flex', justifyContent:'space-between'}} class="input"> 
                  <input className='passwordinput'  type={inputType}  placeholder="confirm password" value={password2} onChange={(event) => setPassword2(event.target.value)}required />
                  <img  onClick={handleClick} src={Eye} />
                </div>
              </div>
            </div>
            {
              files.length > 0 ? <table className={files.length > 0 ? "file-table" : ''}>
                <thead>
                  <tr>
                    <th style={{ width: '300px' }}></th>
                    <th style={{ width: '300px' }}></th>
                    <th style={{ width: '40px' }}></th>
                  </tr>
                </thead>
                <tbody >
                  {typeof files === 'object' && files.length > 0 ? (
                    files.map((file, index) => (
                      <tr key={file.name}>
                        <td style={{ width: '40px', height: '40px', paddingLeft:'20px' }}>{file.name}</td>
                        <td>{(file.size / 1024 / 1024).toFixed(2)} MB</td>
                        <td>
                          <img src={Remove}
                            onClick={() => handleRemove(index)}
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3">No files selected</td>
                    </tr>
                  )}
                </tbody>
              </table> :
                <label className="file-input">
                  <h5>Upload proof of business </h5>
                  <p>(Receipts or CAC documents or social media page shot. Max 5MB)</p>
                  <p class="title">
                    Drag & drop files or <span className='span-text'>click here</span>
                  </p>
                  <input id="file-input" className='input-hidden' type="file"   multiple onChange={handleChange} />
                </label>
                }
                {files.length > 0 ?
                <label for="inputTag" className='label-hidden-input'>
                Add more files
                <img src={Plus} />
                <input id="inputTag" type="file" className='input-show' multiple onChange={handleChange} />
                <br />
                <span id="imageName"></span>
              </label>
              : ''}
                 {formError && <div className="error">{formError}</div>}
                 <div style={{textAlign:'center'}}>
                   <button className='undesable-btn' onClick={handleSubmit} >Next</button>
                 </div> 
          </div> 
        </div> 
      </div>
    </div>
  )
}

export default Register
