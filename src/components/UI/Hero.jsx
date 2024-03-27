import React from 'react';
 import BiniImg from '../../assets/images/Bini.png';
 //import countUp from 'react-countup';
 //import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {  RiFacebookFill,  RiGithubFill, RiInstagramLine, RiLinkedinFill, RiMailLine} from 'react-icons/ri';
import { RiApps2Line } from 'react-icons/ri';
import { RiYoutubeLine } from 'react-icons/ri';
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <section className="pt-10" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-semibold text-lg"
            >
              Hello Wellcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Biniyam Adal <br />
              Fullstack Web Developer
            </h1>
            <div 
             data-aos="fade-up"
             data-aos-duration="1800"
             data-aos-delay='200'
            className='flex items-center gap-6 mt-7'>
              <a href="#contact"><button  className=' bg-primaryColor text-white flex items-center gap-2 
              font-[500] hover:bg-smallTextColor py-2 px-4 rounded-[8px]  ease-in duration-300'><RiMailLine/> Hire me</button></a>

                <a href="#portfolio" className='text-smallTextColor font[600] text-[16px]  border-b border-solid border-smallTextColor'
                >See portfolio</a>
                
            </div>
            <p 
                data-aos="fade-left"
                data-aos-duration="1800"
                className='flex gap-2 text-headingColor mt-4 font-[500] text-[18px] leading-[30px] sm:pl-14 sm:pr-10'
                style={{ textAlign: 'justify', textJustify: 'inter-word' }} 
                >
                  <span>
                    <RiApps2Line />
                  </span>
              I'm a skilled web developer with experience in Javascript and 
              expertise in frameworks like React, Node.js,Tailwind Css and Bootstrap.
              I'm a quick learner,create efficient,scalabele and user-friendly solutions that solve real-world problems.
              Let's work together to bring your ideas to life!</p>
                    <div className="flex items-center gap-9 mt-14">
                        <span className='text-smallTextColor text-[15px] font-[600]'>
                          Follow me
                        </span>
                        <span>
                          <a href="http://www.youtube.com/@bini1921"  className='text-smallTextColor text-[18px] font-[600]'>
                          <RiYoutubeLine/>
                          </a>
                        </span>
                        <span>
                          <a href="https://github.com/biniyamadal"  className='text-smallTextColor text-[18px] font-[600]'>
                          <RiGithubFill/>
                          </a>
                        </span>
                        <span>
                          <a href='https://www.linkedin.com/in/bini-adal-1b26862ba/'>
                          <RiLinkedinFill/>
                          </a>
                        </span>
                        <span>
                          <a href="https://www.facebook.com/bini.adal/"  className='text-smallTextColor text-[18px] font-[600]'>
                          <RiFacebookFill/>
                          </a>
                        </span>
                        <span>
                          <a href="https://www.instagram.com/bini.adal"  className='text-smallTextColor text-[18px] font-[600]'>
                          <RiInstagramLine/>
                          </a>
                        </span>
                    </div>
          </div>
          <div className='basis-1/3 mt-10 sm:mt-0'>
            <figure className='flex items-center justify-center '>
              <img src={BiniImg} alt="Bini image" 
             className='rounded-full'
               />
            </figure>
            </div> 
            <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0
            md:flex-col md:justify-end md:text-end'>
              <div className='mb-10'>
             <h2 className='text-headingColor font-[700] text-[32px]'>
              <CountUp start={0} end={4} duration={2} suffix='+'/> 
              </h2>
             <h4 className='text-headingColor font-[600] text-[18px]'>Months of Experience</h4>
              </div>

              <div className='mb-10'>
             <h2 className='text-headingColor font-[700] text-[32px]'>
              <CountUp start={0} end={90} duration={2} suffix='%'/> 
              </h2>
             <h4 className='text-headingColor font-[600] text-[18px]'>Success rate</h4>
              </div>
              <div className='mb-10'>
             <h2 className='text-headingColor font-[700] text-[32px]'>
              <CountUp start={0} end={10} duration={2} suffix='+'/> 
              </h2>
             <h4 className='text-headingColor font-[600] text-[18px]'>Happy Clients</h4>
              </div>
              
              <div className='mb-10'>
             <h2 className='text-headingColor font-[700] text-[32px]'>
              <CountUp start={0} end={8} duration={2} suffix='+'/> 
              </h2>
             <h4 className='text-headingColor font-[600] text-[18px]'>Projects Completed</h4>
              </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
