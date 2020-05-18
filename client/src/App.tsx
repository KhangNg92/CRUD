import React from "react";

// Components
import ListTodoContainer from "./containers/ListTodoContainer";
import InputTodoContainer from "./containers/InputTodoContainer";

function App() {
  return (
    <div className="App">
      <InputTodoContainer />
      <ListTodoContainer />
    </div>
  );
}

export default App;
