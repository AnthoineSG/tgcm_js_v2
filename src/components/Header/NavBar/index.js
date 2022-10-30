import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { chooseCategorie, closeBurger } from 'src/store/actions';

import Icons from './Icons';

import './navBar.scss';

function NavBar() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categoriesList);
  const categorieSelected = useSelector(
    (state) => state.categories.categorieSelected
  );

  const handleCloseMenu = () => {
    dispatch(closeBurger());
  };

  const handleCategorieClick = (categorie) => {
    dispatch(chooseCategorie(categorie));
  };

  return (
    <div className="navbar">
      <button className="navbar-button" type="button" onClick={handleCloseMenu}>
        x
      </button>

      <Icons />

      {categories.map((categorie) => (
        <div key={categorie.category} className="navbar__menu">
          <button
            className="navbar__menu-categories"
            type="button"
            onClick={() => handleCategorieClick(categorie.category)}
          >
            {categorie.category}
          </button>
          {categorieSelected === categorie.category &&
            categorie.sub_category.map((sub) => (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'navbar__menu-subcategories navbar__menu-subcategories-active'
                    : 'navbar__menu-subcategories'
                }
                to={`/category/${sub}`}
                key={sub}
              >
                {sub}
              </NavLink>
            ))}
        </div>
      ))}
    </div>
  );
}

export default NavBar;
