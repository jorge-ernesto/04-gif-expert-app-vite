// Importar librerias
import PropTypes from 'prop-types';
import { useState } from 'react';

export const AddBusquedas = ({ onAddBusquedas }) => {

    /****************** Hooks ******************/

    const [busqueda, setBusqueda] = useState('');

    /****************** Funciones ******************/

    function onChangeBusqueda(event) {
        // Debug
        // console.log('event', event);
        // console.log('event', event.target.value);

        setBusqueda(event.target.value);
    }

    function onSubmit(event) {
        event.preventDefault();

        if (busqueda.trim().length == 0) {
            return false;
        }

        onAddBusquedas(busqueda.trim());
    }

    /****************** Respuesta ******************/

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar gifs" value={busqueda} onChange={onChangeBusqueda} />
        </form>
    );
}

// Validar props
AddBusquedas.propTypes = {
    onAddBusquedas: PropTypes.func
}
