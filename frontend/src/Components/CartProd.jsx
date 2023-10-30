import React,{useState} from 'react'
import {MdOutlineDeleteForever} from "react-icons/md";
import {AiOutlineHeart} from "react-icons/ai";
import {useSelector, useDispatch} from 'react-redux';
import { remove } from '../store/cartSlice';


const CartProd = () => {
  const products = useSelector(state=>state.cart.cartItems);
  const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const handleRemove = (productId)=>{
      dispatch(remove(productId));
    }
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleQuantitySelect = (quantity) => {
      setSelectedQuantity(quantity);
      toggleDropdown();
    };

  return (
    <div className='border-t-2 md:w-3/5'>
{
  Array.isArray(products) && products.map(product => (
    <div className='flex items-start flex-wrap justify-between m-3 border-b-2 pb-2'>

    <div className='flex gap-5'>
      <div>
        <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1694172010_3528247.jpg?format=webp&w=480&dpr=2.0" alt="cart-img" className='md:w-52 max-sm:w-40 cursor-pointer'/>
        </div>

        <div className=''>
        <h2 className='font-semibold'>{product.name}</h2>
        <p className=''>{product.description}</p>
        <p className=''>Size: S</p>
        <p className=''>In Stock</p>

        <div className='mt-5 flex lg:gap-8'>
        <button className='flex items-center border-2 p-2 hover:bg-gray-500 hover:text-white'><MdOutlineDeleteForever className='text-2xl' onClick={()=> handleRemove(product._id)}/>Remove</button>
        <button className='flex items-center border-2 p-2 hover:bg-gray-500 hover:text-white'><AiOutlineHeart className='text-2xl'/>Add to wishlist</button>
    </div>
      </div>
      </div>

<div className='max-sm:mt-5'>
        <h2 className='font-semibold'>Each Price</h2>
        <p>$500</p>
      </div>
      <div className='max-sm:mt-5'>
        <p className='font-semibold'>Quantity</p>
        <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
          >
          <span>{selectedQuantity}</span>
          <svg
            className="w-4 h-4 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
              />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-16 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {Array.from({ length: 10 }, (_, index) => (
              <button
              key={index}
              onClick={() => handleQuantitySelect(index + 1)}
              className={`block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                selectedQuantity === index + 1
                ? "bg-gray-100 font-semibold"
                : ""
              }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
          </div>
          <div>
          <h2 className='font-semibold max-sm:mt-5'>SubTotal</h2>
        <p>$500</p>
      </div>

    </div>
))
} 
    <hr />
      </div>
  )
}

export default CartProd
