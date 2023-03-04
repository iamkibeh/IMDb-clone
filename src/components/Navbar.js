import MenuItem from './MenuItem'
import { AiOutlineHome } from 'react-icons/ai'
import { BsInfoCircleFill } from 'react-icons/bs'

const Navbar = () => {
  return (
    <>
      <div className='py-3 flex justify-between items-center mx-2 max-w-6xl sm:mx-auto'>
        <div className='flex gap-4 flex-grow'>
          <MenuItem title={'Home'} icon={<AiOutlineHome />} address='/' />
          <MenuItem
            title={'About'}
            icon={<BsInfoCircleFill />}
            address='/about'
          />
        </div>
        <div className=''>
          <h2 className='text-2xl'>
            <span className='bg-amber-400 py-1 px-2 mr-1 rounded-lg'>IMDb</span>
            <span className='hidden sm:inline'>clone</span>
          </h2>
        </div>
      </div>
    </>
  )
}

export default Navbar
