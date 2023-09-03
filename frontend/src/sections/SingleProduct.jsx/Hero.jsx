import React, { useState } from 'react';

// import { AiOutlineStar } from "react-icons/ai";
// import { AiFillStar } from "react-icons/ai";
import StarReview from './StarReview';
import ProductDetails from './ProductDetails';
import Description from './Description';


const ProductPage = () => {
  // State for images
  const [images, setImages] = useState({
    img1: "https://images.squarespace-cdn.com/content/v1/553417b2e4b03cb74b7dfb0f/1579878563897-M830FSGU5B0ZBZNAP10B/_SDR0313.jpg?format=1000w",
    img2: "https://media.gq.com/photos/5fe120fd9d8a32220e87a1c7/master/w_1600%2Cc_limit/GettyImages-1199092762.jpg",
    img3: "https://images.squarespace-cdn.com/content/v1/553417b2e4b03cb74b7dfb0f/1579878563897-M830FSGU5B0ZBZNAP10B/_SDR0313.jpg?format=1000w",
    img4: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2020/03/05152216/pratikshettyyy_75516677_627695134438535_3910379405170672241_n-645x806.jpg"
  });

  // State for the active image
  const [activeImg, setActiveImage] = useState(images.img1);

  return (
    <div className='flex flex-col justify-between  lg:flex-row max-lg:gap-5 gap-16 lg:items-center'>
      {/* Left Section - Images */}
      <div className='flex flex-col gap-5 lg:w-2/4 pt-32 px-3 pb-6'>
        <img src={activeImg} alt="" className='w-full h-full aspect-square object-cover rounded-xl' />
        <div className='flex flex-row justify-between  md:justify-around max-sm:gap-2 gap-2'>
          <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer md:w-44 md:h-44 object-cover' onClick={() => setActiveImage(images.img1)} />
          <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer md:w-44 md:h-44 object-cover' onClick={() => setActiveImage(images.img2)} />
          <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer md:w-44 md:h-44 object-cover' onClick={() => setActiveImage(images.img3)} />
          <img src={images.img4} alt="" className='w-24 h-24 rounded-md cursor-pointer md:w-44 md:h-44 object-cover' onClick={() => setActiveImage(images.img4)} />
        </div>
      </div>

      {/* Right Section - Product Details */}
      <div className='flex flex-col items-center gap-2 lg:w-2/4  px-3 pb-7 h-11/12 lg:pt-16'>
        <div className='h-fit lg:pt-28'>
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
