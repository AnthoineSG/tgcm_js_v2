import { useDispatch, useSelector } from 'react-redux';

import textLogo from 'src/assets/images/Logo_text_detouré V4.png';
import burgerIcon from 'src/assets/logo/menu.svg';

import NavBar from './NavBar';

import './header.scss';

function Header() {
  const dispatch = useDispatch();
  const burgerIsActive = useSelector((state) => state.burger.burgerIsActive);

  const handleOpenMenu = () => {
    dispatch({ type: 'OPEN_BURGER' });
  };

  return (
    <header className="header">
      <img className="header-logo" src={textLogo} alt="logo format text" />

      {burgerIsActive ? (
        <NavBar />
      ) : (
        <button
          className="header-button"
          type="button"
          onClick={handleOpenMenu}
        >
          <img src={burgerIcon} alt="menu-burger" />
        </button>
      )}
    </header>
  );
}

export default Header;
