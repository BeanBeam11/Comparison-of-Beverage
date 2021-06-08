import { createContext } from "react";
import Cookie from "js-cookie";
import useReducerWithThunk from "use-reducer-thunk";
// import menus from "../json/kebuke_1.json";
import {initialMenu,getFireJSON} from "../api";
import {
  SET_MENU,
  ADD_TO_COMPARISON,
  REMOVE_COMPARISON_ITEM,
  REMOVE_ALL,
  ADD_COMMENT,
  BEGIN_LOGIN_REQUEST,
  SUCCESS_LOGIN_REQUEST,
  FAIL_LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REMEMBER_LOGIN,
  BEGIN_REGISTER_REQUEST,
  SUCCESS_REGISTER_REQUEST,
  FAIL_REGISTER_REQUEST,
  GET_COMMENT
} from "../utils/constants";

export const StoreContext = createContext();
let compareItems = Cookie.getJSON("compareItems");
if (!compareItems) compareItems = [];
let count = 0;
let commentList = Cookie.getJSON("commentList");
if (!commentList) commentList = [];


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
const initialState = {

  menus:[],
  comment:[],
  compareItems,
  count,
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
        count++;
        compareItems = state.compareItems.map((x) =>
          x.id === beverge.id ? item : x
        );
        // console.log(count);
        return { ...state, compareItems, count };
      }
      compareItems = [...state.compareItems, item];
      count += 1;
      return { ...state, compareItems, count };

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
