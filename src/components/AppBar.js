import React from 'react'
import NavbarItem from './NavbarItem'

export default function AppBar() {
  return (
    <div className='flex justify-center space-x-3 bg-amber-100 dark:bg-gray-600 lg:text-xl p-4'>
      <NavbarItem title='Trending' param='fetch-trending' />
      <NavbarItem title='Top Rated' param='fetch-top-rated' />
    </div>
  )
}
