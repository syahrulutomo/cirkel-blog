'use client'

import Image from "next/image"
import { ArrowRight } from "iconsax-react"
import TopNavigation from "@/views/components/Navigation/TopNavigation"
import { usePathname } from "next/navigation"
import { ARTICLES_LIBRARY } from "@/domains/home/constants/articles"
import dayjs from "dayjs"
import showdown from 'showdown';
import AdsExample from '@/views/assets/Ads-Example.png'

const Article = () => {
  const path = usePathname()
  const id = path.split('/')[2]
  const article = ARTICLES_LIBRARY.filter(item => item.id === id)[0]

  const converter = new showdown.Converter();
  const text = article.content;
  const html = converter.makeHtml(text);

  return (
    <main className="pb-[80px]">
      <TopNavigation />
      <div className="max-w-[1260px] p-2.5 lg:p-6 lg:mx-auto overflow-x-hidden">
        <div className="flex gap-2 items-center">
          <p className="text-gray-500 text-sm md:text-base">Kategory</p>
          <ArrowRight size={16} className="text-main-pink" />
          <p className="text-gray-500 text-sm md:text-base">{article.label}</p>
        </div>

        <p className="text-secondary-darker my-2 underline underline-offset-1">{article.label}</p>

        <p className="text-secondary-darker font-medium text-3xl mb-2 md:mb-4">{article.title}</p>

        <div className="text-secondary-dark text-sm flex gap-4">
          <span>{dayjs(article.created_at).diff(new Date(), 'days') === 0 ? "Today" : dayjs(article.created_at).diff(new Date(), 'days') + 'days ago'}</span>
          <span>By {article.author}</span>
        </div>

        <div className="w-full h-[220px] md:h-[300px] lg:h-[400px] xl:h-[500px] relative mt-4 mb-4 lg:mb-6">
          <Image src={article.thumbnail} fill priority alt="thumbnail" className="object-cover rounded-lg" />
        </div>
        <Image className="md:w-fit mx-auto my-6" src={AdsExample} alt="Ads" />
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>
    </main>
  )
}

export default Article