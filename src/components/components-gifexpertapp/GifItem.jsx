import PropTypes from 'prop-types';

/******************/

// eslint-disable-next-line no-unused-vars
export const GifItem = ({ title, url, id }) => {

    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
}

// Validar props
GifItem.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    id: PropTypes.string
}
