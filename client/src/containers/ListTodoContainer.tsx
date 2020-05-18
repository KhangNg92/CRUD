import { AppState } from "../store/reducers";
import { fetchAllTodos, deleteTodo, editTodo } from "../store/actions";
import { connect, ConnectedProps } from "react-redux";
import ListTodos from "../components/ListTodos";

// const mapStateToProps = ({ todos: { todos } }: AppState) => ({ todos });
const mapStateToProps = ({ todos: { todos } }: AppState) => {
  return { todos };
};
const mapDispatchToProps = {
  fetchAllTodos,
  deleteTodo,
  editTodo
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type ListTodoProps = ConnectedProps<typeof connector>;
export default connector(ListTodos);
