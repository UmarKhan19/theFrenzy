import React,{useState} from 'react'
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"

const StarReview = () => {
  const [amount, setAmount] = useState(1);

  // Increase quantity
  const handleIncrement = () => {
    setAmount(amount + 1);
  };

  // Decrease quantity (minimum 1)
  const handleDecrement = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  return (
    <>
      {/* Quantity Selection */}
      <div className='flex items-center gap-0'>
        <h3 className='text-xl'>Quantity</h3>
        <div>
          <div className="flex items-center w-40 px-3 py-2 rounded-lg">
            <button
              onClick={handleDecrement}
              className="text-xl font-bold text-red-600 w-1/4"
            >
              -
            </button>
            <div className="text-lg font-semibold w-3/5 text-center border-black border-2 mx-2">{amount}</div>
            <button
              onClick={handleIncrement}
              className="text-xl font-bold text-red-600 w-1/4"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className='mt-4 flex gap-3'>
        <button className='bg-red-500 hover:bg-red-600 px-7 w-1/2 py-2 text-white cursor-pointer'>Add To Cart</button>
        <button className='px-3 flex items-center w-fit cursor-pointer hover:text-red-500 max-sm:px-3'><AiOutlineHeart className="text-2xl" /></button>
      </div>

      {/* Share Icons */}
      <div className='mt-4 flex items-center gap-6'>
        <h3 className='text-xl font-semibold'>Share</h3>
        <div className='flex gap-3 text-slate-400'>
          <FaWhatsapp className='text-2xl cursor-pointer hover:text-green-600' />
          <AiOutlineInstagram className='text-2xl cursor-pointer hover:text-pink-600' />
          <BsFacebook className='text-2xl cursor-pointer hover:text-blue-600' />
        </div>
      </div>

      {/* Reviews */}
      <div className='flex items-center gap-4 mt-2'>
        <div className='flex'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
        <div>
          <span>(6 reviews)</span>
        </div>
      </div>
    </>
  );
}

export default StarReview;
