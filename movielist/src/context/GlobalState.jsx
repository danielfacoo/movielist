import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";



//! create context
export const GlobalContext = createContext();

//initial state
const initialState = {
    watchlist: localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")): [],
    watched: [],
   
};

//!provider components
export const GlobalProvider = (props) =>{
    // reducer
    const [state,dispatch] = useReducer(AppReducer, initialState);

    //local storage
    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
      
      
    }, [state]);
    //add movie to watchlist
    const addMovieToWatchlist = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload:movie})
    }
    //delete movie on watchlist
const removeMovieFromWatchlist = (id) => {
    dispatch({type:"REMOVE_MOVIE_TO_WATCHLIST", payload:id})
}
 //add movie to watched
const addMovieToWatched = (movie) => {
    dispatch({type: "ADD_MOVIE_TO_WATCHED", payload:movie})
}
 
    return (
        <GlobalContext.Provider value = {{
            watchlist:state.watchlist,
            watched:state.watched,
            addMovieToWatchlist,
            removeMovieFromWatchlist,
            addMovieToWatched,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}