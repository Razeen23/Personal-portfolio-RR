import React from 'react';
// import Logo from '../assets/logo.svg';
import { Link, useLocation } from 'react-router-dom';


const Header = () => {
  const location = useLocation();
  const isProjectsPage = location.pathname === '/projects';

  return (
    <header className='py-5'>
        <div className='container mx-auto'>
          <div className='flex justify-between items-center' >
          {isProjectsPage ? (
            <Link to="/">
              <button className='btn btn-sm lg:h-[45px] lg:w-[200px] md:h-[40px] md:w-[180px] sm:h-[35px] sm:w-[160px] lg:text-[14px] md:text-[12px] sm:text-[11px]'>
                Back to Home
              </button>
            </Link>
          ) : (
            <Link to="/projects">
              <button className='btn btn-sm lg:h-[45px] lg:w-[200px] md:h-[40px] md:w-[180px] sm:h-[35px] sm:w-[160px] lg:text-[14px] md:text-[12px] sm:text-[11px]'>
                View Projects
              </button>
            </Link>
          )}
            <button className='btn btn-sm'>
            <a href='mailto:razeen.official23@gmail.com'>Hire me</a></button>
          </div>

        </div>
    </header>
  );
};

export default Header;
