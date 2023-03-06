import AllMovies from '@/components/AllMovies'

const API_KEY = process.env.API_KEY

// export const metadata = {
//   title: 'IMDb clone | home',
// }

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending'

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'
    }?api_key=${API_KEY}&language=en-US&page=2`,
    { next: { revalidate: 100000 } }
  )
  const data = await res.json()

  const movies = data.results

  return (
    <>
      {/* <Head>
        <title>IMDb clone | home</title>
        <meta name='description' content='IMDb clone' />
      </Head> */}
      <div>
        <AllMovies results={movies} />
      </div>
    </>
  )
}
