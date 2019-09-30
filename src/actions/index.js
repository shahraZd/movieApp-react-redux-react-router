import {
  MOVIE_ADD,
  MOVIE_DELETE,
  MOVIE_UPDATE,
  MOVIE_SEARCH,
} from "../const/actionTypes";
export const addMovie = payload => {
  return { type: MOVIE_ADD, payload };
};
export const deleteMovie = payload => {
  return { type: MOVIE_DELETE, payload };
};
export const updateMovie = (id, payload) => {
  return { type: MOVIE_UPDATE, id, payload };
};

export const searchMovie = payload => {
  return { type: MOVIE_SEARCH, payload };
};
