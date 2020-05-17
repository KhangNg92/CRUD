import { FETCH_ALL_TODOS, ADD_TODOS, DELETE_TODOS } from "./actionTypes";
import axios from "axios";

export const fetchAllTodos = () => {
  console.log("call in fetch todo");
  return {
    type: FETCH_ALL_TODOS,
    payload: axios.get("/todos").then(({ data }) => data)
  };
};
export const createTodo = (description: Object) => {
  return {
    type: ADD_TODOS,
    payload: axios.post("/todos", description).then(({ data }) => data)
  };
};

export const deleteTodo = (id: Number) => ({
  type: DELETE_TODOS,
  payload: axios.delete(`/todos/${id}`).then(({ data }) => data)
});

export const editTodo = (id: Number, description: Object) => ({
  type: DELETE_TODOS,
  payload: axios.put(`/todos/${id}`, description).then(({ data }) => data)
});
