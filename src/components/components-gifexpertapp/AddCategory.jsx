import { useState } from 'react';

/******************/

export const AddCategory = ({ onAddCategory }) => {

    // Declarar hooks
    const [inputValue, setInputValue] = useState('');

    // Declarar funciones
    /*
    const onInputChange = (event) => {
        console.log('event', event.target.value);
    }
    */

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        onAddCategory(inputValue.trim());
        setInputValue('');
    }

    /******************/

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={onInputChange} /> {/* onChange={(event) => onInputChange(event)} */}
        </form>
    );
}
