import Todo from "./components/Todo";
function App() {
  return (
    <div>
      <h1>My ToDos</h1>
      <Todo text="Learn React" />
      <Todo text="Learn Next.js" />
      <Todo text="Learn Spring Boot" />
      <Todo text="Continue to learn" />
    </div>
  );
}

export default App;
