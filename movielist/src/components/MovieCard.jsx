
const MovieCard = ({movie}) => {
  return (
    <div className="movie-card">
        <div className="overlay"></div>
        {movie.poster_path ? (
             <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`$movie.poster_path`} />
           ): (
            <div className="filler-poster"></div>
           )}
    </div>
  )
}

export default MovieCard