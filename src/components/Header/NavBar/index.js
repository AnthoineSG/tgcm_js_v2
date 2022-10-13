import { useDispatch } from 'react-redux';
import Icons from './Icons';

import './navBar.scss';

function NavBar() {
  const dispatch = useDispatch();

  const handleCloseMenu = () => {
    dispatch({ type: 'CLOSE_BURGER' });
  };

  return (
    <div className="navbar">
      <button className="navbar-button" type="button" onClick={handleCloseMenu}>
        x
      </button>

      <Icons />

      <nav className="navbar__menu">
        <p className="navbar__menu-categories">Food</p>
        <p className="navbar__menu-categories">Mode</p>
        <p className="navbar__menu-categories">Beaute</p>
        <p className="navbar__menu-categories">Loisir</p>
        <p className="navbar__menu-categories">Services</p>
      </nav>
    </div>
  );
}

export default NavBar;
