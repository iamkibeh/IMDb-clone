import Image from 'next/image'

export default function Loading() {
  return (
    <div className='flex justify-center '>
      <Image
        src='loading-spinner.svg'
        alt='loading ...'
        height={96}
        width={96}
        className='text-center'
      />
    </div>
  )
}
