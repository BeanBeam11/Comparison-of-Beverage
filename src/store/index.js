import { createContext } from "react";
import Cookie from "js-cookie";
import useReducerWithThunk from "use-reducer-thunk";
// import menus from "../json/kebuke_1.json";
import {initialMenu,getFireJSON} from "../api";
import {
  SET_MENU,
  BEGIN_SET_MENU,
  SUCCESS_SET_MENU,
  ADD_TO_COMPARISON,
  REMOVE_COMPARISON_ITEM,
  REMOVE_ALL,
  ADD_COMMENT,
  SUCCESS_COMMENT,
  BEGIN_COMMENT,
  SUCCESS_ADD_COMMENT,
  BEGIN_ADD_COMMENT,
  BEGIN_LOGIN_REQUEST,
  SUCCESS_LOGIN_REQUEST,
  FAIL_LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REMEMBER_LOGIN,
  BEGIN_REGISTER_REQUEST,
  SUCCESS_REGISTER_REQUEST,
  FAIL_REGISTER_REQUEST,
  GET_COMMENT,
  ADD_FAVORITE,
  GET_FAVORITE,
  REMOVE_FAVORITE,
  GET_SINGLE_FAVORITE,
  SUCCESS_ADD_FAVORITE,
  BEGIN_ADD_FAVORITE
} from "../utils/constants";

export const StoreContext = createContext();
let compareItems = Cookie.getJSON("compareItems");
if (!compareItems) compareItems = [];
let count = 0;
let commentList = Cookie.getJSON("commentList");
if (!commentList) commentList = [];
let favoriteList=[];
let singleinit={image:"",brand:"",item:"",price:"",rate:""}
let singlefavorite=singleinit;
let userInfo;
try {
  userInfo =  JSON.parse(Cookie.getJSON("userInfo"));//getItem("userInfo"));
} catch(e) {
  userInfo = null;
}
let useremail;
try {
  useremail =  JSON.parse(Cookie.getJSON("userInfo")).email;//getItem("userInfo"));
} catch(e) {
  useremail = null;
}
let username;
try {
  username =  JSON.parse(Cookie.getJSON("userInfo")).displayName;//getItem("userInfo"));
} catch(e) {
  username = null;
}
let booladd=false;
const initialState = {

  menus:[],
  comment:[],
  favorite:[],
  compareItems,
  count,
  booladd,
  singlefavorite,
  commentList: {
    useremail,
    username,
    brand:"",
    item:"",
    content:""
  },
  userSignin: {
    loading: false,
    userInfo,
    remember: true,
    error: "",
  },
  userRegister: {
    loading: false,
    userInfo: null,
    error: "",
  },
  favoriteList:{
    useremail,
    username,
    image:"",
    brand:"",
    item:"",
  },
  menurequest:{
    loading: false,
    error:null,
  },
  commentrequest:{
    loading: false,
    error:null,
  },
  addcommentrequest:{
    loading: false,
    error:null,
  },
  addfavoriterequest:{
    loading: false,
    error:null,
  }
};

function reducer(state, action) {

  switch (action.type) {

    case SET_MENU:
      return {
        ...state,
        menus:action.payload
      };
      
    case ADD_TO_COMPARISON:
      const item = action.payload;
      console.log(state.compareItems);
      console.log(compareItems);
      console.log(action.payload);
      const beverge = state.compareItems.find((x) => x.id === item.id);
      if (beverge) {
        compareItems = state.compareItems.map((x) =>
          x.id == beverge.id ? item : x
        );
        // console.log(count);
        booladd=true;
        return { ...state, compareItems, count,booladd};
      }
      booladd=false;
      compareItems = [...state.compareItems, item];
      count += 1;
      return { ...state, compareItems, count,booladd };

    case REMOVE_COMPARISON_ITEM:
      if (count > 0) {
        count--;
      }
      compareItems = state.compareItems.filter((x) => x.id !== action.payload);
      return { ...state, compareItems, count };

    case REMOVE_ALL:
      compareItems = state.compareItems.map((x) => x.id !== action.payload);
      count = 0;
      return { ...state, compareItems, count };

    case ADD_COMMENT:
      const content = action.payload;
      commentList = content;
      return { ...state, commentList };
    case BEGIN_LOGIN_REQUEST:
      return { ...state, userSignin: { ...state.userSignin, loading: true } };
    case SUCCESS_LOGIN_REQUEST:
      return {
        ...state,
        userSignin: {
          ...state.userSignin,
          loading: false,
          userInfo: action.payload,
          error: "",
        },
      };
    case FAIL_LOGIN_REQUEST:
      return {
        ...state,
        userSignin: {
          ...state.userSignin,
          loading: false,
          userInfo: null,
          error: action.payload,
        },
      };
      case REMEMBER_LOGIN:
      return {
        ...state,
        userSignin: {
          ...state.userSignin,
          remember: action.payload,
        },
      };
    case BEGIN_REGISTER_REQUEST:
      return {
        ...state,
        userRegister: { ...state.userRegister, loading: true },
      };
    case SUCCESS_REGISTER_REQUEST:
      return {
        ...state,
        userRegister: {
          ...state.userRegister,
          loading: false,
          userInfo: action.payload,
          error: "",
        },
        userSignin: {
          ...state.userSignin,
          userInfo: action.payload,
        },
      };
    case FAIL_REGISTER_REQUEST:
      return {
        ...state,
        userRegister: {
          ...state.userRegister,
          loading: false,
          userInfo: null,
          error: action.payload,
        },
      };
    case GET_COMMENT:
      return {
        ...state,
        comment: action.payload
      }
    case ADD_FAVORITE:
      const favorite = action.payload;
      favoriteList = favorite;
      return { ...state, favoriteList};
    case GET_FAVORITE:
      return {
        ...state,
       favorite:action.payload
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        favoriteList:action.payload
      }
    case GET_SINGLE_FAVORITE:
      return {
        ...state,
        singlefavorite:action.payload
      }
    case BEGIN_SET_MENU:
      return { ...state,menurequest:{...state.menurequest,loading:true}}
    case SUCCESS_SET_MENU:
      return { ...state,menurequest:{...state.menurequest,loading:false}}
    case BEGIN_COMMENT:
      return { ...state,commentrequest:{...state.commentrequest,loading:true}}
    case SUCCESS_COMMENT:
      return { ...state,commentequest:{...state.commentrequest,loading:false}}
    case BEGIN_ADD_COMMENT:
      return { ...state,addcommentrequest:{...state.addcommentrequest,loading:true}}
    case SUCCESS_ADD_COMMENT:
      return { ...state,addcommentrequest:{...state.addcommentrequest,loading:false}}
    case BEGIN_ADD_FAVORITE:
      return { ...state,addfavoriterequest:{...state.addfavoriterequest,loading:true}}
    case SUCCESS_ADD_FAVORITE:
      return { ...state,addfavoriterequest:{...state.addfavoriteequest,loading:false}}
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
