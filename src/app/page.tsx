'use client'

import TopNavigation from "@/views/components/Navigation/TopNavigation";
import { BannerCarousel } from "@/views/components/BannerCarousel";
import { LeftCarousel } from "@/views/components/LeftCarousel";
import BannerCarouselMobile from "@/views/components/BannerCarouselMobile";
import Image from "next/image";
import AdsExample from '@/views/assets/Ads-Example.png'
import { useGetDynamicHome } from "@/domains/home/query/use-get-dynamic-home";
import { BannerCarouselLoader } from "@/views/components/BannerCarousel/Loader"

export default function Home() {
  const { data, isLoading } = useGetDynamicHome()

  return (
    <main className="pb-[80px]">
      <TopNavigation />
      <div className="max-w-[1260px] lg:mx-auto overflow-x-hidden">
        <div className="mb-[25px]" />
        <div className="mb-8 flex justify-center">
          {
            data ? <>
              <BannerCarouselMobile data={data?.data?.highlight} />
              <BannerCarousel data={data?.data?.highlight} />
            </> : <BannerCarouselLoader />
          }
        </div>
        {/* <div className="px-6">
          <TrackCarousel />
        </div> */}
        <Image className="md:w-fit mx-auto" src={AdsExample} alt="Ads" />
        {
          data?.data.dynamic.map((item, index) => {
            return (
              <div className="px-6 mt-10" key={index}>
                <LeftCarousel title={item.title} subtitle={item.description} data={item.data} />
              </div>
            )
          })
        }
        {/* <div className="px-6 mt-10">
          <LeftCarousel title="Shaping Basic Skill" subtitle="Build rock solid fundamental skills" />
        </div>
        <div className="px-6">
          <LeftCarousel title="Multi Genre" subtitle="How to become genre's polyglot" />
        </div> */}
      </div>
      <div className="bg-white text-inactive shadow-input fixed w-full left-0 bottom-0 px-[20px] py-[20px] z-[99]" style={{ boxShadow: "rgba(0, 0, 0, 0.06) 0px -6px 24px 0px" }}>
        <div className="flex justify-center">
          <span>&copy;</span>
          <span className="mr-1">2024</span>
          <span className="mr-1">Cirkel.</span>
          <span> All Rights Reserved.</span>
        </div>
      </div>
    </main>
  );
}
