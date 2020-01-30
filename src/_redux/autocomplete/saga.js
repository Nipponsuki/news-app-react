import { all, put, takeEvery, fork, call } from "redux-saga/effects";
import { load } from "services/autocomplete";
import actions from "./actions";

export function* loadAutocomlete() {
  yield takeEvery(actions.AUTOCOMPLETE__LOAD, function*(action) {
    try {
      const response = yield call(load, action.params);
      yield put({
        type: actions.AUTOCOMPLETE__LOAD_SUCCESS,
        words: response
      });
    } catch (error) {
      yield put({
        type: actions.AUTOCOMPLETE__LOAD_FAILURE,
        error: error.message
      });
    }
  });
}

export default function* rootSaga() {
  yield all([fork(loadAutocomlete)]);
}
