import Image, { StaticImageData } from "next/image";

interface CardProps {
  image: string | StaticImageData;
  label: string;
  title: string;
  time: string;
  author: string;
}

export const Card = ({ image, label, title, time, author }: CardProps) => {
  return (
    <div className="flex flex-col flex-1 h-full min-w-[220px] max-w-[220px] md:min-w-[242px] md:max-w-[242px] pb-1 cursor-pointer">
      <div className="img-container h-[153px] relative rounded-t-[10px]">
        <Image fill src={image} alt="" />
      </div>
      <div className="desc-container flex flex-col justify-between shadow-lg px-4 pb-6 rounded-b-2xl bg-white h-[calc(100%-153px)]">
        <div className="title-container flex-col justify-between">
          <p className="text-secondary-darker mt-2 text-left text-sm lg:text-base font-light mb-1 md:mb-2">{label}</p>
          <p className="text-secondary-darker font-medium text-left break-words text-lg leading-6 lg:text-2xl mb-4">{title}</p>
        </div>
        <div className="author-container flex justify-between text-sm">
          <span className="text-secondary-dark">{time}</span>
          <span className="text-secondary-dark">By {author}</span>
        </div>
      </div>
    </div>
  )
}