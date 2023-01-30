import React from 'react'
import EmptyPage from '../components/EmptyPage'
import Dashboard from './Dashboard'
import { useState } from 'react';
import EmptyWallet from '../img/emptywallet.svg'
export default function Wallet() {
  const dummyData = [
    { id: 1, col1: 'Row 1 Column 1', col2: 'Row 1 Column 2' },
    { id: 2, col1: 'Row 2 Column 1', col2: 'Row 2 Column 2' },
    { id: 3, col1: 'Row 3 Column 1', col2: 'Row 3 Column 2' },
    { id: 4, col1: 'Row 4 Column 1', col2: 'Row 4 Column 2' },
    { id: 5, col1: 'Row 5 Column 1', col2: 'Row 5 Column 2'},
    { id: 6, col1: 'Row 6 Column 1', col2: 'Row 6 Column 2'},
    { id: 7, col1: 'Row 7 Column 1', col2: 'Row 7 Column 2' },
    { id: 8, col1: 'Row 8 Column 1', col2: 'Row 8 Column 2' },
    { id: 9, col1: 'Row 9 Column 1', col2: 'Row 9 Column 2' },
    { id: 10, col1: 'Row 10 Column 1', col2: 'Row 10 Column 2' },
    { id: 11, col1: 'Row 11 Column 1', col2: 'Row 11 Column 2' },
    { id: 12, col1: 'Row 12 Column 1', col2: 'Row 12 Column 2' },
    { id: 13, col1: 'Row 13 Column 1', col2: 'Row 13 Column 2' },
    { id: 14, col1: 'Row 14 Column 1', col2: 'Row 14 Column 2' },
    { id: 15, col1: 'Row 15 Column 1', col2: 'Row 15 Column 2'},
    // Add more rows here as needed
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(dummyData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Dashboard>
      <div>
        {/* <EmptyPage
         image={EmptyWallet} 
         mainText="This is where your money is"
         text="Your wallet balance will appear when you start earning"
      /> */}
        <div style={{ backgroundColor: 'white', borderRadius: '15px', padding: '60px 60px' }}>
          <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <div >
              <p className='greysmalltext'>Account balance</p>
              <p className='boldText'><b>N590,757.08</b></p>
            </div>
            <button className='withdrawerbtn'>Withdraw </button>
          </div>
          <hr style={{marginTop:'35px', marginBottom:'25px'}} className='hr'/>
          <p className='greysmalltext'><b>Transaction history</b></p>
          <table style={{width:'100%', marginTop:''}}>
            <thead style={{ borderBottom:'none'}}>
              <tr>
                <th style={{textAlign:'start'}}></th>
                <th style={{width:'10%'}}></th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((row) => (
                <tr key={row.id} style={{ borderBottom: '1px solid #C7C7C7',height:'30px' }}>
                  <td style={{marginBottom:"90px"}}>
                    <p style={{marginTop:"30px"}}className='boldsmalltext'>Debited</p>
                    <p className='greysmallesttext'>Friday, 18th April, 2022</p>
                    <p  style={{marginBottom:"15px"}} className='greysmallesttext'>07:20 PM</p>
                  </td>
                  <td><p className='boldsmalltext'>N5,101.00</p></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{textAlign:'center',padding:"80px 40px"}}>
            {pageNumbers.map((number) => (
              <span
              className='boldsmalltext'
                key={number}
                style={{ cursor: 'pointer', padding: '5px' }}
                onClick={() => handlePageChange(number)}
              >
                {number}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Dashboard>
  )
}
