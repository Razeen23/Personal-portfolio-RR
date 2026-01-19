import React from 'react';
import { BiHomeAlt, BiUser, BiSolidBriefcaseAlt2, BiCommentCheck, BiSolidGame, BiRocket, BiBriefcase } from 'react-icons/bi';
import { BsFillClipboardDataFill, BsAward } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-full bg-white/80 h-[56px] sm:h-[60px] backdrop-blur-2xl rounded-full max-w-[600px] mx-auto px-1 sm:px-2 flex items-center justify-between text-gray-900/70 overflow-x-auto scrollbar-hide gap-1 sm:gap-0'>
          <Link activeClass='active'
          smooth={true}
          spy={true}
          offset={-200}
           to='home' className='cursor-pointer w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px] flex items-center justify-center flex-shrink-0 transition-all hover:scale-110'>
            <BiHomeAlt className='text-lg sm:text-xl lg:text-2xl' />
          </Link>
          <Link activeClass='active'
          smooth={true}
          spy={true}
           to='about' className='cursor-pointer w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px] flex items-center justify-center flex-shrink-0 transition-all hover:scale-110'>
            <BiUser className='text-lg sm:text-xl lg:text-2xl' />
          </Link>
          <Link activeClass='active'
          smooth={true}
          spy={true}
           to='tech' className='cursor-pointer w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px] flex items-center justify-center flex-shrink-0 transition-all hover:scale-110'>
            <BiSolidGame className='text-lg sm:text-xl lg:text-2xl' />
          </Link>
          <Link activeClass='active'
          smooth={true}
          spy={true}
           to='services' className='cursor-pointer w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px] flex items-center justify-center flex-shrink-0 transition-all hover:scale-110'>
            <BsFillClipboardDataFill className='text-lg sm:text-xl lg:text-2xl' />
          </Link>
          <Link activeClass='active'
          smooth={true}
          spy={true}
           to='experience' className='cursor-pointer w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px] flex items-center justify-center flex-shrink-0 transition-all hover:scale-110'>
            <BiBriefcase className='text-lg sm:text-xl lg:text-2xl' />
          </Link>
          <Link activeClass='active'
          smooth={true}
          spy={true}
           to='work' className='cursor-pointer w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px] flex items-center justify-center flex-shrink-0 transition-all hover:scale-110'>
            <BiSolidBriefcaseAlt2 className='text-lg sm:text-xl lg:text-2xl' />
          </Link>
          <Link activeClass='active'
          smooth={true}
          spy={true}
           to='startups' className='cursor-pointer w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px] flex items-center justify-center flex-shrink-0 transition-all hover:scale-110'>
            <BiRocket className='text-lg sm:text-xl lg:text-2xl' />
          </Link>
          <Link activeClass='active'
          smooth={true}
          spy={true}
           to='certifications' className='cursor-pointer w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px] flex items-center justify-center flex-shrink-0 transition-all hover:scale-110'>
            <BsAward className='text-lg sm:text-xl lg:text-2xl' />
          </Link>
          <Link activeClass='active'
          smooth={true}
          spy={true}
           to='contact' className='cursor-pointer w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px] flex items-center justify-center flex-shrink-0 transition-all hover:scale-110'>
            <BiCommentCheck className='text-lg sm:text-xl lg:text-2xl' />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
