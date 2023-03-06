import React from 'react'

import AllMovies from '@/components/AllMovies'

export default async function SearchPage({ params }) {
  const searchInput = params.searchInput

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${searchInput}&include_adult=false`
  )

  if (!res.ok) throw new Error('Error fetching data')

  const movies = await res.json()

  const { results } = movies

  return (
    <div>
      {/* {results.map((movie) => ( */}
      {results && results.length === 0 && (
        <div className='text-center text-2xl font-bold'>No results found</div>
      )}
      {results && <AllMovies results={results} />}
    </div>
  )
}
