import React from 'react'

// import components
import Logo from '../assets/img/logo.png';
import Nav from './Nav';
import NavMobile from './NavMobile';

// import icons
import {FaBars} from 'react-icons/fa';
import {BsArrowRight} from 'react-icons/bs';

const Header = () => {
    return (<header>
        <div className='container mx-auto'></div>
        <div>
            {/* Logo */}
            <a href='#'>
                <img src={Logo} alt=''></img>
            </a>

            {/* nav initially hidden - Only show on large screen */}
            <div className='hidden lg:flex'>
                <Nav></Nav>
            </div>

            {/* Mobile nav - Initially is showing / hidden on large screens */}
            <div className='lg:hidden'>
                <NavMobile></NavMobile>
            </div>
        </div>
    </header>);
};

export default Header;