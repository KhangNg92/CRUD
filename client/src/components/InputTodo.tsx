import React, { useState, FC } from "react";
import { InputTodoProps } from "../containers/InputTodoContainer";

const InputTodo: FC<InputTodoProps> = ({ createTodo }) => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e: any) => {
    e.preventDefault();
    setDescription("");
    try {
      createTodo(description);
    } catch ({ message }) {}
  };

  return (
    <>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form
        className="d-flex mt-5"
        onSubmit={onSubmitForm}
        style={{ width: "75%" }}
      >
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={({ target: { value } }) => setDescription(value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </>
  );
};

export default InputTodo;
