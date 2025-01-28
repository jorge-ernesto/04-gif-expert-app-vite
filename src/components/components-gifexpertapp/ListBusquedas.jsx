// Importar librerias
import PropTypes from 'prop-types';
import { useBuscarGifs } from '../../hooks/useBuscarGifs';

export const ListBusquedas = ({ busqueda }) => {

    /****************** Hooks ******************/

    const { imagenes, estaCargando } = useBuscarGifs(busqueda);

    /****************** Respuesta ******************/

    return (
        <>
            <h3>{busqueda}</h3>

            {estaCargando && <h2>Cargando...</h2>}
            {!estaCargando && imagenes.length > 0 && (
                <div className="card-grid">
                    {
                        imagenes.map((imagen) => {
                            return (
                                <div key={imagen} className="card">
                                    <img src={imagen.url} alt={imagen.title} />
                                    <p>{imagen.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
            )}
        </>
    );
}

// Validar props
ListBusquedas.propTypes = {
    busqueda: PropTypes.string
}
