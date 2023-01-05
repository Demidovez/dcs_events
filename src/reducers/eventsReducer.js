import Actions from "../actions/types/eventsActionTypes";
import columns from "./columns";
import { getTimeMode } from "../helpers";

// const timeModeList =

const initialState = {
  isLoading: false,
  isLoadingMore: false,
  isFiltered: false,
  isGotAllEvents: false,
  variant: null,
  data: [],
  moreData: [],
  timeMode: getTimeMode("week_1"),
  timeStart: 0,
  timeEnd: 0,
  offset: 50,
  limit: 50,
  sortColumn: "",
  sortType: "desc",
  sortDataColumns: {
    Source: "",
    Description: "",
    ConditionName: "",
    Action: "",
    Value: "",
    Units: "",
    Station: "",
  },
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
        timeMode: action.payload.timeMode,
        timeStart: action.payload.timeStart,
        timeEnd: action.payload.timeEnd,
        isGotAllEvents: initialState.isGotAllEvents,
      };
    case Actions.FETCH_MORE_EVENTS:
      return {
        ...state,
        isLoadingMore: true,
        isGotAllEvents: initialState.isGotAllEvents,
      };
    case Actions.SET_EVENTS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        offset: state.offset + action.payload.data.length,
        isGotAllEvents: action.payload.data.length < state.limit,
      };
    case Actions.SET_MORE_EVENTS:
      return {
        ...state,
        isLoadingMore: false,
        moreData: [...state.moreData, ...action.payload.data],
        offset: state.offset + action.payload.data.length,
        isGotAllEvents: action.payload.data.length < state.limit,
      };
    case Actions.SET_LIMIT:
      return {
        ...state,
        limit: action.payload,
        offset: initialState.offset,
        isFiltered: true,
        isGotAllEvents: initialState.isGotAllEvents,
      };
    case Actions.SET_VARIANT:
      return {
        ...state,
        variant: action.payload,
        offset: initialState.offset,
        isFiltered: true,
        isGotAllEvents: initialState.isGotAllEvents,
      };
    case Actions.RESET_OPTIONS:
      return {
        ...initialState,
        data: state.data,
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
        isFiltered: true,
        isGotAllEvents: initialState.isGotAllEvents,
      };
    case Actions.SET_SORT_DATA_COLUMNS:
      return {
        ...state,
        offset: initialState.offset,
        isFiltered: true,
        sortDataColumns: {
          ...state.sortDataColumns,
          [action.payload.column]: action.payload.value,
        },
        isGotAllEvents: initialState.isGotAllEvents,
      };
    case Actions.SET_TIME_MODE:
      return {
        ...state,
        timeMode: getTimeMode(action.payload),
        isFiltered: true,
      };

    default:
      return state;
  }
};

export default problemsReducer;
