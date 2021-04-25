import Actions from "../types/eventsActionTypes";

export const saveToExcelAction = () => ({
  type: Actions.SAVE_TO_EXCEL,
});

export const doneSaveToExcelAction = () => ({
  type: Actions.DONE_SAVE_TO_EXCEL,
});
