import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [current, setCurrent] = useState("");

  
  const inputHandler = (e) => {
    setCurrent(e.target.value);
  };

  const Add = () => {
    const newTodo = {
      id: Math.random(),
      content: current,
    };
    setTodos([...todos, newTodo]);
    setCurrent("");

  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <input type="text" value={current} onChange={inputHandler} />
      <button onClick={Add}>Add</button>
      <ul>
        {todos.map((element) => (
          <li key={element.id}>{element.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
