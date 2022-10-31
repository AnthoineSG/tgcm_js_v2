import PropTypes from 'prop-types';
import ButtonCustom from '../../../ButtonCustom';

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
    <ButtonCustom
      text="Ajouter au panier"
      click={handleAddBasket}
      type="button"
      color={prodCat}
    />
  );
}

Button.defaultProps = {
  prodCat: null,
};

Button.propTypes = {
  prodCat: PropTypes.string,
};

export default Button;
