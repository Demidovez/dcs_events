import Actions from "../types/eventsActionTypes";

export const fetchEventsAction = (fetchData) => ({
  type: Actions.FETCH_EVENTS,
  payload: {
    ...fetchData,
    offset: 0,
    timeStart: new Date().toString(),
    timeEnd: new Date(
      new Date(
        new Date().setDate(new Date().getDate() - fetchData.timeMode.days)
      ).setHours(0, 0, 0, 0)
    ).toString(),
  },
});

export const fetchMoreEventsAction = (fetchData) => ({
  type: Actions.FETCH_MORE_EVENTS,
  payload: fetchData,
});

export const setEventsAction = (data) => ({
  type: Actions.SET_EVENTS,
  payload: { data },
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

export const setSortDataColumnsAction = (column, value) => ({
  type: Actions.SET_SORT_DATA_COLUMNS,
  payload: { column, value },
});

export const setTimeModeAction = (value) => ({
  type: Actions.SET_TIME_MODE,
  payload: value,
});
