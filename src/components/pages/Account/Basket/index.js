import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getBasket } from 'src/store/actions';

import BasketLogged from './BasketLogged';
import BasketEmpty from './BasketEmpty';

import './basket.scss';

function Basket() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.users.isLogged);

  useEffect(() => {
    dispatch(getBasket());
  }, []);

  return (
    <main className="basket">
      <h1 className="basket-title">Panier</h1>

      {isLogged ? <BasketLogged /> : <BasketEmpty />}
    </main>
  );
}

export default Basket;
