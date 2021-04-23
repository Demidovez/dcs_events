import { all } from "redux-saga/effects";
import problemsSagas from "./problemsSagas";

function* rootSaga() {
  yield all([problemsSagas()]);
}

export default rootSaga;
