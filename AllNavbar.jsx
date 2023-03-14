import React from 'react';
import './Navbar.css';
// import {Home} from './Home';
// import {About} from './About';
// import {Menu}  from './Menu';
// import {OrderOnline} from './OrderOnline';
// import {Contact} from './Contact';
// import {Lnguage} from './Lnguage';


export const AllNavbar = () => {
  return (
    <div className="container">
    <div className='navbar'>
        <div >
          <img className='logo' src="./images/logo2.jpg" alt="" />
        </div>
        <div className="navbar-links">
        <a href='/'>HOME</a>
        <a href='#about'>ABOUT</a>
        <a href='#menu'>MENU</a>
        <a href='#orderOnline'>ORDER ONLINE</a>
        <a href='#contact'>CONTACT US</a>
        <button className='puy-now'>ORDER</button>
        </div>
        <div className='addCart'>
            <a href='#lnguage'>EN/DE</a>
            <i class="bi bi-cart-fill" ></i>
        </div>
        </div>

    </div>
  )
}
