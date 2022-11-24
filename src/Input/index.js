import '../App.css';
import React, { useState, useRef } from 'react';

export const Input = ({setCitiesList}) => { 
    const inputRef = useRef(null);
    const handleOnClick = () => {
        setCitiesList((currentArray) => [...currentArray, inputValue])
        setInputValue('');
        inputRef.current.focus();
    }

    const [inputValue, setInputValue] = useState('');
    
    const handleOnChange = (event) => {
        setInputValue(event.target.value);
    }
    return (
            <div className="InputWrap">
                    <input className='Input' onChange={handleOnChange} value={inputValue} ref={inputRef} />
                    <button className='Button' onClick={handleOnClick}>+</button>
            </div>
        )
};