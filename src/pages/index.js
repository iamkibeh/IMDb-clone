import AllMovies from '@/components/AllMovies'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const API_KEY = process.env.API_KEY

export default function Home() {
  const router = useRouter()

  const [data, setData] = useState(null)

  useEffect(() => {
    const { genre } = router.query || { genre: 'fetchTrending' }
    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/${
          genre === 'fetchTrending' ? 'trending/all/week' : 'movie/top_rated'
        }?api_key=560696d03cbc7f14fb10307bf0faded6&language=en-US&page=1`
      )
      const data = await res.json()
      setData(data.results)
    }
    fetchData()
  }, [router.query])
  // const { genre } = router.query
  console.log(data)

  if (!data) {
    return 'Failed fetching data'
  }
  return (
    <>
      <Head>
        <title>IMDb clone | home</title>
        <meta name='description' content='IMDb clone' />
      </Head>
      <div>
        <AllMovies results={data} />
      </div>
    </>
  )
}

// using getStaticProps and getStaticPaths to fetch data
