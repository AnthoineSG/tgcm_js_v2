import { useDispatch, useSelector } from 'react-redux';
import Icons from './Icons';

import './navBar.scss';

function NavBar() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categoriesList);

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
        {categories.map((categorie) => (
          <button
            className="navbar__menu-categories"
            type="button"
            key={categorie.category}
          >
            {categorie.category}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default NavBar;
