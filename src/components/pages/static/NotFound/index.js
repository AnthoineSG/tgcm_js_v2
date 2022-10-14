import errorGif from 'src/assets/images/Session-Jump-Scare.gif';

import './notfound.scss';

function NotFound() {
  return (
    <main className="notFound">
      <p className="notFound-title">Vous êtes perdus ?</p>
      <img className="notFound-img" src={errorGif} alt="icon not found" />
    </main>
  );
}

export default NotFound;
