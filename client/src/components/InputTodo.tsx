import React, { useState } from "react";
import axios from "axios";

import { createTodo } from "../store/actions";
import { connect } from "react-redux";
const InputTodo = (props: any) => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e: any) => {
    e.preventDefault();
    setDescription("");
    try {
      props.dispatch(createTodo({ description }));
    } catch ({ message }) {}
  };

  return (
    <>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
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

export default connect()(InputTodo);
