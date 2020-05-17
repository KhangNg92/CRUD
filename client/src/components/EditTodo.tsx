import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editTodo } from "../store/actions";

const EditTodo = (props: any) => {
  const [description, setDescription] = useState(props.todo.description);

  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${props.todo.todo_id}`}
      >
        Open modal
      </button>

      <div className="modal" id={`id${props.todo.todo_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modal Heading</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={({ target: { value } }) => setDescription(value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={() =>
                  props.dispatch(editTodo(props.todo.todo_id, { description }))
                }
              >
                Edit
              </button>

              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect()(EditTodo);
