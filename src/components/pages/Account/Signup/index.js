import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  changeInputSignupValue,
  createNewAccountSuccess,
  submitNewUser,
} from 'src/store/actions';

import './signup.scss';

function Signup() {
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const { firstname, lastname, email, password } = useSelector(
    (state) => state.users.userCreation
  );
  const modalSignup = useSelector((state) => state.users.modal.modalSignup);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(submitNewUser(firstname, lastname, email, password));
  };

  const handleInputChange = (e) => {
    dispatch(changeInputSignupValue(e.target.name, e.target.value));
  };

  const handleRedirectAfterCreateAccount = () => {
    dispatch(createNewAccountSuccess());
    nevigate('/signin');
  };

  return (
    <main className="signup">
      <h1 className="signup-title">Création de compte</h1>

      {modalSignup && (
        <div className="signup__modal">
          <h2 className="signup__modal-title">Bienvenue</h2>
          <p className="signup__modal-text">
            Maintenant que vous avez cree un compte vous pouvez vous connecter
          </p>
          <button
            className="signup__modal-button"
            type="button"
            onClick={handleRedirectAfterCreateAccount}
          >
            Acceder a la page de connexion
          </button>
        </div>
      )}

      <form className="signup__form" onSubmit={handleSubmitForm}>
        <input
          className="signup__form-items"
          placeholder="Firstname"
          required
          type="text"
          name="firstname"
          value={firstname}
          onChange={handleInputChange}
        />
        <input
          className="signup__form-items"
          placeholder="Lastname"
          required
          type="text"
          name="lastname"
          value={lastname}
          onChange={handleInputChange}
        />
        <input
          className="signup__form-items"
          placeholder="Email"
          required
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="signup__form-items"
          placeholder="Password"
          required
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <button className="signup__form-button" type="submit">
          Créer un compte
        </button>
      </form>
    </main>
  );
}

export default Signup;
