import AllMovies from '@/components/AllMovies'
import Head from 'next/head'
import { useRouter } from 'next/router'

const API_KEY = process.env.API_KEY

export default function Home({ data }) {
  const router = useRouter()
  // const { genre } = router.query
  console.log(data)
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

export async function getStaticProps(context) {
  const { params } = context

  const { genre } = params || { genre: 'fetchTrending' }

  let apiUrl

  console.log(API_KEY)

  if (genre === 'fetchTrending') {
    apiUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=560696d03cbc7f14fb10307bf0faded6&language=en-US&page=1`
  } else if (genre === 'fetchTopRated') {
    apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=560696d03cbc7f14fb10307bf0faded6&language=en-US&page=1`
  }

  // console.log(query)
  console.log('server called')

  const res = await fetch(apiUrl)
  const data = await res.json()
  return {
    props: {
      data: data.results,
    },
  }
}
