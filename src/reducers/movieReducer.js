import { MOVIE_ADD, MOVIE_DELETE, MOVIE_UPDATE, MOVIE_SEARCH } from "../const/actionTypes";
import { movies } from "../const/data";

const initState = {
  movies,
  inputSearch:""
}
// const initState=movies

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case MOVIE_ADD:
      return { ...state, movies: [...state.movies, action.payload] };
    case MOVIE_DELETE:
      return {
        ...state,
        movies: state.movies.filter(e => e.id != action.payload),
      };

    case MOVIE_UPDATE:
      return {
        ...state,
        movies: state.movies.map(e =>
          e.id === action.id ? { ...e,...action.payload } : e
        ),
      };
      // {
      //   ...state,
      //   movies: state.movies.map(e =>
      //     e.id === action.id ? { ...e,title:action.payload.title,rate:action.payload.rate,img:action.payload.img} : e
      //   ),
      // };


    case MOVIE_SEARCH:
      return{
        ...state,
        inputSearch:action.payload
      }
    default:
      return state;
  }
};
export default movieReducer;
