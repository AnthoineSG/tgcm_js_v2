import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { changeInputSigninValue, submitLogin } from 'src/store/actions';
import InputCustom from 'src/components/InputCustom';
import SigninModal from './SigninModal';

import './signin.scss';

function Signin() {
  const dispatch = useDispatch();
  const inputEmail = useSelector((state) => state.users.inputEmail);
  const inputPassword = useSelector((state) => state.users.inputPassword);
  const modalSignin = useSelector((state) => state.users.modal.modalSignin);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    localStorage.setItem('email', inputEmail);
    localStorage.setItem('password', inputPassword);
    dispatch(submitLogin(inputEmail, inputPassword));
  };

  return (
    <main className="signin">
      <h1 className="signin-title">Connexion</h1>

      {modalSignin && <SigninModal />}

      <form className="signin__form" onSubmit={handleSubmitForm}>
        <InputCustom
          className="signin__form-items"
          placeholder="Email"
          required
          type="email"
          name="inputEmail"
          value={inputEmail}
          action={changeInputSigninValue}
        />
        <InputCustom
          className="signin__form-items"
          placeholder="Password"
          required
          type="password"
          name="inputPassword"
          value={inputPassword}
          action={changeInputSigninValue}
        />
        <button className="signin__form-button" type="submit">
          Se connecter
        </button>
      </form>

      <p className="signin-reinitialise">Réinitialiser son mot de passe</p>

      <div className="signin__signup">
        <p className="signin__signup-title">Vous n'avez encore de compte ?</p>
        <Link className="signin__signup-button" to="/signup">
          Créer un compte
        </Link>
      </div>
    </main>
  );
}

export default Signin;
