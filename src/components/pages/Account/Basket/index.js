import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBasket } from 'src/store/actions';

import './basket.scss';

function Basket() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.users.isLogged);
  const basket = useSelector((state) => state.users.basket);

  useEffect(() => {
    if (isLogged === true) {
      dispatch(getBasket());
    }
  }, [isLogged]);

  return (
    <main className="basket">
      <h1 className="basket-title">Panier</h1>

      {isLogged ? (
        <div className="basket__content">
          {basket.product?.map((prod) => (
            <div className="basket__content__product" key={prod.name}>
              <p className="basket__content__product-items basket__content__product-items-green">
                Marque d'id : {prod.brand_id}
              </p>
              <div className="basket__content__product-items">
                <img
                  className="basket__content__product-items-img"
                  src={prod.image}
                  alt={prod.name}
                />
              </div>
              <p className="basket__content__product-items">{prod.name}</p>
              <p className="basket__content__product-items">
                {prod.price_ht} €
              </p>
            </div>
          ))}

          <div className="basket__content-info basket__content-info-green">
            <p>Total livraison </p>
            <span>{basket.total_delivery} €</span>
          </div>
          <div className="basket__content-info">
            <p>Total HT </p>
            <span>{basket.total_ttc} €</span>
          </div>
          <div className="basket__content-info">
            <p>Total TTC </p>
            <span>{basket.final_price} €</span>
          </div>

          <button className="basket__content-button" type="button">
            Valider mon panier
          </button>
        </div>
      ) : (
        <div>ya pas de panier</div>
      )}
    </main>
  );
}

export default Basket;
