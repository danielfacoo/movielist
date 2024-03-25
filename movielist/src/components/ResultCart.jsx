import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ResultCart = ({movie}) => {
    const {watchlist,watched,addMovieToWatchlist,addMovieToWatched} = useContext(GlobalContext);

    //disabled button watched
    const storedMovieWatched = watched.find ((o) => o.id  === movie.id);


    //disabled button watchlist
    const storedMovie = watchlist.find ((o) => o.id  === movie.id) ? true :
    storedMovieWatched ? true : false; ;

    

  return (
    //movie images
    <div className="result-card">
        <div className="poster-wrapper">
           {movie.poster_path ? (
             <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`$movie.poster_path`} />
           ): (
            <div className="filler-poster"></div>
           )}
        </div>
            {/* //movie info */}
        <div className="info">
            <div className="header">
                {/* movie title */}
                <h3 className="title"> {movie.title}</h3>
                {/* movie year */}
                <h4 className="release-date">
                    {movie.release_date ? movie.release_date.substring(0,4) : "-"}
                </h4>
                {/* movie imdb */}
                <h4 className="release-date"><b>IMDB: {movie.vote_average ? movie.vote_average.toFixed(1): "-"}</b></h4>
            </div>
            {/* add to watchlist buttton */}
            <div className="controls">
                <button className="btn" disabled = {storedMovie}
                 onClick={() => addMovieToWatchlist(movie)}>
                    Add to Watchlist
                </button>
                {/* add to watchedbutton */}
                <button className="btn" disabled = {storedMovieWatched}
                 onClick={() => addMovieToWatched(movie)}>
                    Add to Watched
                </button>
                
            </div>
        </div>
    </div>
  )
};

export default ResultCart;