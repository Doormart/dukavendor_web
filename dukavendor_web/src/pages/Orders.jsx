import React from 'react'
import Dashboard from './Dashboard'
import { useState } from 'react';
import Search from '../img/search.svg'
import Dot from '../img/dot.svg'

function Orders() {
  const cards = [1, 2, 3, 4, 5];
  const [searchQuery, setSearchQuery] = useState("");
  const [active, setActive] = useState(false);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <Dashboard>
      <div style={{ height: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div className='select-div'>
            <select onChange={handleSearchChange} style={{ backgroundColor: 'white', width: '100px' }}>
              <option value="name">This week</option>
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
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around', overflowX: 'auto' }}>
          {cards.map(card => (
            <div className='small-card' key={card} style={{ backgroundColor: active[card] ? "#476A6F" : "#FFFFFF" }} onClick={() => setActive({ ...active, [card]: !active[card] })}>
              <p className='greysmalltext' style={{ paddingRight: '20px', color: active[card] ? "white" : "black" }}>Pending</p>
              <div className='small-cir'>
                <p className='greysmallesttext' style={{ color: active[card] ? "#262B2C" : "black" }}>312</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ backgroundColor: 'white', borderRadius: '15px', padding: '20px 20px', marginTop: '30px', zIndex: '1' }}>
          <table style={{ width: '100%' }}>
            <thead style={{ borderBottom: 'none' }}>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #C7C7C7'}}>
                <td style={{ display: "flex", flexDirection: "row", alignItems: "center", width: '75%', marginBottom:'20px',marginTop:'10px' }}>
                  <div className='circle' style={{ marginRight: '10px' }}>DA</div>
                  <div>
                    <p className='greysmalltext'>Spaghetti plantain & turkey (4x)</p>
                    <p className='greysmallesttext'>Thur 21 Sep, 2022 12:32 PM</p>
                  </div>
                </td>
                <td style={{ width: '25%',  }}>
                  <p >N12,580.00</p>
                  <div style={{ display: "flex", flexDirection: "", alignItems: "center" }}>
                    <img src={Dot} style={{ paddingRight: '5px', width: "10px" }} />
                    <p className='greysmallesttext'>Visible menu</p>
                  </div>
                </td>
                <td  style={{ width: '15%' }}className='greysmalltext'>DK19081</td>
                <td style={{ width: '10 %' }}><button className='viewbtn'>View order</button></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #C7C7C7' }}>
                <td style={{ display: "flex", flexDirection: "row", alignItems: "center", width: '75%',marginBottom:'20px',marginTop:'20px' }}>
                  <div className='circle' style={{ marginRight: '10px' }}>DA</div>
                  <div>
                    <p className='greysmalltext'>Spaghetti plantain & turkey (4x)</p>
                    <p className='greysmallesttext'>Thur 21 Sep, 2022 12:32 PM</p>
                  </div>
                </td>
                <td style={{ width: '25%' }}>
                  <p>N12,580.00</p>
                  <div style={{ display: "flex", flexDirection: "", alignItems: "center" }}>
                    <img src={Dot} style={{ paddingRight: '5px', width: "10px" }} />
                    <p className='greysmallesttext'>Visible menu</p>
                  </div>
                </td>
                <td  style={{ width: '15%' }}className='greysmalltext'>DK19081</td>
                <td style={{ width: '10 %' }}><button className='viewbtn'>View order</button></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #C7C7C7' }}>
                <td style={{ display: "flex", flexDirection: "row", alignItems: "center", width: '75%',marginBottom:'20px',marginTop:'20px' }}>
                  <div className='circle' style={{ marginRight: '10px' }}>VB</div>
                  <div>
                    <p className='greysmalltext'>Spaghetti plantain & turkey (4x)</p>
                    <p className='greysmallesttext'>Thur 21 Sep, 2022 12:32 PM</p>
                  </div>
                </td>
                <td style={{ width: '25%' }}>
                  <p>N12,580.00</p>
                  <div style={{ display: "flex", flexDirection: "", alignItems: "center" }}>
                    <img src={Dot} style={{ paddingRight: '5px', width: "10px" }} />
                    <p className='greysmallesttext'>Visible menu</p>
                  </div>
                </td>
                <td  style={{ width: '15%' }}className='greysmalltext'>DK19081</td>
                <td style={{ width: '10 %' }}><button className='viewbtn'>View order</button></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #C7C7C7' }}>
                <td style={{ display: "flex", flexDirection: "row", alignItems: "center", width: '75%',marginBottom:'20px',marginTop:'20px' }}>
                  <div className='circle' style={{ marginRight: '10px' }}>GH</div>
                  <div>
                    <p className='greysmalltext'>Spaghetti plantain & turkey (4x)</p>
                    <p className='greysmallesttext'>Thur 21 Sep, 2022 12:32 PM</p>
                  </div>
                </td>
                <td style={{ width: '25%' }}>
                  <p>N12,580.00</p>
                  <div style={{ display: "flex", flexDirection: "", alignItems: "center" }}>
                    <img src={Dot} style={{ paddingRight: '5px', width: "10px" }} />
                    <p className='greysmallesttext'>Visible menu</p>
                  </div>
                </td>
                <td  style={{ width: '15%' }}className='greysmalltext'>DK19081</td>
                <td style={{ width: '10 %' }}><button className='viewbtn'>View order</button></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #C7C7C7' }}>
                <td style={{ display: "flex", flexDirection: "row", alignItems: "center", width: '75%' ,marginBottom:'20px',marginTop:'20px'}}>
                  <div className='circle' style={{ marginRight: '10px' }}>NB</div>
                  <div>
                    <p className='greysmalltext'>Spaghetti plantain & turkey (4x)</p>
                    <p className='greysmallesttext'>Thur 21 Sep, 2022 12:32 PM</p>
                  </div>
                </td>
                <td style={{ width: '25%' }}>
                  <p>N12,580.00</p>
                  <div style={{ display: "flex", flexDirection: "", alignItems: "center" }}>
                    <img src={Dot} style={{ paddingRight: '5px', width: "10px" }} />
                    <p className='greysmallesttext'>Visible menu</p>
                  </div>
                </td>
                <td  style={{ width: '15%' }}className='greysmalltext'>DK19081</td>
                <td style={{ width: '10 %' }}><button className='viewbtn'>View order</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Dashboard >
  )
}

export default Orders
