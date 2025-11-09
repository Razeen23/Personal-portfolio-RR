import React from 'react';
import { BiHomeAlt, BiUser, BiSolidBriefcaseAlt2, BiCommentCheck, BiSolidGame, BiRocket, BiBriefcase } from 'react-icons/bi';
import { BsFillClipboardDataFill, BsAward } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-full bg-white/80 h-[60px] backdrop-blur-2x1 rounded-full max-w-[600px] mx-auto px-2 flex items-center justify-between text-2x1 text-gray-900/70 overflow-x-auto scrollbar-hide'>
          <Link activeClass='active'
          smooth={true}
          spy={true}
          offset={-200}
           to='home' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiHomeAlt />
          </Link>
          <Link activeClass='active'
          smooth={true}
          spy={true}
           to='about' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiUser />
          </Link>
          <Link activeClass='active'
          smooth={true}
          spy={true}
           to='tech' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiSolidGame />
          </Link>
          <Link activeClass='active'
          smooth={true}
          spy={true}
           to='services' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsFillClipboardDataFill />
          </Link>
          <Link activeClass='active'
          smooth={true}
          spy={true}
           to='experience' className='cursor-pointer w-[55px] h-[55px] flex items-center justify-center flex-shrink-0'>
            <BiBriefcase />
          </Link>
          <Link activeClass='active'
          smooth={true}
          spy={true}
           to='work' className='cursor-pointer w-[55px] h-[55px] flex items-center justify-center flex-shrink-0'>
            <BiSolidBriefcaseAlt2 />
          </Link>
          <Link activeClass='active'
          smooth={true}
          spy={true}
           to='startups' className='cursor-pointer w-[55px] h-[55px] flex items-center justify-center flex-shrink-0'>
            <BiRocket />
          </Link>
          <Link activeClass='active'
          smooth={true}
          spy={true}
           to='certifications' className='cursor-pointer w-[55px] h-[55px] flex items-center justify-center flex-shrink-0'>
            <BsAward />
          </Link>
          <Link activeClass='active'
          smooth={true}
          spy={true}
           to='contact' className='cursor-pointer w-[55px] h-[55px] flex items-center justify-center flex-shrink-0'>
            <BiCommentCheck />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
