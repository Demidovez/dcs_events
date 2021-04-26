import { put, call, takeEvery } from "redux-saga/effects";
import Actions from "../actions/types/eventsActionTypes";
import { fetchEvents } from "../api";
import {
  setEventsAction,
  setMoreEventsAction,
} from "../actions/creators/eventsActionCreators";

function* workerFetchEvents(action) {
  const { columns, data, count } = yield call(fetchEvents, action.payload);

  yield put(setEventsAction(columns, data, count));
}

function* workerFetchMoreEvents(action) {
  const { data } = yield call(fetchEvents, action.payload);

  yield put(setMoreEventsAction(data));
}

export default function* watcherSaga() {
  yield takeEvery(Actions.FETCH_EVENTS, workerFetchEvents);
  yield takeEvery(Actions.FETCH_MORE_EVENTS, workerFetchMoreEvents);
}
