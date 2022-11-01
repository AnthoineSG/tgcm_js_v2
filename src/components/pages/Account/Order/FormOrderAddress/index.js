import { useSelector } from 'react-redux';

import { changeInputOrderValue } from 'src/store/actions';

import InputCustom from 'src/components/InputCustom';

function FormOrderAddress() {
  const { firstname, lastname, address, postalCode, city, phoneNumber } =
    useSelector((state) => state.users.order);

  return (
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
        <p className="order__form__fieldset-label-text">Numéro de téléphone</p>
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
  );
}

export default FormOrderAddress;
