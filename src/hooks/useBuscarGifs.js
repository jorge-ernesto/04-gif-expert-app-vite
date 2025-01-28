// Importar librerias
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/search';

export const useBuscarGifs = (busqueda) => {

    /****************** Hooks ******************/

    const [imagenes, setImagenes] = useState([]);
    const [estaCargando, setEstaCargando] = useState(true);

    /****************** Funciones ******************/

    async function getImagenes() {
        let imagenes = await getGifs(busqueda);
        setImagenes(imagenes);
        setEstaCargando(false);
    }

    /**
     * Declarar useEffect para ejecutar la función getImagenes cuando el componente se monta.
     * useEffect es un hook de efecto en React, se utiliza para ejecutar funciones cuando el componente se monta, es decir, cuando se renderiza por primera vez.
     * Al pasar un array vacío como segundo argumento ([]), se indica que useEffect solo debe ejecutarse una vez al inicio, útil para tareas de inicialización como cargar datos iniciales.
     */
    useEffect(() => {
        getImagenes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /****************** Respuesta ******************/

    return {
        imagenes,
        estaCargando
    }
}
