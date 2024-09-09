// movieSaga.ts
import { call, put, all, takeLatest } from "redux-saga/effects";
import ActionTypes from "../../utils/actionTypes";
import { getSeries } from "../../api";
import { AxiosResponse } from "axios";

function* fetchSeriesSaga(action: any) {
  try {
    yield put({ type: ActionTypes.API_CALL_REQUEST });

    if (action.params.newFilter) {
      yield put({ type: ActionTypes.RESET_COLLECTION });
    }

    let response: AxiosResponse = yield call(getSeries, action.params);
    const data = response.data;

    yield all([
      put({
        type: ActionTypes.API_CALL_SUCCESS,
      }),
      put({
        type: ActionTypes.GET_SERIES_SUCCESS,
        payload: {
          series: data.results,
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

function* watchSeriesRequest() {
  yield takeLatest(ActionTypes.GET_SERES_REQUEST, fetchSeriesSaga);
}

export default watchSeriesRequest;
