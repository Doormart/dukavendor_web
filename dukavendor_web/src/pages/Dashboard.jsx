import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import DarkLogo from '../img/darklogo.svg'
import Home from '../img/home.svg'
import logOut from '../img/logout.svg'
import Line from '../img/line.svg'
import Wallet from '../img/wallet.svg'
import Note from '../img/note.svg'
import Box from '../img/box.svg'
import Bell from '../img/bell.svg'
import Dropdown from '../img/dropdown.svg'
import Profile from '../img/profile.svg'
import Minimize from '../img/minimize.svg'
import MinimizeR from '../img/minimizeRight.svg'

function Dashboard({ children }) {
  const sidebarCollapsed = localStorage.getItem('minimized')
  const [ isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true)
  const navigate = useNavigate()
  const url = window.location.pathname.replace(/\//g, '')
  const location = useLocation();
  const handleToggler =()=>{
    if(isExpanded){
      setIsExpanded(false);
      localStorage.setItem('minimized', true);
      return;
    }
    setIsExpanded(true)
    localStorage.removeItem('minimized')
  }
  return (
    <div className="dashboard">
      <nav className={`side-nav ${isExpanded ? 'minimized' : 'side-nav'}`}>
        <div className='nav-items'>
          <img src={DarkLogo} style={{width:'50px'}} />
        </div>
        <div className="circleBtn"  onClick={handleToggler}>
         <img src={ isExpanded ? MinimizeR : Minimize} alt="minimize button"/>
         </div>
        <div className='nav-items'>
        </div>
        <div className='nav-box' >
          <div className='nav-items' onClick={() => navigate('/')}>
            <svg className='' width="32" height="32" viewBox="0 0 42 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 16.5556L21 1L41 16.5556V41C41 42.1787 40.5317 43.3092 39.6983 44.1427C38.8648 44.9762 37.7343 45.4444 36.5556 45.4444H5.44444C4.2657 45.4444 3.13524 44.9762 2.30175 44.1427C1.46825 43.3092 1 42.1787 1 41V16.5556Z" stroke={location.pathname === '/' ? '#262B2C' : '#F7C8B9'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.333 45.4445V23.2223H27.6663V45.4445" stroke={location.pathname === '/' ? '#262B2C' : '#F7C8B9'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className={`${isExpanded ? 'hide-text' : ''}`} style={{ paddingLeft: "15px" }}><p className={location.pathname === '/' ? 'p' : ''}>Dashoboard</p></span>
            {location.pathname === '/' ? (
              <img src={Line} style={{ position: 'absolute', right: '0', height:'35px' }} />
            ) : (
              ''
            )}
          </div>
          <div className='nav-items' onClick={() => navigate('/orders')}>
            <svg width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <path d="M34.375 19.5834L15.625 8.77087" stroke={location.pathname === '/orders' ? '#262B2C' : '#F7C8B9'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M43.75 33.3333V16.6666C43.7492 15.9359 43.5564 15.2183 43.1907 14.5857C42.825 13.9531 42.2995 13.4278 41.6667 13.0625L27.0833 4.72913C26.4499 4.36342 25.7314 4.1709 25 4.1709C24.2686 4.1709 23.5501 4.36342 22.9167 4.72913L8.33333 13.0625C7.70055 13.4278 7.17496 13.9531 6.80929 14.5857C6.44363 15.2183 6.25075 15.9359 6.25 16.6666V33.3333C6.25075 34.064 6.44363 34.7816 6.80929 35.4142C7.17496 36.0468 7.70055 36.5721 8.33333 36.9375L22.9167 45.2708C23.5501 45.6365 24.2686 45.829 25 45.829C25.7314 45.829 26.4499 45.6365 27.0833 45.2708L41.6667 36.9375C42.2995 36.5721 42.825 36.0468 43.1907 35.4142C43.5564 34.7816 43.7492 34.064 43.75 33.3333Z" stroke={location.pathname === '/orders' ? '#262B2C' : '#F7C8B9'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6.8125 14.5L25 25.0208L43.1875 14.5" stroke={location.pathname === '/orders' ? '#262B2C' : '#F7C8B9'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M25 46V25" stroke={location.pathname === '/orders' ? '#262B2C' : '#F7C8B9'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className={`${isExpanded ? 'hide-text' : ''}`} style={{ paddingLeft: "15px" }}><p className={location.pathname === '/orders' ? 'p' : ''}>Orders</p></span>
            {location.pathname === '/orders' ? (
              <img src={Line} style={{ position: 'absolute', right: '0', height:'35px'  }} />
            ) : (
              ''
            )}
          </div>
          <div className='nav-items' onClick={() => navigate('/products')}>
            <svg width="35" height="33" viewBox="0 0 35 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8155 0C12.1103 0 10.6787 1.18222 10.2645 2.76307H3.68419C1.65889 2.76307 0 4.42224 0 6.44725V40.5259C0 42.5508 1.65889 44.21 3.68419 44.21H31.3158C33.3407 44.21 35 42.5509 35 40.5259V6.44725C35 4.42233 33.3408 2.76307 31.3158 2.76307H24.7352C24.3213 1.18222 22.8896 0 21.1841 0H13.8155ZM13.8155 1.84223H21.1839C22.2206 1.84223 23.0261 2.64777 23.0261 3.68409C23.0261 4.7205 22.2206 5.52633 21.1839 5.52633H13.8155C12.7791 5.52633 11.9737 4.72042 11.9737 3.68409C11.9737 2.64768 12.7792 1.84223 13.8155 1.84223ZM3.6839 4.6053H10.2642C10.6784 6.18615 12.1101 7.36837 13.8153 7.36837H21.1836C22.8892 7.36837 24.3208 6.18615 24.7347 4.6053H31.3153C32.3518 4.6053 33.1572 5.41084 33.1572 6.44716V40.5258C33.1572 41.5622 32.3517 42.3676 31.3153 42.3676H3.68372C2.64731 42.3676 1.84149 41.5621 1.84149 40.5258V6.44716C1.84149 5.41075 2.64739 4.6053 3.68372 4.6053H3.6839ZM8.28921 12.8948C7.78051 12.8948 7.36807 13.3072 7.36807 13.8156C7.36807 14.0599 7.46507 14.2944 7.63792 14.4668C7.81041 14.6397 8.04488 14.7367 8.28921 14.7367H26.7097C26.954 14.7367 27.1881 14.6397 27.361 14.4668C27.5338 14.2944 27.6308 14.0599 27.6308 13.8156C27.6308 13.5716 27.5338 13.3371 27.361 13.1643C27.1881 12.9918 26.954 12.8948 26.7097 12.8948H8.28921ZM8.28921 18.4208C7.78051 18.4208 7.36807 18.8333 7.36807 19.342C7.36807 19.5863 7.46507 19.8204 7.63792 19.9933C7.81041 20.1661 8.04488 20.2631 8.28921 20.2631H26.7097C26.954 20.2631 27.1881 20.1661 27.361 19.9933C27.5338 19.8204 27.6308 19.5863 27.6308 19.342C27.6308 19.0976 27.5338 18.8635 27.361 18.6907C27.1881 18.5178 26.954 18.4208 26.7097 18.4208H8.28921ZM8.28921 23.9473C7.78051 23.9473 7.36807 24.3597 7.36807 24.8684C7.36807 25.1127 7.46507 25.3468 7.63792 25.5197C7.81041 25.6922 8.04488 25.7892 8.28921 25.7892H26.7097C26.954 25.7892 27.1881 25.6922 27.361 25.5197C27.5338 25.3468 27.6308 25.1127 27.6308 24.8684C27.6308 24.6241 27.5338 24.3896 27.361 24.2171C27.1881 24.0442 26.954 23.9473 26.7097 23.9473H8.28921ZM8.28921 29.4733C7.78051 29.4733 7.36807 29.8857 7.36807 30.3944C7.36807 30.6388 7.46507 30.8732 7.63792 31.0457C7.81041 31.2186 8.04488 31.3156 8.28921 31.3156H26.7097C26.954 31.3156 27.1881 31.2186 27.361 31.0457C27.5338 30.8732 27.6308 30.6388 27.6308 30.3944C27.6308 30.1501 27.5338 29.916 27.361 29.7431C27.1881 29.5707 26.954 29.4733 26.7097 29.4733H8.28921ZM8.28921 34.9997C7.78051 34.9997 7.36807 35.4122 7.36807 35.9209C7.36807 36.4296 7.78051 36.842 8.28921 36.842H16.5787C17.0874 36.842 17.4995 36.4296 17.4995 35.9209C17.4995 35.4122 17.0874 34.9997 16.5787 34.9997H8.28921Z" fill={location.pathname === '/products' ? '#262B2C' : '#F7C8B9'} />
            </svg>
            <span className={`${isExpanded ? 'hide-text' : ''}`} style={{ paddingLeft: "15px" }}><p className={location.pathname === '/products' ? 'p' : ''}>Products</p></span>
            {location.pathname === '/products' ? (
              <img src={Line} style={{ position: 'absolute', right: '0', height:'35px'  }} />
            ) : (
              ''
            )}
          </div>
          <div className='nav-items' onClick={() => navigate('/wallet')}>
            <svg width="30" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.7104 21.7456C21.7104 23.0608 22.7753 24.1257 24.0905 24.1257C25.4057 24.1257 26.4706 23.0608 26.4706 21.7456C26.4706 20.4304 25.4057 19.3655 24.0905 19.3655C22.7753 19.3655 21.7104 20.4304 21.7104 21.7456ZM24.7855 21.7456C24.7855 22.1308 24.4704 22.4405 24.0905 22.4405C23.7053 22.4405 23.3956 22.1254 23.3956 21.7456C23.3956 21.3604 23.7107 21.0506 24.0905 21.0506C24.4753 21.0457 24.7855 21.3604 24.7855 21.7456Z" fill={location.pathname === '/wallet' ? '#262B2C' : '#F7C8B9'} />
              <path d="M4.60548 6.03005H34.246C34.7112 6.03005 35.0861 5.65516 35.0861 5.18995C35.0861 4.72475 34.7112 4.34985 34.246 4.34985L4.60548 4.35027C4.14027 4.35027 3.76538 4.72516 3.76538 5.19037C3.76538 5.65516 4.13532 6.03005 4.60548 6.03005Z" fill={location.pathname === '/wallet' ? '#262B2C' : '#F7C8B9'} />
              <path d="M40 5.18015C40 2.44004 37.7651 0.210083 35.015 0.210083H4.98495C3.69487 0.210083 2.40975 0.740042 1.45996 1.67004C0.529946 2.5951 0 3.87529 0 5.18015V30.0199C0 32.76 2.23492 34.99 4.98495 34.99H35.015C36.3501 34.99 37.6001 34.4699 38.54 33.53C39.4799 32.5901 40 31.3401 40 30.0199V13.465C40 13.4502 39.9951 13.4349 39.9951 13.4151V5.205C39.9951 5.1951 40 5.18974 40 5.17984V5.18015ZM2.64478 2.87017C3.27496 2.2503 4.12986 1.8952 4.98485 1.8952H35.0149C36.83 1.8952 38.3102 3.36012 38.3152 5.17029C38.3152 5.17524 38.3102 5.18019 38.3102 5.19009V9.76011C37.4301 8.97527 36.2852 8.48492 35.015 8.48492L4.98486 8.48533C3.16487 8.48533 1.68465 7.0051 1.68465 5.18512C1.68465 4.32027 2.03479 3.47525 2.64477 2.87017H2.64478ZM38.3149 25.0356H24.1356C22.3254 25.0356 20.8507 23.5554 20.8507 21.7354C20.8507 20.8503 21.1905 20.0305 21.8256 19.4102C22.4307 18.7903 23.2505 18.4501 24.1356 18.4501H38.316L38.3149 25.0356ZM38.3149 16.7657H24.1356C22.7907 16.7657 21.5456 17.2858 20.6354 18.2158C19.6905 19.1408 19.1705 20.3909 19.1705 21.7309C19.1705 24.4809 21.4004 26.7158 24.1405 26.7158H38.321V30.016C38.321 30.8862 37.9758 31.7111 37.3559 32.3359C36.7311 32.9608 35.9059 33.301 35.0208 33.301H4.98542C3.16543 33.301 1.6852 31.8262 1.6852 30.0161V8.88533C2.56531 9.67017 3.71519 10.1655 4.98542 10.1655H35.0155C36.8207 10.1655 38.2856 11.6205 38.3108 13.4153V13.4652C38.3108 13.4751 38.3157 13.4801 38.3157 13.4904L38.3149 16.7657Z" fill={location.pathname === '/wallet' ? '#262B2C' : '#F7C8B9'} />
            </svg>
            <span className={`${isExpanded ? 'hide-text' : ''}`} style={{ paddingLeft: "15px" }}><p className={location.pathname === '/wallet' ? 'p' : ''}>Wallet</p></span>
            {location.pathname === '/wallet' ? (
              <img src={Line} style={{ position: 'absolute', right: '0', height:'35px'  }} />
            ) : (
              ''
            )}
          </div>
          <div style={{ paddingTop: '70px' }}>
            <div className='nav-items' onClick={() => navigate('/sign-in')}>
              <img src={logOut} style={{width:"35px"}} />
              <span className={`${isExpanded ? 'hide-text' : ''}`} style={{ paddingLeft: "15px", bottom:'0' }}>Log out</span>
            </div>
          </div>
        </div>
      </nav>
      <main className="main">
        <header className='header'>
          <h1>{location.pathname === '/' ? 'Dashbaord' : url[0].toUpperCase() + url.slice(1)}</h1>
          <div className='profile-section'>
            <img src={Bell} style={{  width:"25px" }} />
            <img src={Profile} style={{ width:"40px" }} />
            <img src={Dropdown} style={{ width:"25px" }} />
          </div>
        </header>
        <div className='main-container'>
           {children}  
        </div>
      </main>
    </div>
  )
}

export default Dashboard
