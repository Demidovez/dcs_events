import Actions from "../actions/types/eventsActionTypes";
import demo from "../assets/demo";

export const RESULT = {
  ADDED: 0,
  ERROR: 1,
  DELETED: 2,
  EDITED: 3,
};

const initialState = {
  isDownloading: false,
  columns: demo.columns,
  data: demo.data,
};

const problemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SAVE_TO_EXCEL:
      return {
        ...state,
        isDownloading: true,
      };
    case Actions.DONE_SAVE_TO_EXCEL:
      return {
        ...state,
        isDownloading: false,
      };
    default:
      return state;
  }
};

export default problemsReducer;
