import errorGif from '../../assets/images/Session-Jump-Scare.gif';

import './notfound.scss';

function NotFound() {
  return (
    <div className="notFound">
      <p className="notFound-title">Vous êtes perdus ?</p>
      <img className="notFound-img" src={errorGif} alt="icon not found" />
    </div>
  );
}

export default NotFound;
