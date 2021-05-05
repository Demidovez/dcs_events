import Actions from "../types/eventsActionTypes";

export const fetchEventsAction = (fetchData) => ({
  type: Actions.FETCH_EVENTS,
  payload: { ...fetchData, offset: 0, queryTime: new Date() },
});

export const fetchMoreEventsAction = (fetchData) => ({
  type: Actions.FETCH_MORE_EVENTS,
  payload: fetchData,
});

export const setEventsAction = (data, count) => ({
  type: Actions.SET_EVENTS,
  payload: { data, count },
});

export const setMoreEventsAction = (data) => ({
  type: Actions.SET_MORE_EVENTS,
  payload: { data },
});

export const setLimitAction = (limit) => ({
  type: Actions.SET_LIMIT,
  payload: limit,
});

export const setVariantAction = (variant) => ({
  type: Actions.SET_VARIANT,
  payload: variant,
});

export const resetOptionsAction = () => ({
  type: Actions.RESET_OPTIONS,
});

export const updateColumnsOfTableAction = (columns) => ({
  type: Actions.UPDATE_COLUMNS,
  payload: columns,
});

export const setSortDatasAction = (sortColumn, sortType) => ({
  type: Actions.SET_SORT_DATA,
  payload: { sortColumn, sortType },
});
