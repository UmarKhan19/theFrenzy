import React, { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom'; // Import Link from React Router


const cardData = [
  {
    img: "https://media.gq.com/photos/5fe120fd9d8a32220e87a1c7/master/w_1600%2Cc_limit/GettyImages-1199092762.jpg",
    changeImg:"https://images.lifestyleasia.com/wp-content/uploads/sites/7/2020/03/05152216/pratikshettyyy_75516677_627695134438535_3910379405170672241_n-645x806.jpg",
    category: "Nigga Hoddie",
    title:"Black Hoddie",
    prevPrice: "$140,00",
    newPrice: "50",
  },
  {
    img: "https://grazia.wwmindia.com/content/2022/mar/indianmodels-81646652454.jpg",
    changeImg:"https://images.lifestyleasia.com/wp-content/uploads/sites/7/2020/03/05152216/pratikshettyyy_75516677_627695134438535_3910379405170672241_n-645x806.jpg",
    category: "anime Hoddie",
    title:"Black Hoddie",
    prevPrice: "$140,00",
    newPrice: "50",
  },
  {
    img: "https://grazia.wwmindia.com/content/2022/mar/indianmodels-81646652454.jpg",
    changeImg:"https://images.lifestyleasia.com/wp-content/uploads/sites/7/2020/03/05152216/pratikshettyyy_75516677_627695134438535_3910379405170672241_n-645x806.jpg",
    category: "anime Hoddie",
    title:"Black Hoddie",
    prevPrice: "$140,00",
    newPrice: "50",
  },
  {
    img: "https://grazia.wwmindia.com/content/2022/mar/indianmodels-81646652454.jpg",
    changeImg:"https://images.lifestyleasia.com/wp-content/uploads/sites/7/2020/03/05152216/pratikshettyyy_75516677_627695134438535_3910379405170672241_n-645x806.jpg",
    category: "anime Hoddie",
    title:"Black Hoddie",
    prevPrice: "$140,00",
    newPrice: "50",
  },
  {
    img: "https://grazia.wwmindia.com/content/2022/mar/indianmodels-81646652454.jpg",
    changeImg:"https://images.lifestyleasia.com/wp-content/uploads/sites/7/2020/03/05152216/pratikshettyyy_75516677_627695134438535_3910379405170672241_n-645x806.jpg",
    category: "anime Hoddie",
    title:"Black Hoddie",
    prevPrice: "$140,00",
    newPrice: "50",
  },
  {
    img: "https://grazia.wwmindia.com/content/2022/mar/indianmodels-81646652454.jpg",
    changeImg:"https://images.lifestyleasia.com/wp-content/uploads/sites/7/2020/03/05152216/pratikshettyyy_75516677_627695134438535_3910379405170672241_n-645x806.jpg",
    category: "anime Hoddie",
    title:"Black Hoddie",
    prevPrice: "$140,00",
    newPrice: "50",
  },
];
const sizes = {
  s: 'Small',
  m: 'Medium',
  l: 'Large',
  xl: 'Extra Large',
  xxl: 'XX Large',
};
// MyCard component for rendering individual product cards
const MyCard = ({ cardData }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showSizes, setShowSizes] = useState(false);

  // Handle mouse enter event
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Handle click on "Select Option" button
  const handleSelectOptionClick = () => {
    setShowSizes(!showSizes);
  };

  // Handle close size card
  const handleCloseSizeCard = () => {
    setShowSizes(false);
  };

  return (
    <div
      className={`relative bg-white rounded-lg p-3 m-5 shadow-md overflow-hidden ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      id='products'
    >
      <Link to="/single-product">
        <img
          src={isHovered ? cardData.changeImg : cardData.img}
          alt={cardData.title}
          className="w-full h-80 max-sm:h-64 cursor-pointer shadow-lg object-cover"
        />
      </Link>
      <div className={`p-4 ${showSizes ? 'filter blur-md' : ''}`}>
        <div className="text-gray-500 text-sm">{cardData.category}</div>
        <h5 className="text-base font-semibold cursor-pointer">{cardData.title}</h5>
        <div className="text-red-600 text-sm">
          <del className="mr-1">{cardData.prevPrice}</del>${cardData.newPrice}
        </div>
        <div className={`mt-2 flex items-center gap-3 opacity-0 transition-opacity ${isHovered ? 'opacity-100' : ''}`}>
          <button
            className="border border-black px-2 py-1 hover:bg-red-400 text-sm"
            onClick={handleSelectOptionClick}
          >
            Select Option
          </button>
          <AiOutlineHeart className="text-xl cursor-pointer" />
        </div>
      </div>
      {showSizes && (
        <div className="absolute w-2/3 top-20 left-10 right-0 bg-white max-md:py-2 lg:p-4 border border-black z-10 rounded-md">
          <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={handleCloseSizeCard}>
            &times;
          </button>
          <div className="flex flex-wrap justify-between items-center px-2 py-2 max-sm:justify-center gap-1">
            {Object.entries(sizes).map(([sizeCode, sizeName]) => (
              <div
                key={sizeCode}
                className="border border-black px-2 py-1 w-20 cursor-pointer hover:bg-slate-400"
              >
                <h3>{sizeName}</h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// CardCarousel component for displaying a carousel of product cards
const CardCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.5,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="mt-4 pl-3">
      <h2 className='text-3xl font-bold text-red-400'>HOT PICKS</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['mobile']}
        itemClass="carousel-item"
        customButtonGroup={
          <div className="custom-button-group">
            <button className="custom-button prev-button">Previous</button>
            <button className="custom-button next-button">Next</button>
          </div>
        }
      >
        {cardData.map((card, index) => (
          <MyCard cardData={card} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default CardCarousel;

