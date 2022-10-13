import facebookIcon from 'src/assets/logo/facebook.svg';
import twitterIcon from 'src/assets/logo/twitter.svg';
import instagramIcon from 'src/assets/logo/instagram.svg';

import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__reseau">
        <img
          className="footer__reseau-icon"
          src={facebookIcon}
          alt="icon reseau"
        />
        <img
          className="footer__reseau-icon"
          src={twitterIcon}
          alt="icon reseau"
        />
        <img
          className="footer__reseau-icon"
          src={instagramIcon}
          alt="icon reseau"
        />
      </div>

      <div className="footer__adress">
        <p className="footer__adress-name">the good choice market</p>
        <p className="footer__adress-name">12, place lena 75001 PARIS</p>
      </div>

      <nav className="footer__page">
        <p className="footer__page-link">CGV</p>
        <p className="footer__page-link">FAQ</p>
        <p className="footer__page-link">BLOG</p>
        <p className="footer__page-link">Nous contacter</p>
        <p className="footer__page-link">Super Dev</p>
      </nav>
    </footer>
  );
}

export default Footer;
