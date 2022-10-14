import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { getProductSubCategories } from '../../store/actions';

import './subcategory.scss';

function SubCategory() {
  const params = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products.productList);
  const isLoading = useSelector((state) => state.products.isLoading);

  useEffect(() => {
    dispatch(getProductSubCategories(params.subcategory));
  }, [params.subcategory]);

  return (
    <div className="subcategory">
      <h1 className="subcategory-title">{params.subcategory}</h1>

      {isLoading &&
        productList.map((product) => (
          <div className="subcategory__card" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img
                className="subcategory__card-img"
                src={product.image}
                alt={product.name}
              />
              <div className="subcategory__card__infos">
                <p className="subcategory__card__infos-brand">
                  {product.brand_name}
                </p>
                <p className="subcategory__card__infos-name">{product.name}</p>
                <p className="subcategory__card__infos-price">
                  {product.price_ht} €
                </p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default SubCategory;
