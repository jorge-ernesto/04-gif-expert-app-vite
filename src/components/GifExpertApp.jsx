// Importar librerias
import { useState } from 'react';
import { AddBusquedas, ListBusquedas } from './components-gifexpertapp';

export const GifExpertApp = () => {

    /****************** Hooks ******************/

    const [busquedas, setBusquedas] = useState(['anya']); // anya, es el valor inicial del hook useState

    /****************** Funciones ******************/

    function onAddBusquedas(busqueda) {
        // Debug
        // console.log('busqueda', busqueda);
        // console.log('busquedas', busquedas);
        // console.log('busqueda', typeof busqueda);
        // console.log('busquedas', typeof busquedas);

        // Si ya existe el registro, no incluirlo
        if (busquedas.includes(busqueda)) {
            return false;
        }

        // Categoria nueva, entra de primero
        setBusquedas([busqueda, ...busquedas]);
    }

    /****************** Respuesta ******************/

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input para agregar busquedas */}
            <AddBusquedas
                onAddBusquedas={onAddBusquedas}
            />

            {/* Listado de busquedas */}
            {/**
              * Evita usar 'index' como 'key' en React, ya que puede cambiar si se reordenan los elementos, causando problemas de rendimiento y renderizado incorrecto.
              * Es preferible utilizar un identificador único asociado a cada elemento, como el valor de 'busqueda', para garantizar un comportamiento consistente.
              */}
            {
                busquedas.map((busqueda) => {
                    return (
                        <ListBusquedas
                            key={busqueda}
                            busqueda={busqueda}
                        />
                    )
                })
            }
        </>
    );
}
