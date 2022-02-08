import "../index.css";
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const deleteHandler = () => {
    setModalIsOpen(true);
  };

  const closeModalHandler = () =>{
    setModalIsOpen(false);
  }

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
      {modalIsOpen ? <Modal onConfirm = {closeModalHandler} onCancel = {closeModalHandler} /> : null}
      {modalIsOpen ? <Backdrop onClick = {closeModalHandler}/> : null}
    </div>
  );
};
export default Todo;
