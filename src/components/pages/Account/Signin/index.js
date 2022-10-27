import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import {
  changeInputSigninValue,
  submitLogin,
  closeModalSignin,
} from 'src/store/actions';

import './signin.scss';

function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputEmail = useSelector((state) => state.users.inputEmail);
  const inputPassword = useSelector((state) => state.users.inputPassword);
  const modalSignin = useSelector((state) => state.users.modal.modalSignin);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(submitLogin(inputEmail, inputPassword));
  };

  const handleInputChange = (e) => {
    dispatch(changeInputSigninValue(e.target.name, e.target.value));
  };

  const handleButtonSignup = () => {
    navigate('/signup');
  };

  const handleClickModal = () => {
    dispatch(closeModalSignin());
  };

  return (
    <main className="signin">
      <h1 className="signin-title">Connexion</h1>

      {modalSignin && (
        <div className="signin__modal">
          <h2 className="signin__modal-title">Vous etes connecter !</h2>
          <p className="signin__modal-text">Ou voulez vous allez ?</p>
          <nav className="signin__modal__nav">
            <Link
              className="signin__modal__nav-items"
              onClick={handleClickModal}
              to="/"
            >
              La Page d'accueil
            </Link>
            <Link
              className="signin__modal__nav-items"
              onClick={handleClickModal}
              to="/account"
            >
              Votre profil
            </Link>
            <button
              className="signin__modal__nav-button"
              onClick={handleClickModal}
              type="button"
            >
              Reprendre d'ici
            </button>
          </nav>
        </div>
      )}

      <form className="signin__form" onSubmit={handleSubmitForm}>
        <input
          className="signin__form-items"
          placeholder="Email"
          required
          type="email"
          name="inputEmail"
          value={inputEmail}
          onChange={handleInputChange}
        />
        <input
          className="signin__form-items"
          placeholder="Password"
          required
          type="password"
          name="inputPassword"
          value={inputPassword}
          onChange={handleInputChange}
        />
        <button className="signin__form-button" type="submit">
          Se connecter
        </button>
      </form>

      <p className="signin-reinitialise">Réinitialiser son mot de passe</p>

      <div className="signin__signup">
        <p className="signin__signup-title">Vous n'avez encore de compte ?</p>
        <button
          className="signin__signup-button"
          type="button"
          onClick={handleButtonSignup}
        >
          Créer un compte
        </button>
      </div>
    </main>
  );
}

export default Signin;
