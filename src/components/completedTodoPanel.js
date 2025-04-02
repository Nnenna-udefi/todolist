import React from "react";

const CompletedTodoPanel = ({ todos, isVisible, onClose }) => {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className={`completed-panel ${isVisible ? "visible" : ""}`}>
      <div className="panel-header">
        <h2>Completed Todos</h2>
        <button onClick={onClose} className="close-btn">
          X
        </button>
      </div>
      <ul>
        {completedTodos.length ? (
          completedTodos.map((todo) => (
            <li key={todo.id}>
              <p className="completedText">{todo.text}</p>
              <small>
                Completed at: {new Date(todo.completedAt).toLocaleString()}
              </small>
            </li>
          ))
        ) : (
          <p>No completed todos</p>
        )}
      </ul>
    </div>
  );
};

export default CompletedTodoPanel;
