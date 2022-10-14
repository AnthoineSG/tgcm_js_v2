import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getProduct } from '../../store/actions';

function Product() {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(params.id));
  }, [params.id]);

  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
}

export default Product;
