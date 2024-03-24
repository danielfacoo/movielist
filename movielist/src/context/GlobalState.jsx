import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";



//! create context
export const GlobalContext = createContext();

//initial state
const initialState = {
    watchlist: [],
    watched: [],
   
};

//!provider components
export const GlobalProvider = (props) =>{
    // reducer
    const [state,dispatch] = useReducer(AppReducer, initialState);
    const addMovieToWatchlist = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload:movie})
    }
 
    return (
        <GlobalContext.Provider value = {{
            addMovieToWatchlist,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}