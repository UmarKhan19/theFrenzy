import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom'; // Import Link from React Router


const cardData = [
  {
    img: "https://assets.bonkerscorner.com/uploads/2023/09/11103633/20230725_060209000_iOS.jpg",
    category: "Superman Hoddie",
  },
  {
    img: "https://assets.bonkerscorner.com/uploads/2023/05/28155556/Bonkerscorner_Squad-sweats_02.jpg",
    category: "Naruto Hoddie",
  },
  {
    img: "https://assets.bonkerscorner.com/uploads/2023/03/20113050/Bonkerscorner_Blue-Good-Vibes_02.jpg",
    category: "Superman Hoddie",
  },
  {
    img: "https://assets.bonkerscorner.com/uploads/2023/05/11104856/pika-pika-navy-blue-sweatshirt-9.jpg",
    category: "Anime Hoddie",
  },
  {
    img: "https://assets.bonkerscorner.com/uploads/2023/08/10114838/20230809_115850213_iOS.jpg",
    category: "Naruto Hoddie",
  },
  {
    img: "https://assets.bonkerscorner.com/uploads/2023/05/29132836/Bonkerscorner_Ice-Hockey-Jersy-Orange_Sweatshirt_02.jpg",
    category: "Superman Hoddie",
  },
  {
    img: "https://assets.bonkerscorner.com/uploads/2023/04/29142225/Bonkerscorner_Vegeta_01.jpg",
    category: "Anime Hoddie",
  },
];

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

  return (
    <div className='bg-white shadow-lg max-sm:border-2  mr-4 lg:h-[80vh]'>
    <div className="bg-white  shadow-md">
    <Link to="/single-product">
      <img
        src={cardData.img}
        alt={cardData.title}
        className="w-full h-[70vh] max-sm:h-60 cursor-pointer shadow-lg object-cover"
        />
    </Link>
    <div className="p-4">
  <div className="text-gray-500 text-4xl text-center">{cardData.category}</div>
</div>

  </div>
    </div>
);
};

// CardCarousel component for displaying a carousel of product cards
const CardCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.5,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="mt-16 pl-3">
      <h2 className='text-3xl font-medium title-font text-gray-900 mb-6 text-center'>Categories</h2>
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

