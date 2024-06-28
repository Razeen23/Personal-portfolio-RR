import React from 'react';
// import Logo from '../assets/logo.svg';
import favicon from '../assets/favicon-32x32.png';

const Header = () => {
  return (
    <header className='py-5'>
        <div className='container mx-auto'>
            <link rel="shortcut icon" href="{favicon}">
          <div className='flex justify-between items-center' >
            <a href='#'>
            {/* <img src={Logo} alt='' /> */}
            </a> 
            <button className='btn btn-sm'>
            <a href='mailto:razeenofficial23@gmail.com'>Hire me</a></button>
          </div>

        </div>
    </header>
  );
};

export default Header;
