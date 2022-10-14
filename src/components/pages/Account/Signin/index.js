function Signin() {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <main>
      <h1>Se connecter</h1>
      <form onSubmit={handleSubmitForm}>
        <input placeholder="Email" required type="email" />
        <input placeholder="Password" required type="password" />
        <button type="submit">Valider</button>
      </form>
    </main>
  );
}

export default Signin;
