export const GET_BRAND = 'GET_BRAND';
export const GET_BRAND_SUCCESS = 'GET_BRAND_SUCCESS';

export const getBrand = () => ({
  type: GET_BRAND,
});

export const getBrandSuccess = (brands) => ({
  type: GET_BRAND_SUCCESS,
  brands,
});
