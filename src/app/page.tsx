'use client'

import TopNavigation from "@/views/components/Navigation/TopNavigation";
import { BannerCarousel } from "@/views/components/BannerCarousel";
import { LeftCarousel } from "@/views/components/LeftCarousel";
import BannerCarouselMobile from "@/views/components/BannerCarouselMobile";
import Image from "next/image";
import AdsExample from '@/views/assets/Ads-Example.png'
import { useGetDynamicHome } from "@/domains/home/query/use-get-dynamic-home";
import { BannerCarouselLoader } from "@/views/components/BannerCarousel/Loader"
import { Helmet } from "react-helmet";

export default function Home() {
  const { data, isLoading } = useGetDynamicHome()

  return (
    <>
      <Helmet>
        <title>Cirkel Blog | Homepage</title>
        <meta name="description" content="Join our vibrant music community! Explore the latest music news, album reviews, artist interviews, industry insights, and connect with fellow music lovers. Discover new sounds, share playlists, and stay tuned for everything happening in the world of music." />
        <meta name="keywords" content="music blog, music community, album reviews, artist interviews, music news, playlists, music discovery, music industry" />
        <meta name="author" content="Cirkel Blog" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blog.cirkel.id" />
        <meta property="og:title" content="Cirkel Blog" />
        <meta property="og:description" content="Join our vibrant music community! Explore the latest music news, album reviews, artist interviews, industry insights, and connect with fellow music lovers. Discover new sounds, share playlists, and stay tuned for everything happening in the world of music." />
        <meta property="og:image" content="https://res.cloudinary.com/dyav0ifqg/image/upload/v1730205428/DALL_E_2024-10-27_16.40.01_-_A_vibrant_detailed_illustration_of_musicians_considering_a_music_studio_for_a_jamming_session_or_band_practice._The_scene_includes_various_factors_th.webp" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://blog.cirkel.id" />
        <meta property="twitter:title" content="Cirkel Blog" />
        <meta property="twitter:description" content="Join our vibrant music community! Explore the latest music news, album reviews, artist interviews, industry insights, and connect with fellow music lovers. Discover new sounds, share playlists, and stay tuned for everything happening in the world of music." />
        <meta property="twitter:image" content="https://res.cloudinary.com/dyav0ifqg/image/upload/v1730205428/DALL_E_2024-10-27_16.40.01_-_A_vibrant_detailed_illustration_of_musicians_considering_a_music_studio_for_a_jamming_session_or_band_practice._The_scene_includes_various_factors_th.webp" />

        <meta name="robots" content="index, follow" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <link rel="icon" href="https://blog.cirkel.id/favicon.ico" type="image/x-icon" />
      </Helmet>
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
    </>

  );
}
