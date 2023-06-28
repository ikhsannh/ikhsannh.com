import Link from "next/link";

interface CarouselCardProps {
  title: string;
  feedback: string;
  client: string;
  clientTitle: string;
  url: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ title, feedback, client, clientTitle, url }) => {
  return (
    <div className="bg-white rounded-sm shadow-lg w-[18.7rem] sm:w-[23rem] xl:w-[26rem] h-[10rem] sm:pl-[2rem]">
      <Link href={url}>
        <h2 className="text-gray-500 text-[11px] sm:text-[13px] pt-2 underline font-catamaran sm:pr-10">{title}</h2>
      </Link>
      <h1 className="
          font-bold italic font-Lato relative
          text-[13px] sm:text-[13px] xl:text-[15px]  
          pt-5
          pl-[1.6rem] sm:pl-0 sm:pr-10 xl:pr-0 
          w-[17rem] sm:w-[20rem] xl:w-[23rem]">
        {feedback}
      </h1>
      <h2 className="
          text-gray-500 font-medium sm:text-[12px] text-[11px]  pt-3 mr-[1rem] sm:mr-0 sm:pr-10">{client}</h2>
      <h2 className="text-gray-500 font-medium text-xs pr-16 sm:pr-10 mr-[-3rem] sm:mr-0">{clientTitle}</h2>
    </div>
  );
};

export default CarouselCard;
