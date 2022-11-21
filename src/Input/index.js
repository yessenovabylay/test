import '../App.css';
import React, { useState } from 'react';

export const Input = ({setCitiesList}) => { 
    const handleOnClick = () => {
        setCitiesList((currentArray) => [...currentArray, inputValue])
    }

    const [inputValue, setInputValue] = useState('');
    
    const handleOnChange = (event) => {
        setInputValue(event.target.value);
    }
    return (
            <div className="InputWrap">
                    <input className='Input' onChange={handleOnChange} value={inputValue} />
                    <button className='Button' onClick={handleOnClick}>+</button>
            </div>
        )
};