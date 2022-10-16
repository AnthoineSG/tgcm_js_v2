import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  changeInputValue,
  createNewAccountSuccess,
  submitNewUser,
} from '../../../../store/actions';

import './signup.scss';

function Signup() {
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const { firstname, lastname, email, password } = useSelector(
    (state) => state.users.user
  );
  const createAccountSuccess = useSelector(
    (state) => state.users.createAccountSuccess
  );

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(submitNewUser(firstname, lastname, email, password));
  };

  const handleInputChange = (e) => {
    dispatch(changeInputValue(e.target.name, e.target.value));
  };

  const handleRedirectAfterCreateAccount = () => {
    dispatch(createNewAccountSuccess());
    nevigate('/signin');
  };

  return (
    <main className="signup">
      <h1 className="signup-title">Création de compte</h1>
      {createAccountSuccess && (
        <div>
          <h2>Bienvenue</h2>
          <p>
            Maintenant que vous avez cree un compte vous pouvez vous connecter
          </p>
          <button type="button" onClick={handleRedirectAfterCreateAccount}>
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
