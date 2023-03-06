'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const SearchField = () => {
  const [searchInput, setSearchInput] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('searchInput: ', searchInput)

    if (!searchInput) return
    router.push(`/search/${searchInput}`)
    setSearchInput('')
  }

  return (
    <>
      <form
        action=''
        className='flex max-w-6xl mx-auto justify-between items-center px-4'
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type='text'
          placeholder='Search movie...'
          className='w-full h-16 rounded-sm placeholder-gray-400 outline-none bg-transparent px-4'
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
        <button
          disabled={!searchInput}
          type='submit'
          className='text-amber-600 disabled:text-gray-500'
        >
          Search
        </button>
      </form>
    </>
  )
}

export default SearchField
