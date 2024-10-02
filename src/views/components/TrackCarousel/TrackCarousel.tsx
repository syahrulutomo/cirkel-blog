"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { TrackCard } from "./TrackCard";
import TrackPlaceholderImage from "@/views/assets/Track-Placeholder-Image.png";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { twMerge } from "tailwind-merge";
import { useInView } from "react-intersection-observer";

export const TrackCarousel = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  return (
    <div className="track-carousel relative pb-4">
      <div>
        <p className="text-2xl font-medium mb-4">Musician We Love</p>
      </div>
      <Carousel
        centerMode
        showIndicators={false}
        showArrows
        swipeable
        dynamicHeight={false}
        renderArrowPrev={(handler, hasPrev, username) => (
          <div className={twMerge("cursor-pointer absolute left-0 bottom-1/2 rounded-full w-[40px] h-[40px]  flex gap-2 justify-center items-center z-[99]", hasPrev ? 'bg-main-light ' : "bg-gray-200")}>
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
        renderArrowNext={(handler, hasNext, username) => (
          <div className={twMerge("cursor-pointer absolute right-0 bottom-1/2 rounded-full w-[40px] h-[40px]  flex gap-2 justify-center items-center z-[99]", hasNext && 'bg-main-light ', inView || !hasNext ? "bg-gray-200" : "")}>
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
        <TrackCard
          image={TrackPlaceholderImage}
          instruments={['Guitar']}
          username="Ibrani Pandean"
          audio=""
        />
        <TrackCard
          image={TrackPlaceholderImage}
          instruments={['Guitar']}
          username="Ibrani Pandean"
          audio=""
        />
        <TrackCard
          image={TrackPlaceholderImage}
          instruments={['Guitar']}
          username="Ibrani Pandean"
          audio=""
        />
        <TrackCard
          image={TrackPlaceholderImage}
          instruments={['Guitar']}
          username="Ibrani Pandean"
          audio=""
        />
        <TrackCard
          image={TrackPlaceholderImage}
          instruments={['Guitar']}
          username="Ibrani Pandean"
          audio=""
        />
        <div ref={ref} />
      </Carousel>
    </div>
  );
};
