import Actions from "../types/eventsActionTypes";

export const fetchEventsAction = (offset, limit, variant) => ({
  type: Actions.FETCH_EVENTS,
  payload: { offset, limit, variant },
});

export const fetchMoreEventsAction = (offset, limit) => ({
  type: Actions.FETCH_MORE_EVENTS,
  payload: { offset, limit },
});

export const setEventsAction = (columns, data, count) => ({
  type: Actions.SET_EVENTS,
  payload: { columns, data, count },
});

export const setMoreEventsAction = (data) => ({
  type: Actions.SET_MORE_EVENTS,
  payload: { data },
});

export const setLimitAction = (limit) => ({
  type: Actions.SET_LIMIT,
  payload: limit,
});

export const setOffsetAction = (offset) => ({
  type: Actions.SET_OFFSET,
  payload: offset,
});

export const setVariantAction = (variant) => ({
  type: Actions.SET_VARIANT,
  payload: variant,
});

export const resetOptionsAction = () => ({
  type: Actions.RESET_OPTIONS,
});
