import {
  SET_MENU,
  ADD_TO_COMPARISON,
  REMOVE_COMPARISON_ITEM
} from "../utils/constants";

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
export const removeComparisonItem = (dispatch,beverageId) => {
  dispatch({
    type: REMOVE_COMPARISON_ITEM,
    payload: beverageId,
  });
};
