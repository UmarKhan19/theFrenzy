import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import { add, addToWishlist } from '../store/cartSlice';
import Nav from "../Components/Nav";

function YourComponent() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);

  // Save cart items to local storage whenever the cart changes
  useEffect(() => {
    localStorage.setItem('CartProduct', JSON.stringify(cartItems));
    console.log('Cart Items saved to local storage:', cartItems);

  }, [cartItems]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/product/all');
        setProducts(response.data.products);
        setLoading(false);
        console.log(response);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    

    fetchData();
  }, []);

  const handleAdd = (product)=>{
    dispatch(add(product));
  }

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };

  return (
    <div>
      <Nav/>
      <h1 className='text-center font-bold text-2xl'>Product List</h1>
      <p>Total Items: {products.length}</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className='flex flex-wrap'>
          {products.map((product,index) => (
  <li key={index} className='border-2 m-4 p-4'>
  <img src={product.variants[0]?.images[0] ||"damn"} alt="" className='w-full h-80 max-sm:h-60 cursor-pointer shadow-lg object-cover mb-5' />
  <p>{product.name}</p>
  <p>{product.description}</p>
  <p className='font-bold mt-2'>{product.price}</p>
  <div className='flex gap-2'>
  <button className='mt-4 bg-blue-300 p-4  border-2' onClick={()=>handleAdd(product)}>Add To Cart</button>
  <button className='mt-4 bg-blue-300 p-4 border-2' onClick={() => handleAddToWishlist(product)}>Add to wishlist</button>
  </div>
  </li>
  ))}
        </ul>
      )}
    </div>
  );
}

export default YourComponent;
