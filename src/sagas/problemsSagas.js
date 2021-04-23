import { put, call, takeEvery } from "redux-saga/effects";
import Actions from "../actions/types/problemsActionTypes";
import { addProblem, deleteProblem, editProblem, getProblems } from "../api";
import {
  setAllProblemsAction,
  setResultProblemStatusAction,
  resetResultProblemStatusAction,
  setMoreProblemsAction,
} from "../actions/creators/problemsActionCreators";

function* workerGetProblems(action) {
  const { problems, count } = yield call(getProblems, action.payload);
  yield put(setAllProblemsAction(problems, count));
}

function* workerGetMoreProblems(action) {
  const { problems } = yield call(getProblems, action.payload);

  yield put(setMoreProblemsAction(problems));
}

function* workerAddProblem(action) {
  yield put(resetResultProblemStatusAction());

  const { result } = yield call(addProblem, action.payload);

  yield put(setResultProblemStatusAction(result));
}

function* workerDeleteProblem(action) {
  yield put(resetResultProblemStatusAction());

  const { result } = yield call(deleteProblem, action.payload);

  yield put(setResultProblemStatusAction(result));
}

function* workerEditProblem(action) {
  yield put(resetResultProblemStatusAction());

  const { result } = yield call(editProblem, action.payload);

  yield put(setResultProblemStatusAction(result));
}

export default function* watcherSaga() {
  yield takeEvery(Actions.GET_ALL_PROBLEMS, workerGetProblems);
  yield takeEvery(Actions.GET_MORE_PROBLEMS, workerGetMoreProblems);
  yield takeEvery(Actions.ADD_PROBLEM, workerAddProblem);
  yield takeEvery(Actions.DELETE_PROBLEM, workerDeleteProblem);
  yield takeEvery(Actions.EDIT_PROBLEM, workerEditProblem);
}
