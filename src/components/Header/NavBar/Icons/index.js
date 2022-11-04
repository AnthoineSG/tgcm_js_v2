import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import profilIcon from 'src/assets/logo/user.svg';
import newletterIcon from 'src/assets/logo/mail.svg';
import basketIcon from 'src/assets/logo/shopping-cart.svg';
import searchIcon from 'src/assets/logo/search.svg';

import NewsLetter from 'src/components/NewsLetter';

import './icons.scss';

function Icons() {
  const dispatch = useDispatch();
  const activeNewsLetter = useSelector(
    (state) => state.newsLetter.activeNewsLetter
  );

  const handleNewsLetterClick = () => {
    dispatch({ type: 'ACTIVE_NEWSLETTER' });
  };

  return (
    <div className="icons">
      <img className="icons-items" src={searchIcon} alt="icone de recherche" />
      <button
        className="icons-button"
        type="button"
        onClick={handleNewsLetterClick}
      >
        <img
          className="icons-items"
          src={newletterIcon}
          alt="icone de newletter"
        />
      </button>
      <Link to="/account">
        <img className="icons-items" src={profilIcon} alt="icon de profil" />
      </Link>
      <Link to="/basket">
        <img className="icons-items" src={basketIcon} alt="icon de panier" />
      </Link>

      {activeNewsLetter && <NewsLetter />}
    </div>
  );
}

export default Icons;
