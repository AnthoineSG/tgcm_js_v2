import { Link } from 'react-router-dom';

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

      <nav className="footer__pages">
        <Link to="/cgv" className="footer__pages-link">
          CGV
        </Link>
        <Link to="/faq" className="footer__pages-link">
          FAQ
        </Link>
        <Link to="/blog" className="footer__pages-link">
          BLOG
        </Link>
        <Link to="/contact" className="footer__pages-link">
          Nous contacter
        </Link>
        <Link to="/superdev" className="footer__pages-link">
          Super Dev
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
