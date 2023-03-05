const AllMovies = ({ results }) => {
  return (
    <>
      <div className=''>
        {results.map((movie) => (
          <div key={movie.id}>
            <h1>{movie.title}</h1>
          </div>
        ))}
      </div>
    </>
  )
}

export default AllMovies
