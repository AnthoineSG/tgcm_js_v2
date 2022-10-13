import { useDispatch, useSelector } from 'react-redux';

import textLogo from 'src/assets/images/Logo_text_detouré V4.png';

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
          x
        </button>
      )}
    </header>
  );
}

export default Header;
