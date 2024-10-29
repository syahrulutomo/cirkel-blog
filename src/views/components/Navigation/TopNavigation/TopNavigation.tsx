import Image from 'next/image'
import LogoIllustration from '@/views/assets/Logo-Cirkel-Illustration.png'
import Link from 'next/link'
// import { HambergerMenu } from 'iconsax-react'
// import { Button } from '../../Button'

const TopNavigation = () => {
  return (
    <div className='z-50 bg-main-pink px-3 py-1 md:px-5 md:py-2.5 flex items-center'>
      <Link href='/'>
        <Image src={LogoIllustration} className='w-[100px] ml-6 lg:ml-10' alt='' />
      </Link>
      {/* <HambergerMenu size="30" color="#FFF" className='md:hidden' />
      <div className='gap-6 hidden md:flex'>
        <Button className='border-white border-[2px] rounded-[10px] hover:bg-white hover:opacity-90 hover:text-secondary-light'>
          <span className='inline-block'>Sign in</span>
        </Button>
        <Button className='min-w-[100px] border-secondary-green bg-secondary-green border-[2px] rounded-[10px] hover:opacity-90'>
          <span className='inline-block'>Sign up</span>
        </Button>
      </div> */}
    </div>
  )
}

export default TopNavigation