import axios from "axios";
import { useState } from "react";

export function CreateTodo({ onTodoAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="create-todo-container">
      <h2 className="create-todo-title">✨ Create New Todo</h2>

      <div className="form-group">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder="Add some details..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-input"
        />
      </div>

      <button
        className="btn-primary"
        onClick={() => {
          if (!title.trim()) {
            alert("Please enter a title for your todo");
            return;
          }

          setIsLoading(true);
          axios
            .post("https://todoapplication-liart.vercel.app/todo", {
              title,
              description,
            })
            .then((res) => {
              alert("Todo created successfully");
              setTitle("");
              setDescription("");
              onTodoAdded();
            })
            .catch((error) => {
              alert("Failed to create todo. Please try again.");
              console.error(error);
            })
            .finally(() => {
              setIsLoading(false);
            });
        }}
        disabled={isLoading}
      >
        {isLoading ? <span className="loading"></span> : "Add Todo"}
      </button>
    </div>
  );
}
