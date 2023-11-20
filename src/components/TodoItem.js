import React from 'react';
import deleteBtn from '../images/icon-cross.svg';
import { useDrag, useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';

const TodoItem = ({ todo, completeToggle, deleteTodo, mode, updateDroppedTodo }) => {
  const [{ isDragging }, drag] = useDrag({
    type: NativeTypes.FILE,
    item: { todo, type: NativeTypes.FILE },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: NativeTypes.FILE,
    drop: (item) => {
        updateDroppedTodo(item.todo);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <li
      ref={(node) => drag(drop(node))}
      className={`todo-item ${mode === 'light' ? 'light-mode' : 'dark-mode'}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div className={isOver ? 'drag-over-style' : 'normal-style'}>
        <div className="round">
            <input type="checkbox" id={`checkbox-${todo.id}`} name={`checkbox-${todo.id}`}
            checked={todo.completed} 
            onChange={() => completeToggle(todo.id)}/>
            <label htmlFor={`checkbox-${todo.id}`}></label>
        </div>

        <span className={todo.completed ? 'completed' : 'span'}>{todo.text}</span>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>
        <img src={deleteBtn} alt='delete' />
      </button>
    </li>
  );
};

export default TodoItem;
