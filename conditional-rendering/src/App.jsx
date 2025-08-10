import { use, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import tailwindcss from '@tailwindcss/vite'

function App() {
  const [showbtn, setshowbtn] = useState(false);
  const [todos, setTodos] = useState([
    { title: "Todo 1", desc: "This is the first todo"},
    { title: "Todo 2", desc: "This is the second todo"},
    { title: "Todo 3", desc: "This is the third todo"},
    { title: "Todo 4", desc: "This is the fourth todo"},
  ]);

  const Todo = ({ todo }) => {
    return (
      <>
        <div className="m-4 border-1">
          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.desc}o</div>
        </div>
      </>
    );
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn ? (
        <button>showbtn is true</button>
      ) : (
        <button>showbtn is false</button>
      )}
      {todos.map((todo) => {
        return <Todo todo={todo} />;
      })}
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>Toggle showbtn</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
