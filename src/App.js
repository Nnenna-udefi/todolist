import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import './App.scss'
import AddTodoForm from './components/AddTodoForm';
import FilterButton from './components/FilterButtons';
import Toggle from './components/ToggleModeButton';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [mode, setMode] = useState('dark');


  useEffect(() => {
    // fetch todos from local storage
    const storeTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storeTodos);
  }, []);

  useEffect(() => {
    // save the todos to the local storage when changes are made
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, {
      id: Date.now(),
      text,
      completed: false
    }])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const completeToggle = (id) => {
    setTodos(
      todos.map((todo) => todo.id === id ? {
        ...todo,
        completed: !todo.completed
      } : todo)
    )
  }

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'complete') return todo.completed;
    return true;
  })

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const updateDroppedTodo = (droppedTodo) => {
    const updatedTodos = [...todos];
    const draggedTodoIndex = updatedTodos.findIndex((todo) => todo.id === droppedTodo.id);
  
    if (draggedTodoIndex !== -1) {
      const updatedList = [
        ...updatedTodos.slice(0, draggedTodoIndex),
        ...updatedTodos.slice(draggedTodoIndex + 1)
      ];
  
      const dropIndex = updatedList.findIndex((todo) => todo.id === droppedTodo.id);
      updatedList.splice(dropIndex, 0, droppedTodo);
  
      setTodos(updatedList);
    }
  };

  return (
    <div className={`todo-app ${mode === 'light' ? 'light-mode' : 'dark-mode'}`}>
      <header className='hero'>
        <h1>Todo</h1>
        <Toggle toggleMode={toggleMode} mode={mode}/>
      </header>
      <AddTodoForm addTodo={addTodo} mode={mode}/>

      <TodoList mode={mode}
        todos={filteredTodos}
        completeToggle={completeToggle}
        deleteTodo={deleteTodo}
        updateDroppedTodo={updateDroppedTodo}
      />
      <FilterButton filter={filter} changeFilter={changeFilter} clearCompleted={clearCompleted}
      todos={todos} mode={mode}/>
     <p className='drag'>Drag and drop to reorder the list</p>
     <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>Frontend Mentor</a>. 
        Coded by <a href="https://github.com/Nnenna-udefi">Nnenna Udefi</a>.
      </footer>

      
    </div>
  );
};

export default App;
