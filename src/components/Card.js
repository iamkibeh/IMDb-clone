import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFillHandThumbsUpFill } from 'react-icons/bs'

const Card = ({ movie }) => {
  return (
    <div className='border-gray-500 cursor-pointer sm:p-3 sm:hover:shadow-slate-400  rounded-lg sm:shadow-md sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group m-auto h-auto'>
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={movie.title}
          width={500}
          height={320}
          className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200'
          placeholder='blur'
          blurDataURL='/loading-spinner.svg'
          style={{
            // filter: 'blur(1px)',
            maxWidth: '100%',
            height: 'auto',
          }}
        ></Image>

        <div className='p-2 h-1/2'>
          <p className='line-clamp-2 '>{movie.overview}</p>
          <h2 className='text-lg font-bold'>{movie.title || movie.name}</h2>
          {/* <p>{
            movie.media_type && `${movie.media_type} • `
            
            }</p> */}
          <p className='flex items-center'>
            {movie.release_date || movie.first_air_date}
            {movie.vote_average && (
              <BsFillHandThumbsUpFill className='ml-4 mr-1' />
            )}
            {movie.vote_count}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Card
