import { all } from "redux-saga/effects";
import autocomleteSagas from "./autocomplete/saga";
import categorySagas from "./category/saga";

export default function* rootSaga() {
  yield all([autocomleteSagas(), categorySagas()]);
}
