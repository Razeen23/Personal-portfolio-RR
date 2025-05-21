import React from 'react';
// import Logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className='py-5'>
        <div className='container mx-auto'>
          <div className='justify-between items-center' >
          <p className='text-center'>
  Copyright @ 2025 Razeen. All rights reserved.<br />
  Naaa Just Kidding, Get my code on Github.
  <span className='end text-red-500'> Work Together, Grow Together</span>
</p>
            {/* <a href='#'>
            {/* <img src={Logo} alt='' /> 
            </a> 
            <button className='btn btn-sm'>
            <a href='mailto:razeenofficial23@gmail.com'>Hire me</a></button> */}
          </div>

        </div>
    </footer>
  );
};

export default Footer;
