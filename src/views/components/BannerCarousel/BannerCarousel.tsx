"use client";

import Image from "next/image";
import Placeholder from '@/views/assets/Placeholder-Image.png'

export const BannerCarousel = () => {
  return (
    <div className="hidden relative md:flex items-center w-full lg:w-fit mx-auto">
      <div className="rounded-[10px] w-[360px] relative">
        <Image src={Placeholder} width={360} height={360} alt="" />
      </div>
      <div className="bg-[#363636] w-[calc(100%-360px)] lg:w-[550px] lg:h-[270px] rounded-[10px] -ml-8 text-white pl-10 pr-6 py-4">
        <p className="text-white">Music</p>
        <p className="text-2xl my-2">Kenapa Jamming Session Penting untuk Musisi?</p>
        <p>
          Sesi jamming session bukan hanya tentang bermain musik bersama,
          tetapi juga tentang kolaborasi, kreativitas, dan pembelajaran.
          Di sini,kita akan membahas mengapa setiap musisi, baik profesional maupun amatir.
        </p>
        <p className="flex gap-4 mt-4 opacity-50 font-light">
          <span>5 hours ago</span>
          <span>By writers</span>
        </p>
      </div>
    </div>
  );
};
