import React from 'react';
import TodoItem from './TodoItem';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const TodoList = ({ todos, completeToggle, deleteTodo, mode, updateDroppedTodo }) => {

  return (
    <DndProvider backend={HTML5Backend}>
      <ul className={`todo-list ${mode === 'light' ? 'light-mode' : 'dark-mode'}`}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            completeToggle={completeToggle}
            deleteTodo={deleteTodo}
            mode={mode}
            updateDroppedTodo={updateDroppedTodo}
          />
        ))}
      </ul>
    </DndProvider>
  );
};

export default TodoList;
