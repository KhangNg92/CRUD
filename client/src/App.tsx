import React from "react";

// Components
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <InputTodo />
      <ListTodos />
    </div>
  );
}

export default connect()(App);
