import * as types from '../actions/actionTypes';

export default function workTimeReducer(state = 25, action) {
  switch (action.type) {
    case types.INCREMENT_WORK_TIME:
      return (state + 1 > 99 ? 99 : state + 1);

    case types.DECREMENT_WORK_TIME:
      return (state - 1 < 0 ? 0 : state - 1);

    default:
      return state;
  }
}
