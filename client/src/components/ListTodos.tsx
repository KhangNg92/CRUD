import React, { useEffect, FC } from "react";
import EditTodo from "./EditTodo";
import { ListTodoProps } from "../containers/ListTodoContainer";

const ListTodos: FC<ListTodoProps> = ({
  todos,
  deleteTodo,
  fetchAllTodos,
  editTodo
}) => {
  useEffect(() => {
    fetchAllTodos();
  }, [fetchAllTodos]);

  return (
    <>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {!!todos.length &&
            todos.map(({ todo_id, description }) => (
              <tr key={todo_id}>
                <td>{description}</td>
                <td>
                  <EditTodo
                    id={todo_id}
                    descriptionProps={description}
                    editTodo={editTodo}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(todo_id)}
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTodos;
