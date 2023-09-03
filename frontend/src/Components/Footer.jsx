import React from 'react';
import Logo from "../images/footer.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='border-2 border-black p-4 bg-gray-700'>
      {/* Logo and Social Icons */}
      <div className='flex items-start p-4 px-5 justify-between flex-wrap max-sm:gap-8 mb-5'>
        <span className=''>
          <img src={Logo} alt="footer-logo" />
          <div className='mt-8 flex justify-between items-center gap-6 text-white'>
            <AiOutlineInstagram className='text-3xl cursor-pointer hover:text-pink-600' />
            <BsFacebook className='text-3xl cursor-pointer hover:text-blue-600' />
            <FaTwitter className='text-3xl cursor-pointer hover:text-blue-300' />
            <FaPinterest className='text-3xl cursor-pointer hover:text-red-700' />
          </div>
        </span>

        {/* Contact Information */}
        <div className='flex justify-between mt-6 lg:mt-0 gap-20 max-sm:flex-wrap max-sm:gap-10 text-white'>
          <div>
            <h3 className='text-2xl'>Contact Us</h3>
            <ul className='text-slate-500 mt-3'>
              <li className='hover:text-red-300 cursor-pointer'>Email Us</li>
              <li className='hover:text-red-300 cursor-pointer'>Call Us</li>
            </ul>
          </div>

          {/* Shopping Guide */}
          <div>
            <h3 className='text-2xl'>Shopping Guide</h3>
            <ul className='text-slate-500 mt-3'>
              <li className='hover:text-red-300 cursor-pointer'>Order Status</li>
              <li className='hover:text-red-300 cursor-pointer'>Return</li>
              <li className='hover:text-red-300 cursor-pointer'>Shipping</li>
              <li className='hover:text-red-300 cursor-pointer'>Payment</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-2xl'>Services</h3>
            <ul className='text-slate-500 mt-3'>
              <li className='hover:text-red-300 cursor-pointer'>Gift Card</li>
              <li className='hover:text-red-300 cursor-pointer'>Referral</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className='text-2xl'>Categories</h3>
            <ul className='text-slate-500 mt-3'>
              <li className='hover:text-red-300 cursor-pointer'>Anime</li>
              <li className='hover:text-red-300 cursor-pointer'>Oversized</li>
              <li className='hover:text-red-300 cursor-pointer'>Anime</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className='border-1 border-slate-300 my-0 mx-10' />

      {/* Copyright and Secure Payments */}
      <div className='mt-4 flex justify-between items-start flex-wrap text-white'>
        <h1 className='mb-3'>&copy; Frenzy 2023. All rights reserved</h1>
        <div className='w-96'>
          <h2 className='text-2xl text-center mb-2'>Secure Payments</h2>
          <div className='flex text-3xl gap-6 justify-center max-sm:mt-3'>
            {/* Repeat the payment icons for visibility */}
            <FaCcVisa />
            <FaCcVisa />
            <FaCcVisa />
            <FaCcVisa />
            <FaCcVisa />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
