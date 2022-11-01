function FromOrderRadio() {
  return (
    <fieldset className="order__form__fieldset">
      <legend className="order__form__fieldset-title">Mode de paiement</legend>
      <label className="order__form__fieldset-labelRadio" htmlFor="prenom">
        CB
        <input
          className="order__form__fieldset-radio"
          id="prenom"
          placeholder="Votre Prenom"
          type="radio"
          name="card"
          defaultChecked
        />
      </label>
      <label className="order__form__fieldset-labelRadio" htmlFor="prenom">
        PayPal
        <input
          className="order__form__fieldset-radio"
          id="prenom"
          placeholder="Votre Prenom"
          type="radio"
          name="card"
        />
      </label>
    </fieldset>
  );
}

export default FromOrderRadio;
