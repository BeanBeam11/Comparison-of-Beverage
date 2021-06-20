import {
  SET_MENU,
  ADD_TO_COMPARISON,
  REMOVE_COMPARISON_ITEM,
  REMOVE_ALL,
  ADD_TO_COMMENT,
  BEGIN_COMMENT,
  SUCCESS_COMMENT,
  SUCCESS_ADD_COMMENT,
  BEGIN_ADD_COMMENT,
  BEGIN_LOGIN_REQUEST,
  SUCCESS_LOGIN_REQUEST,
  FAIL_LOGIN_REQUEST,
  REMEMBER_LOGIN,
  LOGOUT_REQUEST,
  BEGIN_REGISTER_REQUEST,
  SUCCESS_REGISTER_REQUEST,
  FAIL_REGISTER_REQUEST,
  BEGIN_UPDATE_USERINFO,
  SUCCESS_UPDATE_USERINFO,
  FAIL_UPDATE_USERINFO,
  ADD_COMMENT,
  GET_COMMENT,
  ADD_FAVORITE,
  GET_FAVORITE,
  REMOVE_FAVORITE,
  GET_SINGLE_FAVORITE,
  BEGIN_SET_MENU,
  SUCCESS_SET_MENU,
  BEGIN_ADD_FAVORITE,
  SUCCESS_ADD_FAVORITE
} from "../utils/constants";
import {getFireJSON,
  signInWithEmailPassword,
  registerWithEmailPassword,
  signOut,
  updateUserInfoApi,
  checkLoginApi,
  PublishComment,
  getComment,
  addFavorite,
  getFavorite,
  getSingleFavorite,
  removeFavorite
} from "../api";

export const menuContentSet = async(dispatch,menusId) => {
 dispatch({type:BEGIN_SET_MENU});
  try{
    const menucontent = await getFireJSON(menusId);
    console.log(menucontent);
    dispatch({
      type:SET_MENU,
      payload:menucontent
    });
    dispatch({type:SUCCESS_SET_MENU});
    return menucontent;
  }catch (error) {
   
    console.error(error);
  }
  // console.log(menusId);
  // dispatch({
  //   type:SET_MENU,
  //   payload:menusId
  // });
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
export const registerToFirebase = async (dispatch, userInfo) => {
  dispatch({ type: BEGIN_REGISTER_REQUEST });
  try {
    const user = await registerWithEmailPassword(userInfo.email, userInfo.password, userInfo.name);
    console.log(user)
    dispatch({
      type: SUCCESS_REGISTER_REQUEST,
      payload: user.providerData[0],
    })
    return user;
  } catch (e) {
    dispatch({
      type: FAIL_REGISTER_REQUEST,
      payload: e.message
    })
    console.log(e)
    return null;
  }
}
export const updateUserInfo = async (dispatch, userInfo) => {
  dispatch({ type: BEGIN_UPDATE_USERINFO });
  try {
    const user = await updateUserInfoApi(
      userInfo.email,
      userInfo.password,
      userInfo.name
    );
    dispatch({
      type: SUCCESS_UPDATE_USERINFO,
      payload: user.providerData[0],
    });
  } catch (e) {
    dispatch({
      type: FAIL_UPDATE_USERINFO,
      payload: e.message,
    });
    console.log(e);
  }
};
export const logoutFromFirebase = async (dispatch) => {
  signOut();
  dispatch({ type: LOGOUT_REQUEST });
}

/*Comment*/
export const addComment = async (dispatch,user) => {
  dispatch({type:BEGIN_ADD_COMMENT});
    const Content={
      useremail:user.useremail,
      username:user.username,
      brand:user.brand,
      item:user.item,
      content:user.content,
      rating:user.rating,
    };
    const userInfo=await PublishComment(Content);
    console.log(userInfo);
    dispatch({ 
      type:ADD_COMMENT,
      payload: userInfo
    })
    dispatch({type:SUCCESS_ADD_COMMENT});
}

export const getCommentAct = async (dispatch) => {
  dispatch({type:BEGIN_COMMENT});
  const content=await getComment();
  dispatch({
    type:GET_COMMENT,
    payload: content
  })
  dispatch({type:SUCCESS_COMMENT});
}
/*Favorite*/
export const addFavoriteAct = async (dispatch,resource) => {
  dispatch({type:BEGIN_ADD_FAVORITE});
  const Content={
    useremail:resource.useremail,
    username:resource.username,
    brand:resource.brand,
    item:resource.item,
    image:resource.image,
    price:resource.price,
    rate:resource.grade,
  };
  const userInfo=await addFavorite(Content);
  console.log(userInfo);
  dispatch({ 
    type:ADD_FAVORITE,
    payload: userInfo
  })
  dispatch({type:SUCCESS_ADD_FAVORITE});
}
export const getFavoritetAct = async (dispatch) => {
  const content=await getFavorite();
  dispatch({
    type:GET_FAVORITE,
    payload: content
  })
}

export const removeFavoriteAct =async (dispatch,resource) => {
    const removeres={
      item:resource.item,
      id:resource.id
    };
    const newfavorite=await removeFavorite(removeres);
    dispatch({
      type:REMOVE_FAVORITE,
      payload:newfavorite
    })
}

export const getSingleFavoriteAct = async (dispatch,item)=>{
  const singleitem=await getSingleFavorite(item);
  dispatch({
    type:GET_SINGLE_FAVORITE,
    payload:singleitem
  })
}