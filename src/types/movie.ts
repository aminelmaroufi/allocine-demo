import actionTypes from 'src/utils/actionTypes';
import { IMovie } from 'src/models';

export interface MovieState {
  movies: Array<IMovie>;
  movie: IMovie;
  total: number;
  pages: number;
  page: number;
  limit: number;
}

export interface getMoviesSuccess {
  movies: Array<IMovie>;
  total: number;
  pages: number;
  page: number;
}

export interface selectMovie {
  movie: IMovie;
}

export type getMoviesSuccessPayload = {
  type: actionTypes.GET_MOVIES_SUCCESS;
  payload: getMoviesSuccess;
};

export type selectMoviePayload = {
  type: actionTypes.SELECT_MOVIE;
  payload: selectMovie;
};

export type resetMovies = {
  type: actionTypes.RESET_COLLECTION;
};

export type movieActions =
  | getMoviesSuccessPayload
  | selectMoviePayload
  | resetMovies;
