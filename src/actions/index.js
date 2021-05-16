import {
  SET_MENU,
  ADD_TO_COMPARISON,
  REMOVE_COMPARISON_ITEM,
  REMOVE_ALL,
  ADD_TO_COMMENT,
  BEGIN_LOGIN_REQUEST,
  SUCCESS_LOGIN_REQUEST,
  FAIL_LOGIN_REQUEST,
  REMEMBER_LOGIN,
  LOGOUT_REQUEST
} from "../utils/constants";
import {getFireJSON,signInWithEmailPassword,checkLoginApi} from "../api";
export const menuContentSet = async(dispatch,menusId) => {
 
  const menus = await getFireJSON(menusId);
  // console.log(menus);
  // let content=[];
  // menus.get().then(querySnapshot => {
  //   querySnapshot.forEach(doc => {
  //     content.push(doc.data());
  //   });
  // });
  // console.log(content);
  console.log(menus);
  dispatch({
    type:SET_MENU,
    payload:menus
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
export const loginToFirebase = async (dispatch, userInfo) => {
  dispatch({ type: BEGIN_LOGIN_REQUEST });
  try {
    const user = await signInWithEmailPassword(userInfo.email, userInfo.password);
    dispatch({
      type: SUCCESS_LOGIN_REQUEST,
      payload: user.user.providerData[0],
    })
    return user;
  } catch (e) {
    dispatch({
      type: FAIL_LOGIN_REQUEST,
      payload: e.message
    })
    console.log(e)
    return null;
  }
}

export const rememberLoginUser = (dispatch, remember) => {
  dispatch({
    type: REMEMBER_LOGIN,
    payload: remember,
  })
}
export const checkLogin = (dispatch) => {
  const isLogin = checkLoginApi();
  if(!isLogin) {
    localStorage.removeItem('orderInfo')
    dispatch({ type: LOGOUT_REQUEST });    
  }
  return isLogin;
}
