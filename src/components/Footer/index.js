import { NavLink } from 'react-router-dom';

import facebookIcon from 'src/assets/logo/facebook.svg';
import twitterIcon from 'src/assets/logo/twitter.svg';
import instagramIcon from 'src/assets/logo/instagram.svg';

import footerLinkData from 'src/data/linkData';

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
        {footerLinkData.map((link) => (
          <NavLink
            key={link.id}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? 'footer__pages-link footer__pages-link-active'
                : 'footer__pages-link'
            }
          >
            {link.text}
          </NavLink>
        ))}
      </nav>
    </footer>
  );
}

export default Footer;
