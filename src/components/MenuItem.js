'use client'
import Link from 'next/link'

const MenuItem = ({ title, Icon, address }) => {
  return (
    <>
      <div className=''>
        <Link href={address} className='mx-4 lg:mx-6 hover:text-amber-600'>
          <Icon className='text-2xl sm:hidden'>{Icon}</Icon>
          <p className='hidden sm:inline text-sm'>{title}</p>
        </Link>
      </div>
    </>
  )
}

export default MenuItem
