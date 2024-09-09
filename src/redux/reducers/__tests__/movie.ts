import reducer, { emptyMovie } from "../movie";
import ActionTypes from "../../../utils/actionTypes";
import { movieActions, MovieState } from "../../../types";
import { IMovie } from "../../../models";

describe("movie reducer", () => {
  const initialState: MovieState = {
    movies: [],
    movie: emptyMovie,
    total: 0,
    pages: 0,
    page: 0,
    limit: 10,
  };

  it("should return the initial state", () => {
    expect(reducer(undefined, {} as movieActions)).toEqual(initialState);
  });

  it("should handle GET_MOVIES_SUCCESS", () => {
    const action: movieActions = {
      type: ActionTypes.GET_MOVIES_SUCCESS,
      payload: {
        movies: [
          { ...emptyMovie, id: 1, title: "Movie 1" },
          { ...emptyMovie, id: 2, title: "Movie 2" },
        ],
        total: 2,
        pages: 1,
        page: 1,
      },
    };
    const expectedState: MovieState = {
      ...initialState,
      movies: [
        { ...emptyMovie, id: 1, title: "Movie 1" },
        { ...emptyMovie, id: 2, title: "Movie 2" },
      ],
      total: 2,
      pages: 1,
      page: 1,
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SELECT_MOVIE", () => {
    const selectedMovie: IMovie = {
      ...emptyMovie,
      id: 1,
      title: "Selected Movie",
    };
    const action: movieActions = {
      type: ActionTypes.SELECT_MOVIE,
      payload: {
        movie: selectedMovie,
      },
    };
    const expectedState: MovieState = {
      ...initialState,
      movie: selectedMovie,
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle RESET_COLLECTION", () => {
    const action: movieActions = {
      type: ActionTypes.RESET_COLLECTION,
    };
    const expectedState: MovieState = {
      ...initialState,
      movies: [],
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
