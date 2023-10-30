import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";


const HomeFollow = () => {
  return (
    <div className='w-full '>
      <div className='flex items-center justify-center gap-4 mt-6'>
        <h2 className='text-3xl max-sm:text-xl font-bold'>Follow Us</h2>
        <div className='w-10 bg-black h-1'></div>
        <div className='flex justify-between items-center gap-6 text-black'>
            <AiOutlineInstagram className='text-3xl max-sm:text-xl cursor-pointer hover:text-pink-600' />
            <BsFacebook className='text-3xl max-sm:text-xl cursor-pointer hover:text-blue-600' />
            <FaTwitter className='text-3xl max-sm:text-xl cursor-pointer hover:text-blue-300' />
            <FaPinterest className='text-3xl max-sm:text-xl cursor-pointer hover:text-red-700' />
          </div>
      </div>

      {/* <div className='mt-10 px-10 py-5 flex justify-between mb-5 gap-1'>
        <div className='w-80 flex flex-col items-center'>
            <div><AiOutlineFieldTime className='text-8xl text-slate-400 mb-6 m-auto'/></div>
            <h3 className='text-3xl font-bold mb-6'>Fast Delivery</h3>
           <p className='text-center'>Your order will be shipped within 48 hours from the time since order is placed!</p> 
        </div>
        
        <div className='w-80 flex flex-col items-center'>
            <div><AiOutlineFieldTime className='text-8xl text-slate-400 mb-6 m-auto'/></div>
            <h3 className='text-3xl font-bold mb-6'>Fast Delivery</h3>
           <p className='text-center'>Your order will be shipped within 48 hours from the time since order is placed!</p> 
        </div>

        <div className='w-80 flex flex-col items-center'>
            <div><AiOutlineFieldTime className='text-8xl text-slate-400 mb-6 m-auto'/></div>
            <h3 className='text-3xl font-bold mb-6'>Fast Delivery</h3>
           <p className='text-center'>Your order will be shipped within 48 hours from the time since order is placed!</p> 
        </div>
      </div> */}
    </div>
  )
}

export default HomeFollow
