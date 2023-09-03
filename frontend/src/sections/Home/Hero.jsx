import React from 'react';
import HeroImg from "../../images/Hero.png";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <section id='home' className='w-full relative flex xl:flex-row flex-col justify-around min-h-screen max-container'>
      {/* Left Section */}
      <div className='xl:w-11/12 flex flex-col justify-center items-start w-full px-4 pt-24'>
        <div className='max-lg:mt-3'>
          {/* Subtitle */}
          <p className='text-xl text-red-300 max-md:mt-4 lg:mb-9'>Wear Your Imagination</p>
          {/* Title */}
          <h1 className='mt-1 text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold relative'>
            {/* First Part of Title */}
            <span className='xl:bg-white xl:whitespace-nowrap max-md:text-7xl lg:absolute -top-4 left-0 pr-3'>
              Unleash Your Inner
            </span>
            <br/>
            {/* Second Part of Title */}
            <span className='text-red-300 inline-block mt-3 max-sm:mt-1 md:mt-1 lg:mt-1'>Quirkster</span>
          </h1>
          {/* Description */}
          <p className='text-slate-gray text-lg leading-8 mt-6 max-lg:mb-7 mb-14 sm:max-w-sm'>
            Elevate Your Everyday Look with Comfortable & Creative T-shirts – Where Style Meets Expression
          </p>

          {/* Shop Now Button */}
          <button className='w-40 bg-red-400 hover:bg-red-500 p-3 max-lg:mb-5 rounded-full flex items-center justify-around'>
            Shop Now
            {/* Right Arrow Icon */}
            <div className='w-5 h-5 rounded-full bg-slate-50 flex items-center p-1 hover:rotate-90'>
              <BsArrowRight/>
            </div>
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className='bg-blue-200 xl:w-11/12 flex flex-col lg:justify-end lg:items-end max-lg:items-center'>
        <div className='mt-auto'>
          {/* Hero Image */}
          <img src={HeroImg} alt="Hero" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
