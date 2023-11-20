import React from 'react';
import darkMoon from '../images/icon-moon.svg';
import lightSun from '../images/icon-sun.svg';

const Toggle = ({ toggleMode, mode }) => {
    return (
        <div className='toggle-btn'>
            <button onClick={toggleMode} className={`toggle-button ${mode === 'light' ? 'light-mode' : 'dark-mode'}`}>
                {mode === 'light' ? (
                    <img src={darkMoon} alt='dark mode' />
                ) : (
                    <img src={lightSun} alt='light mode' />
                )}
            </button>
        </div>
    );
};

export default Toggle;