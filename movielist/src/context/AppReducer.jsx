//create reducer
export default  (state,action) => {

    // add movie to watchlist
    switch(action.type) {
        case "ADD_MOVIE_TO_WATCHLIST" :
            return {
                ...state,
                watchlist: [...state.watchlist, action.payload],
            };
            // delete movie on watchlist
            case "REMOVE_MOVIE_TO_WATCHLIST":
                return {
                    ...state,
                    watchlist:state.watchlist.filter((movie) => movie.id !== action.payload),
                };
                case "ADD_MOVIE_TO_WATCHED":
                    return {
                        ...state,
                        watchlist:state.watchlist.filter((movie) => movie.id !==action.payload.id),

                    }
            default:
                return state;
    }
};
