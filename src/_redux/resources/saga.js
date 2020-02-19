import { all, put, takeEvery, fork, call } from "redux-saga/effects";
import { load } from "services/resources";
import actions from "./actions";

export function* loadResourcesResults() {
  yield takeEvery(actions.RESOURCES__LOAD, function*(action) {
    try {
      const response = yield call(load);
      yield put({
        type: actions.RESOURCES__LOAD_SUCCESS,
        resources: response.sources
      });
    } catch (error) {
      yield put({
        type: actions.RESOURCES__LOAD_FAILURE,
        error: error.message
      });
    }
  });
}

export default function* rootSaga() {
  yield all([fork(loadResourcesResults)]);
}
