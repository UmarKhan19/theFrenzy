import React, { useState } from 'react';

// Description component for displaying product information and description
const Description = () => {
  // Initial description text
  const initialText =
    'This information is based on a sample of the product displayed on the website. There may be changes in the information on the label attached to the product delivered to the customer due to the size chosen, date of import, name of the manufacturer (in case of manufacturing in India), country of manufacture, etc. The exact details relevant to the product delivered to the customer will reflect in the label attached to the product so delivered';

  // State to track whether the description is expanded or not
  const [expanded, setExpanded] = useState(false);

  // Function to toggle the display of full description
  const toggleText = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='mt-5'>
      <h1 className='text-3xl font-bold text-red-400 mb-2'>Description And Fit</h1>
      <p>
        Patterned blouse in a sheer crêpe weave with a small stand-up collar and a keyhole opening with covered buttons at the back of the neck. Long sleeves with gathers at the shoulders and cuffs with covered buttons. Gently rounded hem.
      </p>

      <div className='mt-5 flex gap-2'>
        <h1 className='text-lg font-semibold'>Size:</h1>
        <p>Shoulder: Width: 36.6 cm (Size M/T), Back: Length: 68.0 cm (Size M/T), Sleeve: Length: 65.9 cm (Size M/T)</p>
      </div>
      
      <div className='mt-4 flex gap-2'>
        <h1 className='text-lg font-semibold'>Fit:</h1>
        <p>Regular Fit</p>
      </div>

      <div className='mt-4 flex gap-2'>
        <h1 className='text-lg font-semibold'>Disclaimer:</h1>
        <p>
          {expanded ? initialText : initialText.slice(0, 100)}
          {initialText.length > 100 && (
            <span
              className='text-blue-500 cursor-pointer'
              onClick={toggleText}
            >
              {expanded ? ' Read Less' : '... Read More'}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

export default Description;
