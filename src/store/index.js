import { createContext } from "react";
import useReducerWithThunk from "use-reducer-thunk";
import products from "../json/products.json";
import menus from "../json/kebuke.json";
import {
  SET_PAGE_CONTENT,
  SET_NAVBAR_ACTIVEITEM,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  SET_PRODUCT_DETAIL,
  SET_MENU,
  ADD_TO_COMPARISON
} from "../utils/constants";

export const StoreContext = createContext();
let cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
let compareItems = localStorage.getItem("compareItems")
  ? JSON.parse(localStorage.getItem("compareItems"))
  :[];
const initialState = {
  page: {
    title: "NORDIC NEST Shopping Cart",
    products,
  },
  navBar: {
    activeItem: "/",
  },
  cartItems,
  productDetail: {
    product: {},
    qty: 1,
  },
  menuList:{
    menus,
  },
  compareItems,
};

function reducer(state, action) {
  switch (action.type) {
    case SET_PAGE_CONTENT:
      return {
        ...state,
        page: action.payload,
      };
    case SET_NAVBAR_ACTIVEITEM:
      return {
        ...state,
        navBar: {
          activeItem: action.payload,
        },
      };
    // case ADD_CART_ITEM:
    //   const item = action.payload;
    //   const product = state.cartItems.find((x) => x.id === item.id);
    //   if (product) {
    //     cartItems = state.cartItems.map((x) =>
    //       x.id === product.id ? item : x
    //     );
    //     return { ...state, cartItems };
    //   }
    //   cartItems = [...state.cartItems, item];
    //   return { ...state, cartItems };
    case REMOVE_CART_ITEM:
      cartItems = state.cartItems.filter((x) => x.id !== action.payload);
      return { ...state, cartItems };
    case SET_PRODUCT_DETAIL:
      return { ...state, productDetail: action.payload };
    case SET_MENU:
        return { 
          ...state,
          menuList:action.payload,
          
        };
    case ADD_TO_COMPARISON:
      const item = action.payload;
      const beverge = state.compareItems.find((x) => x.id === item.id);
      if (beverge) {
        compareItems = state.compareItems.map((x) =>
          x.id === beverge.id ? item : x
        );
        return { ...state, compareItems };
      }
      compareItems = [...state.cartItems, item];
      return { ...state, compareItems };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducerWithThunk(
    reducer,
    initialState,
    "example"
  );
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}
