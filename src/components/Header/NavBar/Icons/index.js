import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import profilIcon from 'src/assets/logo/user.svg';
import newletterIcon from 'src/assets/logo/mail.svg';
import basketIcon from 'src/assets/logo/shopping-cart.svg';
import searchIcon from 'src/assets/logo/search.svg';

import NewsLetter from 'src/components/NewsLetter';
import Search from 'src/components/Search';

import { activeNewsletter, toggleSearch } from 'src/store/actions';

import './icons.scss';
import { useEffect } from 'react';

function Icons() {
  const dispatch = useDispatch();
  const activeNewsLetter = useSelector(
    (state) => state.newsLetter.activeNewsLetter
  );
  const activeSearch = useSelector((state) => state.search.activeSearch);
  const basket = useSelector((state) => state.users.basket);

  const countProductInBasket = () => {
    if (!basket.product) {
      return 0;
    }
    if (basket.product.length >= 1) {
      return basket.product.length;
    }
    return 0;
  };

  useEffect(() => {
    countProductInBasket();
  }, [basket]);

  const count = countProductInBasket();

  const handleSearchClick = () => {
    dispatch(toggleSearch());
  };

  const handleNewsLetterClick = () => {
    dispatch(activeNewsletter());
  };

  return (
    <>
      <div className="icons">
        <button
          className="icons-button"
          type="button"
          onClick={handleSearchClick}
        >
          <img
            className="icons-items"
            src={searchIcon}
            alt="icone de recherche"
          />
        </button>

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

        {activeNewsLetter && <NewsLetter />}

        <Link to="/account">
          <img className="icons-items" src={profilIcon} alt="icon de profil" />
        </Link>

        <Link to="/basket" current-count={count} className="icons-items-link">
          <img
            className="icons-items icons-items-pick"
            src={basketIcon}
            alt="icon de panier"
          />
        </Link>
      </div>

      {activeSearch && <Search />}
    </>
  );
}

export default Icons;
