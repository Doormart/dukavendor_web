import React from 'react'
import Dashboard from './Dashboard'
import Dropdown from '../img/dropdown.svg'
import Vector from '../img/verctor.svg'
import Amount from '../img/amount.svg'
import Order from '../img/order.svg'
import Stars from '../img/stars.svg'
import Revenue from '../img/revenue.svg'
import RightArrow from '../img/rightArrow.svg'
import SplineAreaChart from '../components/SplineAreaChart'
import { useState } from 'react';

export default function Dashboardspage() {
  const [activetable, setActiveTable] = useState("");
  const [activeCircle, setActiveCircle] = useState("circle");
  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current);
  };
  const activeTable = () => {
    setActiveTable("activeTable")
    setActiveCircle("activeCircle")
  }
  return (
    <Dashboard>
      <div className='select-div'>
        <select style={{ backgroundColor: 'white', width: '100px' }}>
          <option value="name">This week</option>
          <option value="saab">month</option>
          <option value="fiat">year</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className='dashboard-card'>
        <div className='card'>
          <img style={{ height: '30px', margin: '10px' }} src={Vector} /><br />
          <p className='s-p' style={{ margin: '10px' }} >312</p>
          <span className='s-p-light' style={{ margin: '5px' }} >Total orders</span>
        </div>
        <div className='card'>
          <img style={{ height: '30px', margin: '10px' }} src={Amount} /><br />
          <p className='s-p' style={{ margin: '10px' }} >N670,709.00</p>
          <span className='s-p-light' style={{ margin: '5px' }} >Total amount</span>
        </div>
        <div className='card'>
          <img style={{ height: '30px', margin: '10px' }} src={Order} /><br />
          <p className='s-p' style={{ margin: '10px' }} >312</p>
          <span className='s-p-light' style={{ margin: '5px' }} >Average order amount</span>
        </div>
        <div className='card'>
          <img style={{ height: '30px', margin: '10px' }} src={Revenue} /><br />
          <p className='s-p' style={{ margin: '10px' }} >312</p>
          <span className='s-p-light' style={{ margin: '5px' }} >Total Revenue</span>
        </div>
      </div>
      <div className='select-div' style={{ marginTop: '20px' }}>
        <select style={{ backgroundColor: 'white', width: '100px' }}>
          <option value="name">This week</option>
          <option value="saab">month</option>
          <option value="fiat">year</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className='graph-container' >
        <div className='graph' style={{ marginRight: '20px' }}>
          <p>Revenue</p>
          <SplineAreaChart />
        </div>
        <div className='graph'>
          <p>Orders</p>
          <SplineAreaChart />
        </div>
      </div>
      {isShown ? (
        <div className='dashboard-table' >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F8F8F8', borderRadius: '10px', padding: "10px" }}>
              <p onClick={handleClick} style={{ marginLeft: '25px', marginRight: '20px' }} className='b-p'>Best selling</p>
              <button onClick={handleClick} className='small-button'>Reviews</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p className='b-p-c' style={{ marginRight: '20px' }}>View all</p>
              <img height='20px' src={RightArrow} />
            </div>
          </div>
          <table width='100%' style={{ marginTop: '50px', textAlign: 'center' }} className='s-p'>
            <thead >
              <tr >
                <th width='5%'></th>
                <th width='70%'>Customer Review</th>
                <th>Rating</th>
              </tr>
              <br />
            </thead>
            <tbody>
              <tr height='90px' style={{ marginTop: '10px' }}>
                <td><div class="circle">D A</div></td>
                <td>The food was suberb and steaming hot. I’ll
                  order for my family</td>
                <td><img src={Stars} /></td>
              </tr>
              <tr height='90px'>
                <td><div class="circle">D A</div></td>
                <td>Was ok tho i wanted chicken instead of
                  turkey</td>
                <td><img src={Stars} /></td>
              </tr >
              <tr height='90px'>
                <td><div class="circle">D A</div></td>
                <td>Omg the oil was too much. Please do better</td>
                <td><img src={Stars} /></td>
              </tr>
            </tbody>
          </table>
        </div>
      ) :


        <div className='dashboard-table' >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F8F8F8', borderRadius: '10px', padding: "10px" }}>
              <button className='small-button' onClick={handleClick}>Best selling</button>
              <p onClick={handleClick} style={{ marginLeft: '25px', marginRight: '20px' }} className='b-p'>Reviews</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p className='b-p-c' style={{ marginRight: '20px' }}>View all</p>
              <img height='20px' src={RightArrow} />
            </div>
          </div>
          <table width='100%' style={{ marginTop: '50px', textAlign: 'center' }} className='s-p'>
            <thead >
              <tr >
                <th width='1%'></th>
                <th width='40%'>Menu</th>
                <th width='20%'>Orders</th>
                <th width='20%'>Amount</th>
              </tr>
              <br />
            </thead>
            <tbody>
              <tr height='90px' style={{ marginTop: '10px' }} className={activetable} onClick={activeTable}>
                <td><div className={activeCircle}>D A</div></td>
                <td>Jollof spagetti & turkey combo</td>
                <td>130</td>
                <td>N210,917.00</td>
              </tr>
              <tr height='90px' onClick={activeTable}>
                <td><div class="circle">D A</div></td>
                <td>Jollof spagetti & turkey combo</td>
                <td>130</td>
                <td>N210,917.00</td>
              </tr >
              <tr height='90px'>
                <td><div class="circle">D A</div></td>
                <td>Jollof spagetti & turkey combo</td>
                <td>400</td>
                <td>N210,917.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      }
    </Dashboard>
  )
}
