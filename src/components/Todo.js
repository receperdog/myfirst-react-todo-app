import "../index.css";
const Todo = (props) => {
  const deleteHandler = () => {
    console.log(`clicked to ${props.text}`);
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
    </div>
  );
};
export default Todo;
