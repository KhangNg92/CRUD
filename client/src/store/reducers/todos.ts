import {
  FETCH_ALL_TODOS,
  ADD_TODOS,
  DELETE_TODOS
} from "../actions/actionTypes";

export default (state = {}, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ALL_TODOS:
    case DELETE_TODOS:
    case ADD_TODOS:
      return payload;

    default:
      return state;
  }
};
