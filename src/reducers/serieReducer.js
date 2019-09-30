import { MOVIE_ADD, MOVIE_DELETE, MOVIE_UPDATE } from "../const/actionTypes";
import { series } from "../const/data";

const initState = {
  series
};

const movieReducer = (state = initState, action) => {
  switch (action) {
    case MOVIE_ADD:
      return { ...state, movieList: [...state.movieList, action.payload] };
    case MOVIE_DELETE:
      return {
        ...state,
        movieList: state.movieList.filter(e => e.id !== action.payload),
      };
    case MOVIE_UPDATE:
      return {
        ...state,
        movieList: state.movieList.map(e =>
          e.id === action.id ? { ...action.payload } : e
        ),
      };
    default:
      return state;
  }
};
export default movieReducer
