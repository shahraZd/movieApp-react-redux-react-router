import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import serieReducer from "./serieReducer";

export default combineReducers({
  movieReducer,
  serieReducer,
});
