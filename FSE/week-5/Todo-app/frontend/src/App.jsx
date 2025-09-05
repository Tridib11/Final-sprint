import { useEffect, useState } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    axios.get("https://todoapplication-liart.vercel.app/todos").then((res) => {
      setTodos(res.data.todo);
    });
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div className="app-container">
      <div className="app-header">
        <h1 className="app-title">Todo Master</h1>
        <p className="app-subtitle">Organize your life, one task at a time</p>
      </div>
      <div className="app-content">
        <CreateTodo onTodoAdded={fetchTodos} />
        <Todos todos={todos} onTodoUpdated={fetchTodos} />
      </div>
      <footer className="site-footer">Made with ❤️ by Tridib</footer>
    </div>
  );
}

export default App;
