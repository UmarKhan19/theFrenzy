import React, { useState } from 'react';

// import { AiOutlineStar } from "react-icons/ai";
// import { AiFillStar } from "react-icons/ai";
import StarReview from './StarReview';
import ProductDetails from './ProductDetails';
import Description from './Description';


const ProductPage = () => {
  // State for images
  const [images, setImages] = useState({
    img1: "https://assets.bonkerscorner.com/uploads/2023/09/11103633/20230725_060209000_iOS.jpg",
    img2: "https://assets.bonkerscorner.com/uploads/2023/05/28155556/Bonkerscorner_Squad-sweats_02.jpg",
    img3: "https://assets.bonkerscorner.com/uploads/2023/05/11104856/pika-pika-navy-blue-sweatshirt-9.jpg",
    img4: "https://assets.bonkerscorner.com/uploads/2023/04/29142225/Bonkerscorner_Vegeta_01.jpg",
  });

  // State for the active image
  const [activeImg, setActiveImage] = useState(images.img1);

  return (
    <div className='flex flex-col justify-between pt-10  lg:flex-row max-lg:gap-5 gap-16 lg:items-center'>
      {/* Left Section - Images */}
      <div className='flex flex-col gap-5 lg:w-2/4 px-3 pb-6'>
        <img src={activeImg} alt="" className='w-full h-full aspect-square object-cover rounded-xl' />
        <div className='flex flex-row justify-between  md:justify-around max-sm:gap-2 gap-2'>
          <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer md:w-44 md:h-44 object-cover' onClick={() => setActiveImage(images.img1)} />
          <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer md:w-44 md:h-44 object-cover' onClick={() => setActiveImage(images.img2)} />
          <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer md:w-44 md:h-44 object-cover' onClick={() => setActiveImage(images.img3)} />
          <img src={images.img4} alt="" className='w-24 h-24 rounded-md cursor-pointer md:w-44 md:h-44 object-cover' onClick={() => setActiveImage(images.img4)} />
        </div>
      </div>

      {/* Right Section - Product Details */}
      <div className='flex flex-col items-center gap-2 lg:w-2/4  px-3 pb-7 h-11/12'>
        <div className='h-fit lg:pt-10'>
        <ProductDetails/>
        {/* Quantity, button, share, Ratings */}
        <StarReview/>
        {/* Disclaimer */}
        <Description/>
      </div>
        </div>
    </div>
  );
}

export default ProductPage;
