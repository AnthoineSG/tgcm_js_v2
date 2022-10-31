import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBasket } from 'src/store/actions';

function Basket() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.users.user.isLogged);

  useEffect(() => {
    dispatch(getBasket());
  }, [isLogged]);

  return (
    <div>
      <h1>Basket</h1>
    </div>
  );
}

export default Basket;
