import {
  FETCH_ALL_TODOS,
  ADD_TODOS,
  DELETE_TODOS,
  UPDATE_TODOS
} from "../actions/actionTypes";
import { Todo } from "../../models/todo";
import { TodoActions } from "../actions";

export interface TodoState {
  todos: Todo[];
}

const initialState = {
  todos: []
} as TodoState;

export default (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case FETCH_ALL_TODOS:
    case DELETE_TODOS:
    case ADD_TODOS:
    case UPDATE_TODOS:
      return { ...state, todos: [...action.payload] };
    default:
      return state;
  }
};
