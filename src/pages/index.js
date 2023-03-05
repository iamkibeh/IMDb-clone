import AllMovies from '@/components/AllMovies'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const API_KEY = process.env.API_KEY

export default function Home({ results }) {
  console.log(results)
  const router = useRouter()

  const [data, setData] = useState(results)
  console.log(data)

  useEffect(() => {
    const { genre } = router.query
    console.log('here is movie genre', genre)
    if (genre) {
      const fetchData = async () => {
        const res = await fetch(
          `https://api.themoviedb.org/3/${
            genre === 'fetchTrending' ? 'trending/all/week' : 'movie/top_rated'
          }?api_key=560696d03cbc7f14fb10307bf0faded6&language=en-US&page=1`
        )
        if (!res.ok) {
          throw new Error('Something went wrong')
        }
        const data = await res.json()

        setData(data.results)
      }
      fetchData()
    } else if (!genre) {
      setData(results)
    }
  }, [router.query, results])
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

export async function getStaticProps() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular/?api_key=560696d03cbc7f14fb10307bf0faded6&language=en-US&page=1`
  )
  const data = await res.json()
  return {
    props: {
      results: data.results,
    },
  }
}
