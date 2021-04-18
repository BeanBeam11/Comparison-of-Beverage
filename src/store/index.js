import { createContext } from "react";
import Cookie from "js-cookie";
import useReducerWithThunk from "use-reducer-thunk";
import menus from "../json/kebuke_1.json";
import {
  SET_MENU,
  ADD_TO_COMPARISON,
  REMOVE_COMPARISON_ITEM,
  REMOVE_ALL,
  ADD_TO_COMMENT
} from "../utils/constants";

export const StoreContext = createContext();
let compareItems = Cookie.getJSON("compareItems");
if(!compareItems) compareItems=[];
let count=0;
let commentList = Cookie.getJSON("commentList");
if(!commentList) commentList=[];
// let commentList=[];
// let compareItems;
const initialState = {
  menuList:{
    menus,
  },
  compareItems,
  count,
  commentList:{
    users: [],
    shop: [],
    product:[],
    description: [],
  }

  

};

function reducer(state, action) {
  switch (action.type) {
    case SET_MENU:
        return { 
          ...state,
          menuList:action.payload,
          
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
        return { ...state, compareItems,count };
      }
      
      compareItems = [...state.compareItems, item];
      count+=1;
      return { ...state, compareItems,count };
    case REMOVE_COMPARISON_ITEM:
      if(count>0){
        count--;
      }
      compareItems= state.compareItems.filter((x) => x.id !==action.payload);
      return { ...state, compareItems,count};
    case REMOVE_ALL:
      
      compareItems= state.compareItems.map((x) => x.id !==action.payload);
      count=0;
      return { ...state,compareItems,count};
    case ADD_TO_COMMENT:
      const content=action.payload;
      
    
      
      
      return { ...state,commentList};
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
