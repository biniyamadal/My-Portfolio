import React, { useRef, useEffect, useState } from 'react';
import { RiSendPlaneLine, RiMenuLine, RiCloseLine } from 'react-icons/ri';
import '../../App.css';

function Header() {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return window.removeEventListener('scroll', stickyHeaderFunc);
    
  }, []);

  const handleclick =e=>{
    e.preventDefault();

    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top:location - 80,
      left:0,
    });
  };

  const toggleMenu = () => {
    menuRef.current.classList.toggle('show__menu');
    setIsMenuOpen(!isMenuOpen);
  };
  return (
 <header ref={headerRef} className='w-full h-[80px] flex items-center'>
    <div className="container">
        <div className="flex items-center justify-between">
            {/* ==============logo========== */}
            <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              B
            </span>
            <div className="leading-[20px]">
              <h2 className='text-xl text-smallTextColor font-[700]'>Biniyam</h2>
              <p className='text-smallTextColor text-[14px] font-[500]'>personal</p>

            </div>

            </div>
            <div className="menu" ref={menuRef} onClick={toggleMenu}>
              <ul className='flex  items-center gap-10'>
                <li  className='flex items-center gap-2 text-smallTextColor font-[600] border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor
                             hover:text-white hover:font-[500]'>
                  <a onClick={handleclick} href="#about">About</a>
                  </li>
                <li className='flex items-center gap-2 text-smallTextColor font-[600] border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor
                             hover:text-white hover:font-[500]'>
                  <a onClick={handleclick} href="#services">Services</a>
                  </li>
                <li className='flex items-center gap-2 text-smallTextColor font-[600] border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor
                             hover:text-white hover:font-[500]'>
                  <a onClick={handleclick} href="#portfolio">Portfolio</a>
                  </li>
                <li className='flex items-center gap-2 text-smallTextColor font-[600] border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor
                             hover:text-white hover:font-[500]'>
                  <a onClick={handleclick} href="#contact">Contact</a>
                  </li>
                  <li>
                   <a 
                   
                   href='Resume.pdf'
                   download="Resume"
                   >
                      <button  className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor
                             hover:text-white hover:font-[500] ease-in duration-300'>
                           Resume
                         </button>
                         </a>
                      </li>

              </ul>
              
            </div>
            <div className="flex items-center gap-4">
              <a href="https://t.me/AZBB19">
              <button className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor
              hover:text-white hover:font-[500] ease-in duration-300'>
              <RiSendPlaneLine />Let's Talk
              </button>
              </a>
             
              <span onClick={toggleMenu} className='text-2x1 text-smallTextColor md:hidden cursor-pointer'>
              {isMenuOpen ? <RiCloseLine /> : <RiMenuLine />}
            </span>

            </div>
        </div>
       
    </div>

 </header>
  )
}

export default Header;