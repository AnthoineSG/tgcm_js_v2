/* eslint-disable camelcase */
import PropTypes from 'prop-types';

function Infos({
  location,
  barcode,
  expiration_date,
  height,
  width,
  depth,
  weight,
  size,
}) {
  return (
    <>
      {location && (
        <p className="product__infos-content">
          <span className="product__infos-content-span">Lieu : </span>
          {location}
        </p>
      )}
      {barcode && (
        <p className="product__infos-content">
          <span className="product__infos-content-span">Code barre : </span>
          {barcode}
        </p>
      )}
      {expiration_date && (
        <p className="product__infos-content">
          <span className="product__infos-content-span">
            Date d'expiration :{' '}
          </span>
          {expiration_date}
        </p>
      )}
      {height && (
        <p className="product__infos-content">
          <span className="product__infos-content-span">Hauteur : </span>
          {height}
        </p>
      )}
      {width && (
        <p className="product__infos-content">
          <span className="product__infos-content-span">Largeur : </span>
          {width}
        </p>
      )}
      {depth && (
        <p className="product__infos-content">
          <span className="product__infos-content-span">Profondeur : </span>
          {depth}
        </p>
      )}
      {weight && (
        <p className="product__infos-content">
          <span className="product__infos-content-span">Poids : </span>
          {weight}
        </p>
      )}
      {size && (
        <p className="product__infos-content">
          <span className="product__infos-content-span">Taille : </span>
          {size}
        </p>
      )}
    </>
  );
}

Infos.defaultProps = {
  location: null,
  barcode: null,
  expiration_date: null,
  height: null,
  width: null,
  depth: null,
  weight: null,
  size: null,
};

Infos.propTypes = {
  location: PropTypes.string,
  barcode: PropTypes.string,
  expiration_date: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  depth: PropTypes.string,
  weight: PropTypes.string,
  size: PropTypes.string,
};

export default Infos;
