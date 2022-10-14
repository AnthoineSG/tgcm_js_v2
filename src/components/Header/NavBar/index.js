import { useDispatch, useSelector } from 'react-redux';
import Icons from './Icons';

import './navBar.scss';

function NavBar() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categoriesList);
  const categorieSelected = useSelector(
    (state) => state.categories.categorieSelected
  );

  const handleCloseMenu = () => {
    dispatch({ type: 'CLOSE_BURGER' });
  };

  const handleCategorieClick = (categorie) => {
    dispatch({ type: 'CHOOSE_CATEGORIE', selected: categorie });
  };

  return (
    <div className="navbar">
      <button className="navbar-button" type="button" onClick={handleCloseMenu}>
        x
      </button>

      <Icons />

      <nav className="navbar__menu">
        {categories.map((categorie) => (
          <>
            <button
              className="navbar__menu-categories"
              type="button"
              key={categorie.category}
              onClick={() => handleCategorieClick(categorie.category)}
            >
              {categorie.category}
            </button>
            {categorieSelected === categorie.category &&
              categorie.sub_category.map((sub) => (
                <p className="navbar__menu-subcategories" key={sub}>
                  {sub}
                </p>
              ))}
          </>
        ))}
      </nav>
    </div>
  );
}

export default NavBar;
