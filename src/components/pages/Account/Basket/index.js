import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getBasket } from 'src/store/actions';

import ButtonCustom from 'src/components/ButtonCustom';

import './basket.scss';

function Basket() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.users.isLogged);
  const basket = useSelector((state) => state.users.basket);

  useEffect(() => {
    if (isLogged === true) {
      dispatch(getBasket());
    }
  }, [isLogged]);

  const handleClickBasket = () => {
    navigate('/order');
  };

  return (
    <main className="basket">
      <h1 className="basket-title">Panier</h1>

      {isLogged ? (
        <div className="basket__content">
          {basket.product?.map((prod, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className="basket__content__product" key={index}>
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

          <ButtonCustom
            text="Valider mon panier"
            click={handleClickBasket}
            type="button"
            color="orange"
          />
        </div>
      ) : (
        <div className="basket__empty">
          <h2 className="basket__empty-title">Votre panier est vide</h2>
        </div>
      )}
    </main>
  );
}

export default Basket;
