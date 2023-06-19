import { useState } from 'react';
import CarouselCard from './CarouselCard';

const Carousel = ({ items }) => {
  const [currentItem, setCurrentItem] = useState(0);

  const prevItem = () => {
    let newSlide = currentItem === 0 ? items.length - 1 : currentItem - 1;
    setCurrentItem(newSlide);
  };

  const nextItem = () => {
    let newSlide = currentItem === items.length - 1 ? 0 : currentItem + 1;
    setCurrentItem(newSlide);
  };

  return (

    <div className="flex items-center text-center sm:fixed mt-10 sm:mt-[35rem]">


      <button onClick={prevItem} className="bg-gray-200 rounded-full p-1 ml-[0.5rem] mr-1">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Start Card */}
      <div className="flex ml-[0.2rem] sm:ml-[0.5rem] overflow-hidden">
        {items.map((item, index) => {
          if (index === currentItem) {
            return (
              <div key={index} className="flex-shrink-0">
                <CarouselCard title={item.title} feedback={item.feedback} client={item.client} clientTitle={item.clientTitle} url={item.url} />
              </div>
            );
          }
        })}
      </div>
      {/* End Card */}

      <button onClick={nextItem} className="bg-gray-200 absolute rounded-full p-1 ml-[21.5rem] sm:ml-[30rem]">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>


    </div>
  );
};

export default Carousel;