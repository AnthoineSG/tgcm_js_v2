import PropTypes from 'prop-types';

function Brand({ prodCat, prodBra }) {
  return (
    <h2
      className={
        prodCat
          ? (prodCat === 'mode' &&
              'product__infos-brand product__infos-brand-mode') ||
            (prodCat === 'beaute' &&
              'product__infos-brand product__infos-brand-beaute') ||
            (prodCat === 'alimentation' &&
              'product__infos-brand product__infos-brand-alimentation') ||
            (prodCat === 'services' &&
              'product__infos-brand product__infos-brand-services') ||
            (prodCat === 'loisirs' &&
              'product__infos-brand product__infos-brand-loisirs') ||
            (prodCat === 'maison' &&
              'product__infos-brand product__infos-brand-maison')
          : undefined
      }
    >
      {prodBra}
    </h2>
  );
}

Brand.defaultProps = {
  prodCat: null,
  prodBra: null,
};

Brand.propTypes = {
  prodCat: PropTypes.string,
  prodBra: PropTypes.string,
};

export default Brand;
