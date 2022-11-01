import { useSelector } from 'react-redux';

import ButtonCustom from 'src/components/ButtonCustom';

import FormOrderAddress from './FormOrderAddress';
import FromOrderRadio from './FormOrderRadio';

import './order.scss';

function Order() {
  const basket = useSelector((state) => state.users.basket);

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
        <FormOrderAddress />

        <FromOrderRadio />

        <div className="order__form__recap">
          <h2 className="order__form__recap-title">
            Récapitulatif de votre commande
          </h2>

          {basket.product?.map((prod, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className="order__form__recap__product" key={index}>
              <p className="order__form__recap__product-items order__form__recap__product-items-green">
                Marque d'id : {prod.brand_id}
              </p>
              <p className="order__form__recap__product-items">{prod.name}</p>
              <p className="order__form__recap__product-items">
                {prod.price_ht} €
              </p>
            </div>
          ))}

          <div className="order__form__recap-info order__form__recap-info-green">
            <p>Total livraison </p>
            <span>{basket.total_delivery} €</span>
          </div>
          <div className="order__form__recap-info">
            <p>Total HT </p>
            <span>{basket.total_ttc} €</span>
          </div>
          <div className="order__form__recap-info">
            <p>Total TTC </p>
            <span>{basket.final_price} €</span>
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
