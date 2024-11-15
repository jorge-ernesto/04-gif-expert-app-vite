import PropTypes from 'prop-types';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../../hooks/useFetchGifs';

/******************/

export const GifGrid = ({ category }) => {

    // Declarar hooks
    const { images, isLoading } = useFetchGifs(category);

    /******************/

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    );
}

// Validar props
GifGrid.propTypes = {
    category: PropTypes.string
}
