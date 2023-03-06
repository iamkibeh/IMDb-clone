'use client'
import MenuItem from './MenuItem'
import { AiOutlineHome } from 'react-icons/ai'
import { BsInfoCircleFill } from 'react-icons/bs'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'

const Navbar = () => {
  return (
    <>
      <div className='py-3 flex justify-between items-center mx-2 max-w-6xl sm:mx-auto'>
        <div className='flex gap-4 flex-grow'>
          <MenuItem title={'Home'} Icon={AiOutlineHome} address='/' />
          <MenuItem title={'About'} Icon={BsInfoCircleFill} address='/about' />
        </div>
        <div className='flex items-center  space-x-4'>
          <DarkModeSwitch />
          <Link href='/'>
            <h2 className='text-2xl'>
              <span className='bg-amber-400 py-1 px-2 mr-1 rounded-lg'>
                IMDb
              </span>
              <span className='hidden sm:inline'>clone</span>
            </h2>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
