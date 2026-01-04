import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await axios.get("http://localhost:5000/todos");
      setTodos(res.data);
    };

    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (text === "") return;

    await axios.post("http://localhost:5000/todos/add", { text });
    setText("");
    
    const res = await axios.get("http://localhost:5000/todos");
    setTodos(res.data);
  };

  return (
    <div>
      <h1>Todo App</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;