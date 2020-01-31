import { all, put, takeEvery, fork, call } from "redux-saga/effects";
import { load } from "services/category";
import actions from "./actions";

export function* loadCategoryResults() {
  yield takeEvery(actions.CATEGORY__LOAD, function*(action) {
    try {
      const response = yield call(load, action.params);
      yield put({
        type: actions.CATEGORY__LOAD_SUCCESS,
        articles: response.articles
      });
    } catch (error) {
      yield put({
        type: actions.CATEGORY__LOAD_FAILURE,
        error: error.message
      });
    }
  });
}

export default function* rootSaga() {
  yield all([fork(loadCategoryResults)]);
}
