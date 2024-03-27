import React from 'react'
import {  RiFacebookFill,  RiGithubFill, RiInstagramLine, RiLinkedinFill, RiMailLine} from 'react-icons/ri';

function Footer() {
  const year = new Date().getFullYear();
  return (<footer className='bg-[#12141e] pt-12'>
    {/* =========footer top=========== */}
    <div className="container">
       <div className="sm:flex items-center justify-between md:gap-8">
        <div className="w-full sm:w-1/2">
          <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]'>
             Do you want to make beautifull products?
          </h2>
          <a href="#contact"><button  className=' bg-primaryColor text-white flex items-center gap-2 
              font-[500] hover:bg-smallTextColor py-2 px-4 rounded-[8px]  ease-in duration-300'><RiMailLine/> Hire me</button></a>
        </div>
          <div className=' w-full sm:w-1/2'>
            {/* <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Sequi possimus architecto, maxime aperiam, facilis autem reprehenderit dolorem eos delectus enim provident 
              labore aut ration fugit a iste magnam dicta velit!
            </p> */}
              <div className='flex items-center gap-4 flex-wrap md:gap-8 mt-10'>
                <span className='text-gray-300 font-[500] text-[18px]'>Follow Me:</span>
                <span className='w-[35px] h-[35px] bg-[#2b2d33] p-2 rounded-[50px] cursor-pointer text-center '>
                          <a href="https://github.com/biniyamadal"  
                          className='text-gray-300 text-[18px] font-[500]'>
                          <RiGithubFill/>
                          </a>
                        </span>
                        <span className='w-[35px] h-[35px] bg-[#2b2d33] p-2 rounded-[50px] cursor-pointer text-center '>
                          <a href="https://www.linkedin.com/in/bini-adal-1b26862ba/"  
                          className='text-gray-300 text-[18px] font-[500]'>
                          <RiLinkedinFill/>
                          </a>
                        </span>
                        <span className='w-[35px] h-[35px] bg-[#2b2d33] p-2 rounded-[50px] cursor-pointer text-center '>
                          <a href="https://www.facebook.com/bini.adal/"  
                          className='text-gray-300 text-[18px] font-[500]'>
                          <RiFacebookFill/>
                          </a>
                        </span>
                        <span className='w-[35px] h-[35px] bg-[#2b2d33] p-2 rounded-[50px] cursor-pointer text-center '>
                          <a href="https://www.instagram.com/bini.adal"  
                          className='text-gray-300 text-[18px] font-[500]'>
                          <RiInstagramLine/>
                          </a>
                        </span>
              </div>
          </div>
       </div>
       <div>
              <ul className='flex  items-center justify-center gap-10 mt-10'>
                <li className='text-gray-400 font-[600]'>
                  <a href="#about">About</a>
                  </li>
                <li className='text-gray-400 font-[600]'>
                  <a href="#services">Services</a>
                  </li>
                <li className='text-gray-400 font-[600]'>
                  <a href="#portfolio">Portfolio</a>
                  </li>
                <li className='text-gray-400 font-[600]'>
                  <a href="#contact">Contact</a>
                  </li>
              </ul>
            </div>
    </div>
    {/* =========footer top end======== */}
    {/* =========footer bootom========= */}
    <div className='bg-[#1b1e29] py-5 mt-14'>
      <div className="container">
        <div className="flex items-center justify-center sm:justify-between">

          <div className="hidden sm:block">
           <div className="flex items-center gap-[10px]">
               <span className='w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500]
               text-[18px] flex items-center justify-center'>B</span>
               <div className="leading-[20px]">
                <h2 className='text-gray-200 font-[500] text-[18px]'>
                  Biniyam
                </h2>
                <p className='text-gray-400 font-[500] text-[14px]'>
                  Personal
                </p>
               </div>
           </div>
          </div>

          <div>
            <p className='text-gray-400 text-[14px]'>Copyright {year} developed by Biniyam - All right reserved.</p>
          </div>

        </div>
      </div>

    </div>
    {/* =========footer bootem end===== */}
  </footer>
    
  )
}

export default Footer;