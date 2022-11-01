import { useSelector } from 'react-redux';

import ButtonCustom from 'src/components/ButtonCustom';
import InputCustom from 'src/components/InputCustom';
import { changeInputOrderValue } from 'src/store/actions';

import './order.scss';

function Order() {
  const { firstname, lastname, address, postalCode, city, phoneNumber } =
    useSelector((state) => state.users.order);

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    console.log('Submit');
  };

  const handleButtonOrder = () => {
    console.log('click');
  };

  return (
    <main className="order">
      <h1 className="order-title">Commande</h1>
      <form className="order__form" onSubmit={handleSubmitOrder}>
        <fieldset className="order__form__fieldset">
          <legend className="order__form__fieldset-title">
            Adresse d'expédition
          </legend>

          <div className="order__form__fieldset-label">
            <p className="order__form__fieldset-label-text">Prenom</p>
            <InputCustom
              className="order__form__fieldset-input"
              name="firstname"
              placeholder="Votre Prenom"
              type="text"
              value={firstname}
              action={changeInputOrderValue}
            />
          </div>

          <div className="order__form__fieldset-label">
            <p className="order__form__fieldset-label-text">Nom</p>
            <InputCustom
              className="order__form__fieldset-input"
              name="lastname"
              placeholder="Votre Nom"
              type="text"
              value={lastname}
              action={changeInputOrderValue}
            />
          </div>

          <div className="order__form__fieldset-label">
            <p className="order__form__fieldset-label-text">Adresse</p>
            <InputCustom
              className="order__form__fieldset-input"
              name="address"
              placeholder="Votre Adresse"
              type="text"
              value={address}
              action={changeInputOrderValue}
            />
          </div>

          <div className="order__form__fieldset-label">
            <p className="order__form__fieldset-label-text">Code postal</p>
            <InputCustom
              className="order__form__fieldset-input"
              name="postalCode"
              placeholder="Votre Code postal"
              type="text"
              value={postalCode}
              action={changeInputOrderValue}
            />
          </div>

          <div className="order__form__fieldset-label">
            <p className="order__form__fieldset-label-text">Ville</p>
            <InputCustom
              className="order__form__fieldset-input"
              name="city"
              placeholder="Votre Ville"
              type="text"
              value={city}
              action={changeInputOrderValue}
            />
          </div>

          <div className="order__form__fieldset-label">
            <p className="order__form__fieldset-label-text">
              Numéro de téléphone
            </p>
            <InputCustom
              className="order__form__fieldset-input"
              name="phoneNumber"
              placeholder="Votre Numéro de téléphone"
              type="text"
              value={phoneNumber}
              action={changeInputOrderValue}
            />
          </div>
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
          click={handleButtonOrder}
          type="submit"
          color="orange"
        />
      </form>
    </main>
  );
}

export default Order;
