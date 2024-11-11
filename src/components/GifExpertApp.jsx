import { useState } from 'react';
import { AddCategory, GifGrid } from './components-gifexpertapp';

/******************/

export const GifExpertApp = () => {

    // Declarar hooks
    const [categories, setCategories] = useState(['anya']); // anya, es el valor inicial del hook useState

    // Declarar funciones
    const onAddCategory = (category) => {
        if (categories.includes(category)) return; // Si ya existe el registro, no incluirlo
        setCategories([category, ...categories]); // Categoria nueva, entra de primero
    }

    /******************/

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                onAddCategory={(value) => onAddCategory(value)}
            />

            {/* Listado de Gif */}
            {/* Evita usar 'index' como 'key' en React, ya que puede cambiar si se reordenan los elementos, causando problemas de rendimiento y renderizado incorrecto.
                Es preferible utilizar un identificador único asociado a cada elemento, como el valor de 'category', para garantizar un comportamiento consistente. */}
            {
                // eslint-disable-next-line no-unused-vars
                categories.map((category, index) => {
                    return (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                })
            }
        </>
    );
}
