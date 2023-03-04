import Link from 'next/link'

const MenuItem = ({ title, icon, address }) => {
  return (
    <>
      <div className=''>
        <Link href={address} className='mx-4 lg:mx-6 hover:text-amber-600'>
          <p className='text-2xl sm:hidden'>{icon}</p>
          <p className='hidden sm:inline text-sm'>{title}</p>
        </Link>
      </div>
    </>
  )
}

export default MenuItem
