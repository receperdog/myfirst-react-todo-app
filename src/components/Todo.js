import "../index.css";
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const deleteHandler = () => {
    setModalIsOpen(true);
  };

  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
      {modalIsOpen ? <Modal /> : null}
      {modalIsOpen ? <Backdrop /> : null}
    </div>
  );
};
export default Todo;
