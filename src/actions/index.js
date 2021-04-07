import {
  SET_PAGE_CONTENT,
  SET_NAVBAR_ACTIVEITEM,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  SET_PRODUCT_DETAIL,
  SET_MENU,
  ADD_TO_COMPARISON
} from "../utils/constants";

import products from "../json/products.json";
import menus from "../json/kebuke.json";
export const addCartItem = (dispatch, product, qty) => {
  const item = {
    id: product.id,
    name: product.name,
    image: product.image,
    price: product.price,
    countInStock: product.countInStock,
    qty,
  };
  dispatch({
    type: ADD_CART_ITEM,
    payload: item,
  });
};

export const removeCartItem = (dispatch, productId) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: productId,
  });
};


export const setProductDetail = (dispatch, productId, qty) => {
  const product = products.find(
    x => x.id === productId
  );
  
  if(qty === 0 && product.countInStock > 0)
      qty = 1;

  dispatch({
    type: SET_PRODUCT_DETAIL,
    payload: {
      product,
      qty,
    }
  })
}

export const pageContentsSet = (dispatch, title, products) => {
  dispatch({
    type: SET_PAGE_CONTENT,
    payload: { title, products },
  });
};

export const activeNavItemSet = (dispatch, activeNavItem) => {
  dispatch({
    type: SET_NAVBAR_ACTIVEITEM,
    payload: activeNavItem,
  });
};
export const menuContentSet = (dispatch,menus) => {
  dispatch({
    type:SET_MENU,
    payload:{menus}
  });
}
export const addToComparisonItem=(dispatch,beverage)=>{
  const item = {
    id: beverage.id,
    name: beverage.name,
    image: beverage.image,
    price: beverage.price,
    
  };
  dispatch({
    type: ADD_TO_COMPARISON,
    payload: item,
  });
}
