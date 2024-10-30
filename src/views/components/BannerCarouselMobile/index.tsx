import Image from "next/image"
import { Article } from "@/app/api/home/types"
import dayjs from 'dayjs'
import { useRouter } from "next/navigation"

interface BannerCarouselMobileProps {
  data: Article
}

const BannerCarouselMobile = (props: BannerCarouselMobileProps) => {
  const router = useRouter()
  return (
    <div className="flex flex-col md:hidden relative items-start justify-center w-[90%]" onClick={() => router.push(`/article/${props.data?.id}`)}>
      <div className="rounded-[10px] w-full h-[200px] relative">
        <Image src={props.data?.thumbnail} fill alt="" className="object-cover rounded-t-[10px]" />
      </div>
      <div className="bg-[#363636] w-full rounded-b-[10px] text-white pl-10 pr-6 py-4 box-border">
        <p className="text-white">{props.data?.label}</p>
        <p className="text-2xl my-2">{props.data?.title}</p>
        <p className=" line-clamp-3 overflow-hidden text-ellipsis">
          {props.data?.short_description}
        </p>
        <p className="flex gap-4 mt-4 opacity-50 font-light">
          <span>{dayjs(new Date()).diff(props.data?.created_at, 'days') === 0 ? "Today" : dayjs(new Date()).diff(props.data?.created_at, 'days') + ' days ago'}</span>
          <span>By {props.data?.author}</span>
        </p>
      </div>
    </div>
  )
}

export default BannerCarouselMobile