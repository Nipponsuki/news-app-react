import { all, put, takeEvery, fork, call } from "redux-saga/effects";
import { load } from "services/search";
import actions from "./actions";

export function* fetchSearchResults() {
  yield takeEvery(actions.SEARCH__LOAD, function*(action) {
    try {
      const response = yield call(load, action.params);
      yield put({
        type: actions.SEARCH__LOAD_SUCCESS,
        results: response.articles
      });
    } catch (error) {
      yield put({
        type: actions.SEARCH__LOAD_FAILURE,
        error: error.message
      });
    }
  });
}

export default function* rootSaga() {
  yield all([fork(fetchSearchResults)]);
}
