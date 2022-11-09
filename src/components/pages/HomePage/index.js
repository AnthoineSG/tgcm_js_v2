import { useSelector } from 'react-redux';

import homeLogo from 'src/assets/images/Logo V4 détouré fond couleur nude.png';

import homepageData from 'src/data/homepageData';

import './homepage.scss';

function HomePage() {
  const brands = useSelector((state) => state.brands.brandList);
  const isLoading = useSelector((state) => state.brands.isLoading);

  return (
    <main className="homepage">
      <div className="homepage__presentation">
        <h1 className="homepage__presentation-title">
          Le e-marché des créateurs avec de belles valeurs
        </h1>
        <img
          className="homepage__presentation-logo"
          src={homeLogo}
          alt="icon pricipale"
        />
      </div>

      <div className="homepage__infos">
        <h2 className="homepage__infos-title">Nos marques</h2>
        <ul className="homepage__infos__list">
          {isLoading ||
            brands.map((brand) => (
              <li className="homepage__infos__list__items" key={brand.id}>
                <img
                  className="homepage__infos__list__items-brand"
                  src={brand.logo}
                  alt={brand.alt}
                />
              </li>
            ))}
        </ul>
      </div>

      <div className="homepage__infos">
        <h2 className="homepage__infos-title">Leurs valeurs</h2>
        <ul className="homepage__infos__list">
          {homepageData.values.map((value) => (
            <li className="homepage__infos__list__items" key={value.id}>
              <img
                className="homepage__infos__list__items-value"
                src={value.logo}
                alt={value.alt}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default HomePage;
