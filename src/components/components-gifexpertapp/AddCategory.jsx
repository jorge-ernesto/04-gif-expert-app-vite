import PropTypes from 'prop-types';
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

    const onInputChange = (event) => {
        // Debug
        // console.log('onInputChange');
        // console.log('event', event);

        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        // Debug
        // console.log('onSubmit');
        // console.log('event', event);

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

// Validar props
AddCategory.propTypes = {
    onAddCategory: PropTypes.func
}
