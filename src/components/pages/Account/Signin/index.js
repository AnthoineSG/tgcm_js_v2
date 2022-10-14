import { useNavigate } from 'react-router-dom';

import './signin.scss';

function Signin() {
  const navigate = useNavigate();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  const handleButtonSignup = () => {
    navigate('/signup');
  };

  return (
    <main className="signin">
      <h1 className="signin-title">Connexion</h1>

      <form className="signin__form" onSubmit={handleSubmitForm}>
        <input
          className="signin__form-items"
          placeholder="Email"
          required
          type="email"
        />
        <input
          className="signin__form-items"
          placeholder="Password"
          required
          type="password"
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
