"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Card } from "../Card";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { twMerge } from "tailwind-merge";
import { useInView } from "react-intersection-observer";
import { Article } from "@/app/api/home/types";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

interface LeftCarouselProps {
  title: string;
  subtitle: string;
  data: Article[]
}

export const LeftCarousel = ({ title, subtitle, data }: LeftCarouselProps) => {
  const router = useRouter()
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  return (
    <div className="left-carousel flex flex-col lg:flex-row relative gap-6 overflow-hidden">
      <div className="flex flex-col lg:min-w-[230px]">
        <p className="text-xl lg:text-[44px] font-medium lg:leading-[50px] lg:mb-6 lg:max-w-[200px]">{title}</p>
        <p className="text-sm lg:text-[24px] leading-8 lg:font-medium lg:max-w-[200px]">{subtitle}</p>
      </div>
      <Carousel
        showIndicators={false}
        centerMode
        showArrows
        swipeable
        dynamicHeight={false}
        renderArrowPrev={(handler, hasPrev, label) => (
          <div className={twMerge("cursor-pointer absolute -left-[255px] bottom-0 rounded-full w-[40px] h-[40px]  flex gap-2 justify-center items-center z-50", hasPrev ? 'bg-main-light ' : "bg-gray-200")}>
            <ArrowLeft2
              size={20}
              className={twMerge(
                " text-white z-50",
                !hasPrev && "text-inactive"
              )}
              onClick={handler}
            />
          </div>
        )}
        renderArrowNext={(handler, hasNext, label) => (
          <div className={twMerge("cursor-pointer absolute -left-[110px] bottom-0 rounded-full w-[40px] h-[40px]  flex gap-2 justify-center items-center z-50", hasNext && 'bg-main-light ', inView || !hasNext ? "bg-gray-200" : "")}>
            <ArrowRight2
              size={20}
              className={twMerge(
                " text-white z-50",
                !hasNext || inView ? "text-inactive" : ""
              )}
              onClick={!inView ? handler : () => console.log('noop')}
            />
          </div>
        )}
      >
        {data.map((item, index) => {
          if (index === data.length) return <div key={index} ref={ref} />
          else return (
            <Card
              key={index}
              image={item.thumbnail}
              title={item.title}
              label={item.label}
              time={dayjs(new Date()).diff(item.created_at, 'days') === 0 ? "Today" : dayjs(new Date()).diff(item.created_at, 'days') + ' days ago'}
              author={item.author}
              onClick={() => router.push(`/article/${item.id}`)}
            />
          )
        })}
      </Carousel>
    </div>
  );
};
