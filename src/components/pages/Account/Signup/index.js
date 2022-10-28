import { useDispatch, useSelector } from 'react-redux';

import { changeInputSignupValue, submitNewUser } from 'src/store/actions';
import InputCustom from 'src/components/inputCustom';
import SignupModal from './SignupModal';

import './signup.scss';

function Signup() {
  const dispatch = useDispatch();
  const { firstname, lastname, email, password } = useSelector(
    (state) => state.users.userCreation
  );
  const modalSignup = useSelector((state) => state.users.modal.modalSignup);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(submitNewUser(firstname, lastname, email, password));
  };

  return (
    <main className="signup">
      <h1 className="signup-title">Création de compte</h1>

      {modalSignup && <SignupModal />}

      <form className="signup__form" onSubmit={handleSubmitForm}>
        <InputCustom
          className="signup__form-items"
          placeholder="Firstname"
          required
          type="text"
          name="firstname"
          value={firstname}
          action={changeInputSignupValue}
        />
        <InputCustom
          className="signup__form-items"
          placeholder="Lastname"
          required
          type="text"
          name="lastname"
          value={lastname}
          action={changeInputSignupValue}
        />
        <InputCustom
          className="signup__form-items"
          placeholder="Email"
          required
          type="email"
          name="email"
          value={email}
          action={changeInputSignupValue}
        />
        <InputCustom
          className="signup__form-items"
          placeholder="Password"
          required
          type="password"
          name="password"
          value={password}
          action={changeInputSignupValue}
        />
        <button className="signup__form-button" type="submit">
          Créer un compte
        </button>
      </form>
    </main>
  );
}

export default Signup;
