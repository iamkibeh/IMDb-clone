'use client'

import Link from 'next/link'
import React, { useEffect } from 'react'

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div className='text-center p-4'>
      <h1>Ooops! something went wrong!</h1>
      <Link href='/' className='mt-4 underline text-orange-400'>
        Go back to home
      </Link>
    </div>
  )
}

export default Error
