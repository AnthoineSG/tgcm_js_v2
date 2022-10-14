import PropTypes from 'prop-types';

function Button({ prodCat }) {
  const user = {
    email: 'toto@toto.fr',
    password: 'jeng',
    token: 'klsnfgknf',
  };

  const handleAddBasket = () => {
    if (user) {
      console.log('ajout au pannier de : ', user.email);
    }
  };

  return (
    <button
      className={
        prodCat
          ? (prodCat === 'mode' && 'product-button product-button-mode') ||
            (prodCat === 'beaute' && 'product-button product-button-beaute') ||
            (prodCat === 'alimentation' &&
              'product-button product-button-alimentation') ||
            (prodCat === 'services' &&
              'product-button product-button-services') ||
            (prodCat === 'loisirs' &&
              'product-button product-button-loisirs') ||
            (prodCat === 'maison' && 'product-button product-button-maison')
          : undefined
      }
      type="button"
      onClick={handleAddBasket}
    >
      Ajouter au panier
    </button>
  );
}

Button.defaultProps = {
  prodCat: null,
};

Button.propTypes = {
  prodCat: PropTypes.string,
};

export default Button;
