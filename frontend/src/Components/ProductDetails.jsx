import React from 'react';

// ProductDetails component for displaying product details
const ProductDetails = () => {
  // Define available sizes
  const sizes = {
    s: 'S',
    m: 'M',
    l: 'L',
    xl: 'XL',
    xxl: 'XXL',
  };

  // Define available colors
  const colors = ['black', 'Blue', 'Green', 'Yellow', 'Purple'];

  return (
    <div>
      {/* Product title */}
      <div>
        <span className='text-red-300 font-semibold'>Special T-shirt</span>
        <h1 className='text-3xl font-bold mb-2 mt-2'>Coco Stripes Oversized T-shirt</h1>
      </div>
      <hr className='border-2 border-slate-400 mr-20' />

      {/* Product price */}
      <div className='mt-5 flex items-center'>
        <del className='text-2xl font-semibold  mr-3'>₨ 3999.00</del>
        <span className='text-2xl text-red-400 mr-6'>₨ 1999</span>
        <span className='w-fit bg-red-500 px-3 py-1 text-white'>-50% off</span>
      </div>

      {/* Size selection */}
      <div className='mt-4'>
        <h3 className='text-black text-xl'>Please Select a Size? <a href='' className='text-red-400 hover:underline hover:underline-offset-8'>Size Chart</a></h3>

        <div className='flex flex-row items-start  gap-6 mt-7 mb-4'>
          <div className='text-xl'>Size</div>

          <div className='flex gap-3 justify-start max-sm:flex-wrap rounded-full'>
            {Object.keys(sizes).map((size) => (
              <div
                key={size}
                className='border border-black px-4 py-2 rounded-full hover:bg-gray-200 cursor-pointer'
              >
                {sizes[size]}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Color selection */}
      <div className='flex items-center gap-5 mb-3'>
        <h3 className='text-xl'>Colors</h3>
        <div className='flex gap-2 mt-2'>
          {colors.map((color) => (
            <div
              key={color}
              className={`w-8 h-8 rounded-full cursor-pointer border-2 border-white bg-${color.toLowerCase()}`}
              style={{ backgroundColor: color.toLowerCase() }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
