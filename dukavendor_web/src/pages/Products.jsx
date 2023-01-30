import React from 'react'
import Dashboard from './Dashboard'
import { useState } from 'react';
import CloseModal from '../img/closeModal.svg'
import OpenModal from '../img/openModal.svg'

function Products() {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [buisiness, setBuisines] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [password2, setPassword2] = useState('');
  const [address, setAddress] = useState('');
  const [select, setSelect] = useState('');
  const [number, setNumber] = useState('');
  const [formError, setFormError] = useState('');
  const [inputType, setInputType] = useState('password');
  const handleSubmit = (event) => {
    event.preventDefault();
    if (buisiness === '' || password === '' ||  select === '' || number === ''|| email ===''|| password2==='' || address==='') {
      setFormError('All fields are required');
    } else {
      setFormError('');
      // valid correct
    }
  };
  return (
    <Dashboard>
      <div style={{ height: '100vh' }}>
        {showModal && (
          <div style={{
            position: 'fixed',
            width:'100vh',
            height:'auto',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#F8F8F8',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
            borderRadius: '15px',
            // padding:'45px'
          }}>
             <h3 style={{ backgroundColor:'white',borderRadius: '15px', padding:'30px 20px 30px 45px'}}>Add product</h3>
            <div style={{padding:'20px 45px 45px 45px'}}>
            <img  style={{position:'absolute',right: '-25px', top: '-25px',width:'10%'}} src={CloseModal} onClick={handleCloseModal} />
            <div class="row">
              <div className='int'>
                <label className='greysmallesttext'>Business</label>
                <input class="input" type="text" placeholder="enter business name"  value={buisiness} onChange={(event) => setBuisines(event.target.value)} required/>
              </div>
            </div>
            <div class="row">
              <div className='int'>
                <label className='greysmallesttext'>Email address</label>
                <textarea class="input" type="email" placeholder="example@gmail.com" value={email} onChange={(event) => setEmail(event.target.value)} required/>
              </div>
            </div>
            <div class="row">
              <div className='int'>
                <label className='greysmallesttext'>Password</label>
                <div style={{display:'flex', justifyContent:'space-between'}} class="input"> 
                  <input className='passwordinput'  type={inputType} placeholder="enter password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                </div>
              </div>
              <div className='int'>
                <label className='greysmallesttext'>Vendor category</label>
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
            </div>
          </div> 
        )}
      </div>
      <img onClick={handleOpenModal} style={{position:'absolute', right:'50px'}} src={OpenModal} />
    </Dashboard>
  )
}

export default Products
