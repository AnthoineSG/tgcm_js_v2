import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getProductSubCategories } from '../../store/actions';

function SubCategory() {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductSubCategories(params.subcategory));
  }, [params.subcategory]);

  return (
    <div>
      <h1>{params.subcategory}</h1>
    </div>
  );
}

export default SubCategory;
