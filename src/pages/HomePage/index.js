import homeLogo from '../../assets/images/Logo V4 détouré fond couleur nude.png';

import './homepage.scss';

function HomePage() {
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

      <div className="homepage__brand">
        <h2 className="homepage__brand-title">Nos marques</h2>
        <ul className="homepage__brand__list">
          <li className="homepage__brand__list-items">veggie deli</li>
          <li className="homepage__brand__list-items">plantéla</li>
          <li className="homepage__brand__list-items">wheaty</li>
          <li className="homepage__brand__list-items">chabiothe</li>
        </ul>
      </div>

      <div className="homepage__value">
        <h2 className="homepage__value-title">Leurs valeurs</h2>
        <ul className="homepage__value__list">
          <li className="homepage__value__list-items">toto</li>
          <li className="homepage__value__list-items">toto</li>
          <li className="homepage__value__list-items">toto</li>
        </ul>
      </div>
    </main>
  );
}

export default HomePage;
