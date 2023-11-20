import React, { useState } from 'react';
import '../App.scss'

const AddTodoForm = ({ addTodo, mode }) => {
    const [text, setText] = useState('');

    const handleInputChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text.trim() !== '') {
            addTodo(text);
            setText('');
        }
        console.log('todo added')
    }
    return (
        <div className={`todo-form ${mode === 'light' ? 'light-mode' : 'dark-mode'}`} >
           <form onSubmit={handleSubmit}>
            <div className="round">
                    <input type="checkbox" id='checkbox' name='checkbox'/>
                    <label htmlFor='checkbox'></label>
                </div>
            <input type='text' name='todo' value={text}
                placeholder='Create a new todo...'
                onChange={handleInputChange} />
                {/* <button type='submit'>Add Todo</button> */}
            </form> 
        </div>
    );
};

export default AddTodoForm;