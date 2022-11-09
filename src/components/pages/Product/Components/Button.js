import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { addProductBasket } from 'src/store/actions';

import ButtonCustom from 'src/components/ButtonCustom';

function Button({ prodCat }) {
  const dispatch = useDispatch();
  const params = useParams();

  const handleAddBasket = () => {
    dispatch(addProductBasket(params.id));
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
