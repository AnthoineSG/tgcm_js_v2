import ButtonCustom from 'src/components/ButtonCustom';

import './order.scss';

function Order() {
  const handleSubmitOrder = () => {
    console.log('Validation de la commande');
  };

  return (
    <main className="order">
      <h1 className="order-title">Commande</h1>
      <form className="order__form">
        <fieldset className="order__form__fieldset">
          <legend className="order__form__fieldset-title">
            Adresse d'expédition
          </legend>
          <label className="order__form__fieldset-label" htmlFor="prenom">
            <p className="order__form__fieldset-label-text">Prenom</p>
            <input
              className="order__form__fieldset-input"
              id="prenom"
              placeholder="Votre Prenom"
              type="text"
            />
          </label>
          <label className="order__form__fieldset-label" htmlFor="nom">
            <p className="order__form__fieldset-label-text">Nom</p>
            <input
              className="order__form__fieldset-input"
              id="nom"
              placeholder="Votre Nom"
              type="text"
            />
          </label>
          <label className="order__form__fieldset-label" htmlFor="address">
            <p className="order__form__fieldset-label-text">Adresse</p>
            <input
              className="order__form__fieldset-input"
              id="address"
              placeholder="Votre Adresse"
              type="text"
            />
          </label>
          <label className="order__form__fieldset-label" htmlFor="postalCode">
            <p className="order__form__fieldset-label-text">Code postal</p>
            <input
              className="order__form__fieldset-input"
              id="postalCode"
              placeholder="Votre Code postal"
              type="text"
            />
          </label>
          <label className="order__form__fieldset-label" htmlFor="city">
            <p className="order__form__fieldset-label-text">Ville</p>
            <input
              className="order__form__fieldset-input"
              id="city"
              placeholder="Votre Ville"
              type="text"
            />
          </label>
          <label className="order__form__fieldset-label" htmlFor="phoneNumber">
            <p className="order__form__fieldset-label-text">
              Numéro de téléphone
            </p>
            <input
              className="order__form__fieldset-input"
              id="phoneNumber"
              placeholder="Votre Numéro de téléphone"
              type="text"
            />
          </label>
        </fieldset>

        <fieldset className="order__form__fieldset">
          <legend className="order__form__fieldset-title">
            Mode de paiement
          </legend>
          <label className="order__form__fieldset-labelRadio" htmlFor="prenom">
            CB
            <input
              className="order__form__fieldset-radio"
              id="prenom"
              placeholder="Votre Prenom"
              type="radio"
              name="card"
              checked
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

        <div>
          <h2>Récapitulatif de votre commande</h2>
          <div>
            <p>prod 1</p>
            <p>prod 2</p>
            <p>prod 3</p>
          </div>
        </div>

        <ButtonCustom
          text="Valider mon panier"
          click={handleSubmitOrder}
          type="button"
          color="orange"
        />
      </form>
    </main>
  );
}

export default Order;
