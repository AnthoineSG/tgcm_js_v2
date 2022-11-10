export const urlGetBrand = () => ({
  method: 'GET',
  url: 'http://localhost:8080/api/brand',
});

export const urlGetCategory = () => ({
  method: 'GET',
  url: 'http://localhost:8080/api/category/sub_category',
});

export const urlGetProductSubCategory = (subCategory) => ({
  method: 'GET',
  url: `http://localhost:8080/api/product/sub_category/${subCategory}`,
});

export const urlGetProduct = (idProduct) => ({
  method: 'GET',
  url: `http://localhost:8080/api/product/${idProduct}`,
});

export const urlAddProductBasket = (productId, token, userEmail) => ({
  method: 'POST',
  url: `http://localhost:8080/api/product/${productId}/user`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  data: {
    email: userEmail,
  },
  withCredentials: true,
});

export const urlGetSubCategory = () => ({
  method: 'GET',
  url: `http://localhost:8080/api/sub_category`,
});

export const urlSubmitNewUser = (firstname, lastname, email, password) => ({
  method: 'POST',
  url: 'http://localhost:8080/api/user',
  headers: {
    'Content-Type': 'application/json',
  },
  data: {
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
  },
});

export const urlSubmitLogin = (email, password) => ({
  method: 'POST',
  url: 'http://localhost:8080/api/user/login',
  headers: {
    'Content-Type': 'application/json',
  },
  data: {
    email: email,
    password: password,
  },
});

export const urlLoginWithLocalstorage = (email, password) => ({
  method: 'POST',
  url: 'http://localhost:8080/api/user/login',
  headers: {
    'Content-Type': 'application/json',
  },
  data: {
    email: email,
    password: password,
  },
});

export const urlGetBasket = (userEmail, token) => ({
  method: 'GET',
  url: `http://localhost:8080/api/user/${userEmail}/product`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  withCredentials: true,
});

export const urlLogout = () => ({
  method: 'POST',
  url: 'http://localhost:8080/api/user/logout',
});

export const urlDeleteProductInBasket = (token, productId, userId) => ({
  method: 'DELETE',
  url: 'http://localhost:8080/api/product/user',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  data: {
    product_id: productId,
    user_id: userId,
  },
  withCredentials: true,
});
