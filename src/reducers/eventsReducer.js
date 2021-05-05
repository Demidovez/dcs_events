import Actions from "../actions/types/eventsActionTypes";
import columns from "./columns";

export const RESULT = {
  ADDED: 0,
  ERROR: 1,
  DELETED: 2,
  EDITED: 3,
};

const initialState = {
  isLoading: false,
  isLoadingMore: false,
  variant: null,
  data: [],
  moreData: [],
  count: 0,
  queryTime: 0,
  offset: 50,
  limit: 50,
  sortColumn: "",
  sortType: "desc",
  columns: columns,
  limitList: [
    {
      label: "50",
      value: "50",
    },
    {
      label: "100",
      value: "100",
    },
    {
      label: "150",
      value: "150",
    },
    {
      label: "200",
      value: "200",
    },
    {
      label: "250",
      value: "250",
    },
    {
      label: "300",
      value: "300",
    },
  ],
  variantList: [
    {
      label: "Байпасы",
      value: "byppas",
    },
    {
      label: "Вентиляция",
      value: "hvac",
    },
    {
      label: "Операторы",
      value: "change",
    },
  ],
};

const problemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_EVENTS:
      return {
        ...state,
        isLoading: true,
        moreData: initialState.moreData,
        offset: action.payload.offset,
        queryTime: action.payload.queryTime,
      };
    case Actions.FETCH_MORE_EVENTS:
      return {
        ...state,
        isLoadingMore: true,
      };
    case Actions.SET_EVENTS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        count: action.payload.count,
        offset: state.offset + action.payload.data.length,
      };
    case Actions.SET_MORE_EVENTS:
      return {
        ...state,
        isLoadingMore: false,
        moreData: [...state.moreData, ...action.payload.data],
        offset: state.offset + action.payload.data.length,
      };
    case Actions.SET_LIMIT:
      return {
        ...state,
        limit: action.payload,
        offset: initialState.offset,
      };
    case Actions.SET_VARIANT:
      return {
        ...state,
        variant: action.payload,
        offset: initialState.offset,
      };
    case Actions.RESET_OPTIONS:
      return {
        ...state,
        moreData: initialState.moreData,
        variant: initialState.variant,
        limit: initialState.limit,
        offset: initialState.offset,
        queryTime: initialState.queryTime,
      };
    case Actions.UPDATE_COLUMNS:
      return {
        ...state,
        columns: action.payload,
      };
    case Actions.SET_SORT_DATA:
      return {
        ...state,
        sortColumn: action.payload.sortColumn,
        sortType: action.payload.sortType,
        offset: initialState.offset,
      };
    default:
      return state;
  }
};

export default problemsReducer;
