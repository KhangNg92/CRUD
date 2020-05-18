import React, { useState, FC } from "react";
import { connect } from "react-redux";

type EditTodoProps = {
  id: number;
  descriptionProps: string;
  editTodo: Function;
};

const EditTodo: FC<EditTodoProps> = ({ id, descriptionProps, editTodo }) => {
  const [description, setDescription] = useState(descriptionProps);

  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${id}`}
      >
        Open modal
      </button>

      <div className="modal" id={`id${id}`}>
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
                onClick={() => editTodo(id, { description })}
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
