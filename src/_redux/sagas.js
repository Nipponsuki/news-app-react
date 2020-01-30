import { all } from "redux-saga/effects";
import autocomleteSagas from "./autocomplete/saga";

export default function* rootSaga() {
  yield all([autocomleteSagas()]);
}
