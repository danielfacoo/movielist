import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const MovieControls = ({movie,type }) => {
  //delete movie on watchlist
  const {removeMovieFromWatchlist,addMovieToWatched,moveToWatchlist,removeMovieFromWatched} = useContext(GlobalContext);
  return (
    // add button on watched
    <div className="inner-card-controls">
      {type === "watchlist" && (
       <>
        <button className="ctrl-btn" onClick={() =>addMovieToWatched(movie)}>
        <i className="fa-fw far fa-eye"></i>
    </button>
  {/* //delete movie button */}
    <button className="ctrl-btn" onClick={() => removeMovieFromWatchlist(movie.id)}>
        <i className="fa-fw fa fa-times"></i>
    </button></>
      )}
        
        {/* watched button */}
        {type === "watched" && (
       <>
        <button className="ctrl-btn" onClick={() =>moveToWatchlist(movie)}>
        <i className="fa-fw far fa-eye-slash"></i>
    </button>
  {/* //delete movie button */}
    <button className="ctrl-btn" onClick={() => removeMovieFromWatched(movie.id)}>
        <i className="fa-fw fa fa-times"></i>
    </button></>
      )}
    </div>
  )
}

export default MovieControls