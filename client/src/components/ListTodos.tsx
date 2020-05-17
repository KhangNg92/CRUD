import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllTodos, deleteTodo } from "../store/actions";
import EditTodo from "./EditTodo";

const ListTodos = (props: any) => {
  useEffect(() => {
    props.dispatch(fetchAllTodos());
  }, []);

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
          {/* <tr>
            <td>John</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr> */}

          {!!props.todos.length &&
            props.todos.map((todo: any) => (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>
                  <EditTodo todo={todo} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => props.dispatch(deleteTodo(todo.todo_id))}
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

const mapStateToProps = (state: any) => ({ todos: state.todos });

export default connect(mapStateToProps)(ListTodos);
