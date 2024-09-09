// movieSaga.ts
import { call, put, all, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import ActionTypes from "../../utils/actionTypes";
import { getMovies } from "../../api";

export function* fetchMoviesSaga(action: any) {
  try {
    yield put({ type: ActionTypes.API_CALL_REQUEST });

    if (action.params.newFilter) {
      yield put({ type: ActionTypes.RESET_COLLECTION });
    }
    let response: AxiosResponse = yield call(getMovies, action.params);
    const data = response.data;

    yield all([
      put({
        type: ActionTypes.API_CALL_SUCCESS,
      }),
      put({
        type: ActionTypes.GET_MOVIES_SUCCESS,
        payload: {
          movies: data.results,
          total: data.total_results,
          pages: data.total_pages,
          page: data.page,
        },
      }),
    ]);
  } catch (err: any) {
    yield put({
      type: ActionTypes.API_CALL_FAILURE,
      payload: {
        message: typeof err === "string" ? err : err.message,
      },
    });
  }
}

function* watchMoviesRequest() {
  yield takeLatest(ActionTypes.GET_MOVIES_REQUEST, fetchMoviesSaga);
}

export default watchMoviesRequest;
