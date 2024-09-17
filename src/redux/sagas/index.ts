import { fork, all } from 'redux-saga/effects';
import watchMoviesRequest from './movie';
import watchSeriesRequest from './serie';

export default function* rootSaga() {
  yield all([fork(watchMoviesRequest), fork(watchSeriesRequest)]);
}
