import React, { useState, useEffect } from 'react';
import '../Styles/Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [isMinimalScreen, setIsMinimalScreen] = useState(false);

    const handleButtonClick = (value) => {
        setInput((prevInput) => prevInput + value);
    };

    const handleClear = () => {
        setInput('');
    };

    const handleEqual = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput('Error');
        }
    };

    const handleKeyDown = (event) => {
        const allowedKeys = /[0-9+\-*/.=]|Backspace|Enter|Delete/;

        if (allowedKeys.test(event.key)) {
            event.preventDefault();

            if (event.key === 'Enter') {
                handleEqual();
            } else if (event.key === '=') {
                handleEqual();
            } else if (event.key === 'Backspace') {
                setInput((prevInput) => prevInput.slice(0, -1));
            } else if (event.key === 'Delete') {
                setInput('');
            } else {
                handleButtonClick(event.key);
            }
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMinimalScreen(window.innerWidth <= 400);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <div className={`calculator-container${isMinimalScreen ? ' minimal-screen' : ''}`} tabIndex="0">
            {isMinimalScreen ? (
                <input
                    type="text"
                    className="calculator-input"
                    value={input}
                    readOnly
                />
            ) : (
                <>
                    <input
                        type="text"
                        className="calculator-input"
                        value={input}
                        readOnly
                    />
                    <div className="buttons-container">
                        <button onClick={() => handleButtonClick('7')}>7</button>
                        <button onClick={() => handleButtonClick('8')}>8</button>
                        <button onClick={() => handleButtonClick('9')}>9</button>
                        <button onClick={() => handleButtonClick('+')}>+</button>
                        <button onClick={() => handleButtonClick('4')}>4</button>
                        <button onClick={() => handleButtonClick('5')}>5</button>
                        <button onClick={() => handleButtonClick('6')}>6</button>
                        <button onClick={() => handleButtonClick('-')}>-</button>
                        <button onClick={() => handleButtonClick('1')}>1</button>
                        <button onClick={() => handleButtonClick('2')}>2</button>
                        <button onClick={() => handleButtonClick('3')}>3</button>
                        <button onClick={() => handleButtonClick('*')}>*</button>
                        <button onClick={() => handleButtonClick('0')}>0</button>
                        <button onClick={() => handleButtonClick('.')}>.</button>
                        <button onClick={() => handleButtonClick('/')}>/</button>
                        <button className="equal-btn" onClick={handleEqual}>=</button>
                        <button className="clear-btn" onClick={handleClear}>Clear</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Calculator;
