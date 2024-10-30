"use client";


import Image from "next/image";
import { useRouter } from "next/navigation";
import { Article } from "@/app/api/home/types";
import dayjs from "dayjs";

interface BannerCarouselProps {
  data: Article
}

export const BannerCarousel = ({ data }: BannerCarouselProps) => {
  const router = useRouter()
  return (
    <div className="hidden relative md:flex items-center w-full lg:w-fit mx-auto" onClick={() => router.push(`/article/${data?.id}`)}>
      <div className="rounded-[10px] w-[360px] relative">
        <Image src={data.thumbnail} width={360} height={280} alt="" className="rounded-[10px]" />
      </div>
      <div className="bg-[#363636] w-[calc(100%-360px)] lg:w-[550px] lg:h-[320px] rounded-[10px] -ml-6 text-white pl-[60px] pr-6 py-6">
        <p className="text-white">{data.label}</p>
        <p className="text-2xl my-2">{data.title}</p>
        <p className="line-clamp-4 mt-4 text-ellipsis overflow-hidden">
          {data.short_description}
        </p>
        <p className="flex gap-4 mt-4 opacity-50 font-light absolute bottom-[40px]">
          <span>{dayjs(new Date()).diff(data?.created_at, 'days') === 0 ? "Today" : dayjs(new Date()).diff(data?.created_at, 'days') + ' days ago'}</span>
          <span>By {data?.author}</span>
        </p>
      </div>
    </div>
  );
};
