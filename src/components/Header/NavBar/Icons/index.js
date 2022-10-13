import profilIcon from 'src/assets/images/account.png';
import newletterIcon from 'src/assets/images/Newsletter.png';
import basketIcon from 'src/assets/images/Logo_image_detouré V4 (2).png';

import './icons.scss';

function Icons() {
  return (
    <div className="icons">
      <img className="icons-search" src={profilIcon} alt="icone de recherche" />
      <img
        className="icons-newLetter"
        src={newletterIcon}
        alt="icone de newletter"
      />
      <img className="icons-profil" src={profilIcon} alt="icon de profil" />
      <img className="icons-basket" src={basketIcon} alt="icon de panier" />
    </div>
  );
}

export default Icons;
