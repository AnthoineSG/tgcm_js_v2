import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
              <Link
                className="navbar__menu-subcategories"
                to={`/category/${sub}`}
                key={sub}
              >
                {sub}
              </Link>
            ))}
        </div>
      ))}
    </div>
  );
}

export default NavBar;
