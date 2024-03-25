//create reducer
export default  (state,action) => {

    // add movie to watchlist
    switch(action.type) {
        case "ADD_MOVIE_TO_WATCHLIST" :
            return {
                ...state,
                watchlist: [...state.watchlist, action.payload],
            };
            // delete movie FROM watchlist
            case "REMOVE_MOVIE_FROM_WATCHLIST":
                return {
                    ...state,
                    watchlist:state.watchlist.filter((movie) => movie.id !== action.payload),
                };

                //add to watched from watch list 

                case "ADD_MOVIE_TO_WATCHED":
                    return {
                        ...state,
                        watchlist:state.watchlist.filter((movie) => movie.id !==action.payload.id),
                        watched:[...state.watched, action.payload]

                    }
                    //move to watchlist from watched
                    case "MOVE_TO_WATCHLIST":
                    return {
                        ...state,
                        watched:state.watched.filter((movie) => movie.id !==action.payload.id),
                        watchlist:[...state.watchlist, action.payload]

                    }

                    //delete button from watched
                    case "REMOVE_MOVIE_FROM_WATCHED":
                        return {
                            ...state,
                            watched:state.watched.filter((movie) => movie.id !== action.payload),
                        };
            default:
                return state;
    }
};
