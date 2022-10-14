function signup() {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <div>
      <h1>S'inscrire</h1>
      <form onSubmit={handleSubmitForm}>
        <input placeholder="Firstname" required type="text" />
        <input placeholder="Lastname" required type="text" />
        <input placeholder="Email" required type="email" />
        <input placeholder="Password" required type="password" />
        <button type="submit">Valider</button>
      </form>
    </div>
  );
}

export default signup;
