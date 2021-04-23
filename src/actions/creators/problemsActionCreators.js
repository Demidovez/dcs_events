import Actions from "../types/problemsActionTypes";

export const getAllProblemsAction = (searchData) => ({
  type: Actions.GET_ALL_PROBLEMS,
  payload: { searchData },
});

export const setAllProblemsAction = (problems, count) => ({
  type: Actions.SET_ALL_PROBLEMS,
  payload: { problems, count },
});

export const getMoreProblemsAction = (searchData, offset) => ({
  type: Actions.GET_MORE_PROBLEMS,
  payload: { searchData, offset },
});

export const setMoreProblemsAction = (moreProblems) => ({
  type: Actions.SET_MORE_PROBLEMS,
  payload: moreProblems,
});

export const addProblemAction = (values) => ({
  type: Actions.ADD_PROBLEM,
  payload: values,
});

export const setResultProblemStatusAction = (status) => ({
  type: Actions.SET_RESULT_PROBLEM_STATUS,
  payload: status,
});

export const resetResultProblemStatusAction = () => ({
  type: Actions.RESET_RESULT_PROBLEM_STATUS,
});

export const deleteProblemAction = (problemId) => ({
  type: Actions.DELETE_PROBLEM,
  payload: problemId,
});

export const editProblemAction = (problem) => ({
  type: Actions.EDIT_PROBLEM,
  payload: problem,
});
