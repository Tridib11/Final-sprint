import axios from "axios";
import { useState } from "react";

export function Todos({ todos, onTodoUpdated }) {
  const [loadingTodos, setLoadingTodos] = useState(new Set());

  const handleComplete = (todoId) => {
    setLoadingTodos((prev) => new Set([...prev, todoId]));

    axios
      .put("https://todoapplication-liart.vercel.app/completed", {
        id: todoId,
      })
      .then((res) => {
        alert("Todo marked as completed");
        onTodoUpdated();
      })
      .catch((error) => {
        alert("Failed to update todo. Please try again.");
        console.error(error);
      })
      .finally(() => {
        setLoadingTodos((prev) => {
          const newSet = new Set(prev);
          newSet.delete(todoId);
          return newSet;
        });
      });
  };

  if (!todos || todos.length === 0) {
    return (
      <div className="todos-container">
        <div className="empty-state">
          <div className="empty-state-icon">📝</div>
          <h3 className="empty-state-title">No todos yet</h3>
          <p className="empty-state-description">
            Create your first todo to get started!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="todos-container">
      <h2 className="todos-title">Your Todos ({todos.length})</h2>
      <div className="todos-grid">
        {todos.map((todo) => {
          const isLoading = loadingTodos.has(todo._id);
          return (
            <div
              key={todo._id}
              className={`todo-card ${todo.completed ? "completed" : ""}`}
            >
              <h3 className="todo-title">{todo.title}</h3>
              <p className="todo-description">
                {todo.description || "No description provided"}
              </p>
              <div className="todo-actions">
                <button
                  className="btn-complete"
                  disabled={todo.completed || isLoading}
                  onClick={() => handleComplete(todo._id)}
                >
                  {isLoading ? (
                    <span className="loading"></span>
                  ) : (
                    <>{todo.completed ? "✅ Completed" : "Mark as Complete"}</>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
