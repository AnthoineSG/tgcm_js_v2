/* eslint-disable camelcase */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getProduct } from '../../../store/actions';

import Title from './Components/Title';
import Button from './Components/Button';
import Brand from './Components/Brand';
import Infos from './Components/Infos';

import './product.scss';

function Product() {
  const params = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  const isLoading = useSelector((state) => state.products.isLoading);

  useEffect(() => {
    dispatch(getProduct(params.id));
  }, [params.id]);

  return (
    <div className="product">
      {isLoading || (
        <>
          <Title prodCat={product.category_name} />
          <img
            className="product-img"
            src={product.image}
            alt={product.product_name}
          />

          <div className="product__infos">
            <Brand
              prodCat={product.category_name}
              prodBra={product.brand_name}
            />
            <h3 className="product__infos-name">{product.product_name}</h3>
            <p className="product__infos-content">
              <span className="product__infos-content-span">
                Description :{' '}
              </span>
              {product.description}
            </p>
            <Infos
              category_name={product.category_name}
              sub_category_name={product.sub_category_name}
              product={product}
            />
            <p className="product__infos-content">
              <span className="product__infos-content-span">Prix TTC : </span>
              {product.price_ttc} €
            </p>
          </div>

          <Button prodCat={product.category_name} />
        </>
      )}
    </div>
  );
}

export default Product;
