import { Link } from 'react-router-dom';

import profilIcon from 'src/assets/logo/user.svg';
import newletterIcon from 'src/assets/logo/mail.svg';
import basketIcon from 'src/assets/logo/shopping-cart.svg';
import searchIcon from 'src/assets/logo/search.svg';

import './icons.scss';

function Icons() {
  return (
    <div className="icons">
      <img className="icons-items" src={searchIcon} alt="icone de recherche" />
      <img
        className="icons-items"
        src={newletterIcon}
        alt="icone de newletter"
      />
      <Link to="/account">
        <img className="icons-items" src={profilIcon} alt="icon de profil" />
      </Link>
      <Link to="/basket">
        <img className="icons-items" src={basketIcon} alt="icon de panier" />
      </Link>
    </div>
  );
}

export default Icons;
