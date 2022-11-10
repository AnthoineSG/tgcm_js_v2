import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ButtonCustom from 'src/components/ButtonCustom';

import { deleteProductInBasket } from 'src/store/actions/action/user';

import BasketEmpty from '../BasketEmpty';

function BasketLogged() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.users.basket);

  const sizeBasket = basket?.product?.length;

  const handleClickBasket = () => {
    navigate('/order');
  };

  const handleClickDeleteProduct = (e) => {
    const data = JSON.parse(e.target.value);
    dispatch(deleteProductInBasket(data));
  };

  return (
    <div className="basket__content">
      {sizeBasket > 0 ? (
        <>
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

              <button
                type="button"
                onClick={handleClickDeleteProduct}
                value={JSON.stringify({
                  userId: basket.user_id,
                  productId: prod.id,
                })}
              >
                -
              </button>
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
        </>
      ) : (
        <BasketEmpty />
      )}
    </div>
  );
}

export default BasketLogged;
