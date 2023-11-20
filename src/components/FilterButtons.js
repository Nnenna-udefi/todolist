import React from 'react';
import '../App.scss';

const FilterButton = ({ filter, changeFilter, clearCompleted, todos, mode }) => {
    const notCompletedCount = todos.filter((todo) => !todo.completed).length;

    return (
        <div className='filter'>
            <div className={`filterButtons ${mode === 'light' ? 'light-mode' : 'dark-mode'}`}>
                <p>{notCompletedCount} {notCompletedCount === 1 ? 'item' : 'items'} left</p>
                <div>
                    <button onClick={() => changeFilter('all')} className={filter === 'all' ? 'active': ''}>All</button>
                    <button onClick={() => changeFilter('active')} className={filter === 'active' ? 'active' : ''}>Active</button>
                    <button onClick={() => changeFilter('complete')} className={filter === 'complete' ? 'active' : ''}>Completed</button>
                </div>
                <button onClick={() => clearCompleted()}>Clear Completed</button>
            </div>
        </div>
    );
};

export default FilterButton;