import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Basket() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.users.user.isLogged);

  useEffect(() => {
    dispatch({ type: 'GET_BASKET' });
  }, [isLogged]);

  return (
    <div>
      <h1>Basket</h1>
    </div>
  );
}

export default Basket;
