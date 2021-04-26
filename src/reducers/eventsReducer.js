import Actions from "../actions/types/eventsActionTypes";

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
  columns: [],
  data: [],
  moreData: [],
  count: 0,
  limit: 50,
  offset: 0,
};

const problemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_EVENTS:
      return {
        ...state,
        isLoading: true,
        moreData: initialState.moreData,
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
        columns: action.payload.columns,
        data: action.payload.data,
        count: action.payload.count,
      };
    case Actions.SET_MORE_EVENTS:
      return {
        ...state,
        isLoadingMore: false,
        moreData: [...state.moreData, ...action.payload.data],
        offset: state.offset + state.limit,
      };
    case Actions.SET_LIMIT:
      return {
        ...state,
        limit: action.payload,
        offset: initialState.offset,
      };
    case Actions.SET_OFFSET:
      return {
        ...state,
        offset: action.payload,
      };
    case Actions.SET_VARIANT:
      return {
        ...state,
        variant: action.payload,
      };
    case Actions.RESET_OPTIONS:
      return {
        ...state,
        moreData: initialState.moreData,
        variant: initialState.variant,
        limit: initialState.limit,
        offset: initialState.offset,
      };
    default:
      return state;
  }
};

export default problemsReducer;
