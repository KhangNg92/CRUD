import { createTodo } from "../store/actions";
import { connect, ConnectedProps } from "react-redux";
import InputTodo from "../components/InputTodo";

const mapDispatchToProps = {
  createTodo
};

const connector = connect(null, mapDispatchToProps);

export type InputTodoProps = ConnectedProps<typeof connector>;
export default connector(InputTodo);
