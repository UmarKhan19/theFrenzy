import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom'; // Import Link from React Router


const cardData = [
  {
    img: "https://assets.bonkerscorner.com/uploads/2023/09/11103633/20230725_060209000_iOS.jpg",
    changeImg: "https://assets.bonkerscorner.com/uploads/2023/05/28155556/Bonkerscorner_Squad-sweats_02.jpg",
    category: "Nigga Hoddie",
    title:"Black Hoddie",
    prevPrice: "$140,00",
    newPrice: "50",
  },
  {
    img: "https://assets.bonkerscorner.com/uploads/2023/03/20113050/Bonkerscorner_Blue-Good-Vibes_02.jpg",
    changeImg: "https://assets.bonkerscorner.com/uploads/2023/05/29132836/Bonkerscorner_Ice-Hockey-Jersy-Orange_Sweatshirt_02.jpg",
    category: "anime Hoddie",
    title:"Black Hoddie",
    prevPrice: "$140,00",
    newPrice: "50",
  },
  {
    img: "https://assets.bonkerscorner.com/uploads/2023/05/11104856/pika-pika-navy-blue-sweatshirt-9.jpg",
    changeImg: "https://assets.bonkerscorner.com/uploads/2023/08/10114838/20230809_115850213_iOS.jpg",
    category: "anime Hoddie",
    title:"Black Hoddie",
    prevPrice: "$140,00",
    newPrice: "50",
  },
  {
    img: "https://assets.bonkerscorner.com/uploads/2023/08/10114838/20230809_115850213_iOS.jpg",
    changeImg: "https://assets.bonkerscorner.com/uploads/2023/05/11104856/pika-pika-navy-blue-sweatshirt-9.jpg",
    category: "anime Hoddie",
    title:"Black Hoddie",
    prevPrice: "$140,00",
    newPrice: "50",
  },
  {
    img: "https://assets.bonkerscorner.com/uploads/2023/05/29132836/Bonkerscorner_Ice-Hockey-Jersy-Orange_Sweatshirt_02.jpg",
    changeImg: "https://assets.bonkerscorner.com/uploads/2023/04/29142225/Bonkerscorner_Vegeta_01.jpg",
    category: "anime Hoddie",
    title:"Black Hoddie",
    prevPrice: "$140,00",
    newPrice: "50",
  },
  {
    img: "https://assets.bonkerscorner.com/uploads/2023/04/29142225/Bonkerscorner_Vegeta_01.jpg",
    changeImg: "https://assets.bonkerscorner.com/uploads/2023/05/28155556/Bonkerscorner_Squad-sweats_02.jpg",
    category: "anime Hoddie",
    title:"Black Hoddie",
    prevPrice: "$140,00",
    newPrice: "50",
  },
];


// //////////////////////////////////////////////////////////////////
// MyCard component for rendering individual product cards
// //////////////////////////////////////////////////////////////////
const MyCard = ({ cardData }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);

  // Handle mouse enter event
  const handleMouseEnter = () => {
    if (!isSmallScreen) {
      setIsHovered(true);
    }
  };

  // Handle mouse leave event
  const handleMouseLeave = () => {
    if (!isSmallScreen) {
      setIsHovered(false);
    }
  };

  // Handle click on card to toggle open/close
  const handleCardToggle = () => {
    setIsCardOpen(!isCardOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
      if (window.innerWidth > 640) {
        setIsHovered(false); // Reset hover state on larger screens
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`relative lg:w-1/4 md:w-1/3 w-full h-fit m-3 overflow-hidden  ${
        isHovered || isCardOpen || isSmallScreen ? 'hovered' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardToggle}
    >
      {(isSmallScreen || isHovered || isCardOpen) && (
        <AiOutlineClose
          className="absolute top-3 left-4 text-black bg-white p-1 text-2xl cursor-pointer"
          onClick={handleCardToggle}
        />
      )}
      <Link to="/single-product">
        <img
          src={isHovered ? cardData.changeImg : cardData.img}
          alt={cardData.title}
          className="w-full max-h-2/6 cursor-pointer shadow-lg object-cover"
        />
      </Link>
      <div className="mt-3 pl-2 pb-4">
        <div className="text-gray-500 text-sm">{cardData.category}</div>
        <h5 className="text-base font-semibold cursor-pointer mt-2">{cardData.title}</h5>
        <div className="text-red-600 text-sm mt-2">
          <del className="mr-1">{cardData.prevPrice}</del>${cardData.newPrice}
        </div>
      </div>
    </div>
  );
};

// //////////////////////////////////////////////////////////////////
// CardCarousel component for displaying a flex wrap of product cards
// //////////////////////////////////////////////////////////////////
const CardCarousel = () => {
  return (
    <div className="mt-6 mb-10 flex justify-center md:gap-20 flex-wrap lg:gap-10">
      {cardData.map((card, index) => (
        <MyCard cardData={card} key={index} />
      ))}
    </div>
  );
};

export default CardCarousel;