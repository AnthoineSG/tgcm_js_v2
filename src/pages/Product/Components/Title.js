import PropTypes from 'prop-types';

function Title({ prodCat }) {
  return (
    <h1
      className={
        prodCat
          ? (prodCat === 'mode' && 'product-title product-title-mode') ||
            (prodCat === 'beaute' && 'product-title product-title-beaute') ||
            (prodCat === 'alimentation' &&
              'product-title product-title-alimentation') ||
            (prodCat === 'services' &&
              'product-title product-title-services') ||
            (prodCat === 'loisirs' && 'product-title product-title-loisirs') ||
            (prodCat === 'maison' && 'product-title product-title-maison')
          : undefined
      }
    >
      {prodCat}
    </h1>
  );
}

Title.defaultProps = {
  prodCat: null,
};

Title.propTypes = {
  prodCat: PropTypes.string,
};

export default Title;
