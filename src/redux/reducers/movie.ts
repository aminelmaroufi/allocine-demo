import ActionTypes from "../../utils/actionTypes";
import { movieActions, MovieState } from "../../types";
import { IMovie } from "../../models";

export const emptyMovie: IMovie = {
  adult: false,
  backdrop_path: "",
  genre_ids: [],
  id: 0,
  original_language: "",
  original_title: "",
  overview: "",
  popularity: 0,
  poster_path: "",
  release_date: "",
  title: "",
  video: false,
  vote_average: 0,
  vote_count: 0,
};

const initialState: MovieState = {
  movies: [],
  movie: emptyMovie,
  total: 0,
  pages: 0,
  page: 0,
  limit: 10,
};
export default function reducer(state = initialState, action: movieActions) {
  switch (action.type) {
    case ActionTypes.GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: [...state.movies, ...action.payload.movies],
        total: action.payload.total,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case ActionTypes.SELECT_MOVIE:
      return {
        ...state,
        movie: action.payload.movie,
      };
    case ActionTypes.RESET_COLLECTION:
      return {
        ...state,
        movies: [],
      };
    default:
      return state;
  }
}
