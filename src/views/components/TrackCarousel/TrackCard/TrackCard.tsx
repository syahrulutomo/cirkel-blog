import Image, { StaticImageData } from "next/image";

interface TrackCardProps {
  image: string | StaticImageData;
  instruments: string[];
  username: string;
  audio: any;
}

export const TrackCard = ({ image, username, instruments, audio }: TrackCardProps) => {
  return (
    <div className="flex flex-col flex-1 h-full min-w-[238px] max-w-[238px] shadow-md border-[1px] border-neutral-200 rounded-2xl bg-white cursor-pointer" >
      <div className="w-[153px] h-[153px] relative rounded-t-[10px] mx-auto mt-2.5">
        <Image fill className="aspect-square" src={image} alt="" />
      </div>
      <div className="flex items-center justify-between px-4 pb-4 rounded-2xl relative">
        <div className="flex-col">
          <p className="text-gray-900 mt-2 text-left text-2xl font-medium mb-1">{username}</p>
          <p className="text-gray-900 text-left break-words text-sm">{instruments.map((item, index) => (<span key={index}>{item}</span>))}</p>
        </div>
        <div className="flex justify-between text-sm mt-4" onClick={() => console.log('play')}>
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="35" height="35" rx="17.5" transform="matrix(1 0 0 -1 0 35)" fill="#C000EF" />
            <rect width="35" height="35" rx="17.5" transform="matrix(1 0 0 -1 0 35)" fill="white" fill-opacity="0.9" />
            <path d="M14.2812 23.7812C13.8188 24.0655 13.2375 24.0749 12.7656 23.8093C12.2937 23.5437 12 23.0437 12 22.4999V11.4999C12 10.9562 12.2937 10.4562 12.7656 10.1905C13.2375 9.92491 13.8188 9.93741 14.2812 10.2187L23.2812 15.7187C23.7281 15.9905 24 16.4749 24 16.9999C24 17.5249 23.7281 18.0062 23.2812 18.2812L14.2812 23.7812Z" fill="#C000EF" />
            <path d="M14.2812 23.7812C13.8188 24.0655 13.2375 24.0749 12.7656 23.8093C12.2937 23.5437 12 23.0437 12 22.4999V11.4999C12 10.9562 12.2937 10.4562 12.7656 10.1905C13.2375 9.92491 13.8188 9.93741 14.2812 10.2187L23.2812 15.7187C23.7281 15.9905 24 16.4749 24 16.9999C24 17.5249 23.7281 18.0062 23.2812 18.2812L14.2812 23.7812Z" fill="white" fill-opacity="0.2" />
          </svg>
        </div>
      </div>
    </div >
  )
}