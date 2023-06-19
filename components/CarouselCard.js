import Link from "next/link";

const CarouselCard = ({ title, feedback, client, clientTitle, url }) => {
  return (
    <div className="bg-white rounded-sm shadow-lg w-[18.7rem] sm:w-[26rem] h-[10rem] sm:pl-[2rem]">

      <Link href={url}>
        <h2 className="text-gray-500 text-[11px] sm:text-[13px] pt-2 underline font-catamaran mr-[1rem] sm:mr-0 sm:pr-10">{title}</h2>
      </Link>
      <h1 className="relative pt-5 text-[13px] sm:text[13px] font-bold italic font-Lato ml-2 sm:ml-0 sm:pl-10 w-[17rem] sm:w-80 ">{feedback}</h1>
      <h2 className="text-gray-500 font-medium sm:text-[12px] text-[11px]  pt-5 mr-[1rem] sm:mr-0 sm:pr-10">{client}</h2>
      <h2 className="text-gray-500 font-medium text-xs pr-16 sm:pr-10 mr-[-3rem] sm:mr-0">{clientTitle}</h2>

    </div>
  );
};

export default CarouselCard;