import Image from "next/image"
import Placeholder from '@/views/assets/Placeholder-Image-Cropped.png'

const BannerCarouselMobile = () => {
  return (
    <div className="flex flex-col md:hidden relative items-start justify-center w-[90%]">
      <div className="rounded-[10px] w-full h-[200px] relative">
        <Image src={Placeholder} fill alt="" className="object-cover rounded-t-[10px]" />
      </div>
      <div className="bg-[#363636] w-full rounded-b-[10px] text-white pl-10 pr-6 py-4 box-border">
        <p className="text-white">Music</p>
        <p className="text-2xl my-2">Kenapa Jamming Session Penting untuk Musisi?</p>
        <p>
          Sesi jamming session bukan hanya tentang bermain musik bersama,
          ...
        </p>
        <p className="flex gap-4 mt-4 opacity-50 font-light">
          <span>5 hours ago</span>
          <span>By writers</span>
        </p>
      </div>
    </div>
  )
}

export default BannerCarouselMobile