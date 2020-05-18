import {
  FETCH_ALL_TODOS,
  ADD_TODOS,
  DELETE_TODOS,
  UPDATE_TODOS
} from "./actionTypes";
import axios from "axios";
import { Todo } from "../../models/todo";

export const fetchAllTodos = () => ({
  type: FETCH_ALL_TODOS,
  payload: axios.get<Todo[]>("/todos").then(({ data }) => data)
});

export const createTodo = (description: string) => ({
  type: ADD_TODOS,
  payload: axios.post<Todo[]>("/todos", description).then(({ data }) => data)
});

export const deleteTodo = (id: number) => ({
  type: DELETE_TODOS,
  payload: axios.delete<Todo[]>(`/todos/${id}`).then(({ data }) => data)
});

export const editTodo = (id: number, description: string) => ({
  type: UPDATE_TODOS,
  payload: axios
    .put<Todo[]>(`/todos/${id}`, description)
    .then(({ data }) => data)
});

/**
 * edit: todos.map(todo => {
 *  if (todo.id === payload.id) {
 *    return payload;
 *  }
 *  return todo;
 * })
 *
 * delete: todos.filter(todo => todo.id !== payload.id);
 *
 * Optimistic Update vs Pessimistic Update
 * -- error: revert change
 *
 */

const todosActions = {
  fetchAllTodos,
  createTodo,
  deleteTodo,
  editTodo
};

// ThenArg type alias
// Promise<T>
// --> Promise<User> -- promise.then(data => ..); // data: User

// ThenArg<TPromise>
// -- if TPromise extends (is) PromiseLike<infer TResolved>
// ----> TResolved
// -- else
// ----> TPromise

// ThenArg<Promise<User>> ==> User
// ThenArg<number> ==> number

// Purpose: To get resolved Promise type
// Promise<User> ---> will return User as type
type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;

// Helper:
type ActionMap = {
  [key: string]: (
    ...args: any[]
  ) => {
    type: string;
    payload?: any;
  };
};

// type ActionReturn<T> = {
//   type:
// }

// Indexed Type
/**
 * type SomeObject = {
 *  foo: { foo1: string, foo2: string },
 *  bar: number;
 *  user: User;
 *  todo: Todo;
 * }
 *
 * type FooOfSomeObject = SomeObject['foo'];
 * type UserOfSomeObject = SomeObject['user'];
 */

// ReturnType
// Purpose: Get returned type of a function
// type SomeFunc = () => string;
// ReturnType<SomeFunc> ==> string;

type ActionType<T extends ActionMap = any> = {
  [K in keyof T]: {
    type: ReturnType<T[K]>["type"]; // at this moment, I don't know ReturnType<T[K]> has property "type" or not
    payload: ThenArg<ReturnType<T[K]>["payload"]>;
  };
}[keyof T];

// Array
// todos: Todo[];
// Array<TItem> // Generics
// -- map(callback: (item: TItem, index: number, array: TItem[]) => ....);

// Todo[] (Array<Todo>)
// -- map(callback: (item: Todo))

export interface ApiResponse<T> {
  data: T;
  isLoading: boolean;
  error?: string;
}

// TodoApiCall => ApiResponse<Todo> { data: Todo, isLoading: boolean, error?: string }

export type TodoActions = ActionType<typeof todosActions>;
