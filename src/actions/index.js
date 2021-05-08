import {
  SET_MENU,
  ADD_TO_COMPARISON,
  REMOVE_COMPARISON_ITEM,
  REMOVE_ALL,
  ADD_TO_COMMENT
} from "../utils/constants";
// import {getProductById} from "../api";
export const menuContentSet = async(dispatch,menus) => {
  console.log(menus);
  // const products = await getProductById(menus);
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
    image: beverage.image,
    price: beverage.price,
    grade: beverage.grade
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
  console.log(contents);
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
