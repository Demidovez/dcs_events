import { all } from "redux-saga/effects";
import eventsSagas from "./eventsSagas";

function* rootSaga() {
  yield all([eventsSagas()]);
}

export default rootSaga;
