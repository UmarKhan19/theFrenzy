import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../store/cartSlice';
import { AiOutlineHeart, AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const WishCard = () => {
  const [hovered, setHovered] = useState(false);
  const wishlistItems = useSelector((state) => state.cart.wishlistItems);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (itemId) => {
    dispatch(removeFromWishlist(itemId)); // Dispatch action to remove from wishlist
  };

  return (
    <div className='md:flex'>
      {wishlistItems.map((item) => (
        <div
          key={item._id}
          className={`relative bg-white w-fit rounded-lg m-8 shadow-md overflow-hidden`}
          id='products'
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {hovered && (
            <div className="absolute top-2 left-2">
              <AiOutlineCloseCircle
                className="text-xl text-red-500 cursor-pointer"
                onClick={() => handleRemoveFromWishlist(item._id)}
              />
            </div>
          )}
          <Link to="/single-product">
            <img
              src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1694172010_3528247.jpg?format=webp&w=480&dpr=2.0" // Assuming there is an 'image' property in the wishlist item object
              alt="image"
              className="w-96 max-sm:h-64 cursor-pointer shadow-lg object-cover"
            />
          </Link>
          <div className="ml-2">
            <h5 className="text-base font-semibold cursor-pointer mt-3">{item.name}</h5>
            <div className="text-gray-500 text-sm mt-4">{item.description}</div>
            <div className="mt-2 flex items-center gap-3 ">
              <p className="mt-2">₹500</p>
            </div>
            <button className="mt-3 mb-2 border-2 p-3 hover:bg-gray-200">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishCard;
