import Actions from "../actions/types/problemsActionTypes";
import * as Yup from "yup";

export const RESULT = {
  ADDED: 0,
  ERROR: 1,
  DELETED: 2,
  EDITED: 3,
};

const initialState = {
  problems: [],
  moreProblems: [],
  count: 0,
  offset: 0,
  offsetStep: 15,
  orderValue: null,
  resultProblemStatus: null,
  isLoading: false,
  // TODO: Перенести в БД
  areaList: [
    { label: "Другой", value: "Другой" },
    { label: "1ABCDEH", value: "1ABCDEH" },
    { label: "2ABCDE", value: "2ABCDE" },
    { label: "5ABC", value: "5ABC" },
    { label: "6ABCDEF", value: "6ABCDEF" },
    { label: "8ABC", value: "8ABC" },
    { label: "18AEF", value: "18AEF" },
  ],
  codeProblemList: [
    { label: "Другой", desc: "код проблемы неизвестен", value: "Другой" },
    { label: "A10", desc: "автоматизация", value: "A10" },
    { label: "O20", desc: "организационная", value: "O20" },
    { label: "P30", desc: "природная", value: "P30" },
    { label: "X40", desc: "техническая", value: "X40" },
    { label: "T50", desc: "технологическая", value: "T50" },
  ],
  locale: {
    sunday: "Вс",
    monday: "Пн",
    tuesday: "Вт",
    wednesday: "Ср",
    thursday: "Чт",
    friday: "Пт",
    saturday: "Сб",
    ok: "OK",
  },
  validationSchema: Yup.object({
    name: Yup.string()
      .trim()
      .min(2, "Слишком коротко!")
      .max(50, "Слишком длинное!")
      .required("Обязательное поле"),
    text: Yup.string()
      .trim()
      .min(2, "Слишком коротко!")
      .max(500, "Слишком длинный!")
      .required("Обязательное поле"),
    area: Yup.string().ensure().required("Обязательное поле"),
    problem_code: Yup.string().ensure().required("Обязательное поле"),
  }),
};

const problemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_PROBLEMS:
      return {
        ...state,
        isLoading: true,
      };
    case Actions.SET_ALL_PROBLEMS:
      return {
        ...state,
        problems: action.payload.problems,
        moreProblems: initialState.moreProblems,
        count: action.payload.count,
        isLoading: false,
      };
    case Actions.SET_MORE_PROBLEMS:
      return {
        ...state,
        moreProblems: [...state.moreProblems, ...action.payload],
        offset: state.offset + state.offsetStep,
      };
    case Actions.SET_RESULT_PROBLEM_STATUS:
      return {
        ...state,
        resultProblemStatus: action.payload,
      };
    case Actions.RESET_RESULT_PROBLEM_STATUS:
      return {
        ...state,
        resultProblemStatus: initialState.resultProblemStatus,
      };
    case Actions.ADD_PROBLEM:
      return {
        ...state,
        resultProblemStatus: initialState.resultProblemStatus,
      };
    case Actions.DELETE_PROBLEM:
      return {
        ...state,
        problems: state.problems.filter(
          (problem) => problem.id !== action.payload
        ),
        count: state.count - 1,
      };
    case Actions.EDIT_PROBLEM:
      return {
        ...state,
        problems: state.problems.map((problem) =>
          problem.id === action.payload.id ? action.payload : problem
        ),
      };
    default:
      return state;
  }
};

export default problemsReducer;
