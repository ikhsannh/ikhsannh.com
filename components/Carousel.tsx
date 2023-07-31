import { useState } from 'react';
import CarouselCard from './CarouselCard';

interface CarouselProps {
  items: {
    title: string;
    feedback: string;
    client: string;
    clientTitle: string;
    url: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
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

    <div className="flex justify-center items-center text-center xl:fixed mt-[2rem] xl:mt-[40rem]">
      <button onClick={prevItem} className="bg-white rounded-full p-1 mr-[0.2rem] sm:mr-[1.4rem]">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Start Card */}
      <div className="flex overflow-hidden">
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

      <button onClick={nextItem} className="bg-white absolute rounded-full p-1 ml-[22.4rem] sm:ml-[29.5rem] xl:ml-[32.5rem]">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

  );
};

export default Carousel;