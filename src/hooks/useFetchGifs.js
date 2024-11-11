import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

/******************/

export const useFetchGifs = (category) => {

    // Declarar hooks
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Declarar funciones
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    // Declarar useEffect
    // useEffect se utiliza para ejecutar la función getImages cuando el componente se monta, es decir, cuando se renderiza por primera vez.
    // Al pasar un array vacío como segundo argumento ([]), se indica que useEffect solo debe ejecutarse una vez al inicio, útil para tareas de inicialización como cargar datos iniciales.
    useEffect(() => {
        getImages();
    }, []);

    /******************/

    return {
        images,
        isLoading
    }
}
