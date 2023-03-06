import Image from 'next/image'

const getMovieDetails = async (movieId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`
  )

  const movieDetails = await res.json()
  return movieDetails
}

const MoviePage = async ({ params }) => {
  const movieId = params.id

  const movie = await getMovieDetails(movieId)
  //   console.log(movieId)

  return (
    <div className='w-full '>
      <div className='p-4  max-w-6xl mx-auto flex flex-col md:flex-row content-center space-x-10'>
        <div className='flex-1 m-auto'>
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
            }`}
            alt='movie poster'
            width={500}
            height={320}
            className='rounded-lg '
            placeholder='blur'
            blurDataURL='/loading-spinner.svg'
            style={{
              // filter: 'blur(1px)',
              maxWidth: '100%',
              height: '100%',
            }}
          ></Image>
        </div>
        <div className='flex-1'>
          <h2 className='text-lg font-bold mb-3'>{movie.title}</h2>
          <p className=' mb-3 text-sm'>
            <span className='font-semibold mr-2'>Overview: </span>
            {movie.overview}
          </p>
          <p className='mb-3 text-sm'>
            <span className='font-semibold mr-2'>Date Released: </span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className=' mb-3 text-sm'>
            <span className='font-semibold mr-2'>Rating: </span>
            {movie.vote_average}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoviePage
