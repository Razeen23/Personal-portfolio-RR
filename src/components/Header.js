import React from 'react';
// import Logo from '../assets/logo.svg';
import { Link, useLocation } from 'react-router-dom';


const Header = () => {
  const location = useLocation();
  const isProjectsPage = location.pathname === '/projects';

  return (
    <header className='py-4 sm:py-5'>
        <div className='container mx-auto px-4 sm:px-0'>
          <div className='flex justify-between items-center gap-2 sm:gap-4' >
          {isProjectsPage ? (
            <Link to="/">
              <button className='btn btn-sm h-[40px] sm:h-[42px] md:h-[45px] px-4 sm:px-6 md:px-8 text-[11px] sm:text-[12px] md:text-[14px] whitespace-nowrap'>
                Back to Home
              </button>
            </Link>
          ) : (
            <Link to="/projects">
              <button className='btn btn-sm h-[40px] sm:h-[42px] md:h-[45px] px-4 sm:px-6 md:px-8 text-[11px] sm:text-[12px] md:text-[14px] whitespace-nowrap'>
                View Projects
              </button>
            </Link>
          )}
            <button className='btn btn-sm h-[40px] sm:h-[42px] md:h-[45px] px-4 sm:px-6 md:px-8 text-[11px] sm:text-[12px] md:text-[14px] whitespace-nowrap'>
            <a href='mailto:razeen.official23@gmail.com'>Hire me</a></button>
          </div>

        </div>
    </header>
  );
};

export default Header;
