import React from 'react'
import Dashboard from './Dashboard'
import { useState } from 'react';
import CloseModal from '../img/closeModal.svg'
import Search from '../img/search.svg'
import Dropdown from '../img/dropdown.svg'
import OpenModal from '../img/openModal.svg'
import Dot from '../img/dot.svg'
import Food from '../img/food.svg'

function Products() {
  const data = [
    { id: 1, name: "Korede Jolly combo", amount: "N2,280.00" },
    { id: 2, name: "JKorede Chicken frenzy", amount: "N2,280.00" },
    { id: 3, name: "Big boy meat combo", amount: "N2,280.00" },
    { id: 4, name: "Sharwama bouqet combo", amount: "N2,280.00" },
    { id: 5, name: "Korede Jolly combo", amount: "N2,280.00" },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buisiness, setBuisines] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [password2, setPassword2] = useState('');
  const [address, setAddress] = useState('');
  const [select, setSelect] = useState('');
  const [number, setNumber] = useState('');
  const [formError, setFormError] = useState('');
  const [inputType, setInputType] = useState('password');
  const [searchQuery, setSearchQuery] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (buisiness === '' || password === '' || select === '' || number === '' || email === '' || password2 === '' || address === '') {
      setFormError('All fields are required');
    } else {
      setFormError('');
      // valid correct
    }
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter((item) => {
    return (
      !searchQuery ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.amount.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  return (
    <Dashboard>
      <div style={{ height: '100vh' }}>
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3 style={{ backgroundColor: 'white', borderRadius: '', padding: '30px 20px 30px 45px' }}>Add product</h3>
              <div style={{ padding: '20px 35px 35px 35px' }}>
                <img className="close-button" src={CloseModal} onClick={() => setIsModalOpen(false)} />
                <div class="row">
                  <div className='int'>
                    <label className='greysmallesttext'>Food name</label>
                    <input class="input" type="text" placeholder="e.g Jollof rice & turkey combo" value={buisiness} onChange={(event) => setBuisines(event.target.value)} required />
                  </div>
                </div>
                <div class="row">
                  <div className='int'>
                    <label className='greysmallesttext'>Description</label>
                    <textarea className='textarea'  type="email" placeholder="e.g This is jollof rice made with bazmatti rice, filled with shredded chicken, hotdog, turkey
and small beef" value={email} onChange={(event) => setEmail(event.target.value)} required />
                  </div>
                </div>
                <div class="row">
                  <div className='int'>
                    <label className='greysmallesttext'>Price</label>
                    <input class="input" type="text" placeholder="e.g Jollof rice & turkey combo" value={buisiness} onChange={(event) => setBuisines(event.target.value)} required />
                  </div>
                  <div className='int'>
                    <label className='greysmallesttext'>Food category</label>
                    <div class="input">
                      <select style={{ width: '95%', '::placeholder': { color: 'blue' } }} placeholder="placeholder" value={select} onChange={(event) => setSelect(event.target.value)} required>
                        <option value="" disabled> e.g Swallow</option>
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
          </div>
        )}
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div className='select-div'>
            <select onChange={handleSearchChange} style={{ backgroundColor: 'white', width: '100px' }}>
              <option value="name">All</option>
              <option value="saab">month</option>
              <option value="fiat">year</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div >
            <div className='searchinputDiv' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <img src={Search} style={{ paddingRight: '10px' }} />
              <input type="text" placeholder='Search orders' className='searchinput' onChange={handleSearchChange} />
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: 'white', borderRadius: '15px', padding: '20px 20px', marginTop: '10px', zIndex: '1' }}>
          <table style={{ width: '100%' }}>
            <thead style={{ borderBottom: 'none' }}>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            {filteredData.map((item) => (
              <tbody>
                <tr key={item.id} style={{ borderBottom: '1px solid #C7C7C7' }}>
                  <td style={{ display: "flex", flexDirection: "row", alignItems: "center", width: '60%' }}>
                    <img src={Food} style={{ padding: '15px', width: "70px" }} />
                    <div>
                      <p><b>{item.name}</b></p>
                      <p className='greysmallesttext'>In stock</p>
                    </div>
                  </td>
                  <td style={{ width: '40%' }}>
                    <b>{item.amount}</b>
                    <div style={{ display: "flex", flexDirection: "", alignItems: "center" }}>
                      <img src={Dot} style={{ paddingRight: '5px', width: "10px" }} />
                      <p className='greysmallesttext'>Visible menu</p>
                    </div>
                  </td>
                  <td style={{ width: '15 %' }}><button className='viewbtn'>View product</button></td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
      <img onClick={() => setIsModalOpen(true)} style={{ position: 'absolute', right: '50px', zIndex: '2', bottom: '25px' }} src={OpenModal} />
      <div>
      </div>
    </Dashboard>
  )
}

export default Products
