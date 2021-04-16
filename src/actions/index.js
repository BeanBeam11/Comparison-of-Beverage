import {
  SET_MENU,
  ADD_TO_COMPARISON,
  REMOVE_COMPARISON_ITEM,
  REMOVE_ALL,
  ADD_TO_COMMENT
} from "../utils/constants";

export const menuContentSet = (dispatch,menus) => {
  dispatch({
    type:SET_MENU,
    payload:{menus}
  });
}
export const addToComparisonItem=(dispatch,beverage,count)=>{
  const item = {
    id: beverage.id,
    company:beverage.company,
    name: beverage.name,
    // image: beverage.image,
    price: beverage.price,
    
  };
  dispatch({
    type: ADD_TO_COMPARISON,
    payload: item,count
  });
  console.log(item);
}
export const removeComparisonItem = (dispatch,beverageId) => {
  dispatch({
    type: REMOVE_COMPARISON_ITEM,
    payload: beverageId,
  });
};
export const removeall=(dispatch,count,beverage)=>{
  dispatch({
    type: REMOVE_ALL,
    payload: count,beverage
  });
};
export const  addToComment=(dispatch,contents)=>{
  const content={
    users:contents.users,
    shop:contents.shop,
    product:contents.product,
    description:contents.description
  }
  dispatch({
    type: ADD_TO_COMMENT,
    payload: content
  })
}
