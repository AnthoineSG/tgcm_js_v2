import './signup.scss';

function Signup() {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <main className="signup">
      <h1 className="signup-title">Création de compte</h1>
      <form className="signup__form" onSubmit={handleSubmitForm}>
        <input
          className="signup__form-items"
          placeholder="Firstname"
          required
          type="text"
        />
        <input
          className="signup__form-items"
          placeholder="Lastname"
          required
          type="text"
        />
        <input
          className="signup__form-items"
          placeholder="Email"
          required
          type="email"
        />
        <input
          className="signup__form-items"
          placeholder="Password"
          required
          type="password"
        />
        <button className="signup__form-button" type="submit">
          Créer un compte
        </button>
      </form>
    </main>
  );
}

export default Signup;
