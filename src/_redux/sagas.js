import { all } from "redux-saga/effects";
import autocomleteSagas from "./autocomplete/saga";
import categorySagas from "./category/saga";
import searchSagas from "./search/saga";
import resourcesSagas from "./resources/saga";

export default function* rootSaga() {
  yield all([
    autocomleteSagas(),
    categorySagas(),
    searchSagas(),
    resourcesSagas()
  ]);
}
