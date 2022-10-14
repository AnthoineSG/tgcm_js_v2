/* eslint-disable camelcase */
import PropTypes from 'prop-types';

function Infos({ category_name, sub_category_name, product }) {
  return (
    <div>
      {category_name
        ? (category_name === 'loisirs' && sub_category_name === 'Cuisine' && (
            <p className="product__infos-content">
              <span className="product__infos-content-span">Lieu : </span>
              {product.location}
            </p>
          )) ||
          (category_name === 'maison' && sub_category_name === 'Meubles' && (
            <>
              <p className="product__infos-content">
                <span className="product__infos-content-span">Hauteur : </span>
                {product.height} cm
              </p>
              <p className="product__infos-content">
                <span className="product__infos-content-span">Largeur : </span>
                {product.width} cm
              </p>
              <p className="product__infos-content">
                <span className="product__infos-content-span">
                  Profondeur :{' '}
                </span>
                {product.depth} cm
              </p>
            </>
          )) ||
          (category_name === 'beaute' && sub_category_name === 'Soin' && (
            <>
              <p className="product__infos-content">
                <span className="product__infos-content-span">Quantité : </span>
                {product.weight}
              </p>
              <p className="product__infos-content">
                <span className="product__infos-content-span">
                  Code barre :{' '}
                </span>
                {product.barcode}
              </p>
            </>
          ))
        : undefined}
    </div>
  );
}

Infos.defaultProps = {
  category_name: null,
  sub_category_name: null,
};

Infos.propTypes = {
  category_name: PropTypes.string,
  sub_category_name: PropTypes.string,
  product: PropTypes.shape({
    product_id: PropTypes.number,
    product_name: PropTypes.string,
    brand_name: PropTypes.string,
    sub_category_name: PropTypes.string,
    category_name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    location: PropTypes.string,
    barcode: PropTypes.string,
    expiration_date: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    depth: PropTypes.string,
    weight: PropTypes.string,
    size: PropTypes.string,
    price_ttc: PropTypes.string,
    price_promo: PropTypes.string,
    price_kg: PropTypes.string,
  }).isRequired,
};

export default Infos;
