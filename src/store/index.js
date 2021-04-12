import { createContext } from "react";
import useReducerWithThunk from "use-reducer-thunk";
import menus from "../json/kebuke.json";
import {
  SET_MENU,
  ADD_TO_COMPARISON,
  REMOVE_COMPARISON_ITEM,
  REMOVE_ALL
} from "../utils/constants";

export const StoreContext = createContext();
let compareItems = localStorage.getItem("compareItems")
  ? JSON.parse(localStorage.getItem("compareItems"))
  :[];
let count=0;
// let compareItems;
const initialState = {
  menuList:{
    menus,
  },
  compareItems,
  count,
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
      // console.log(compareItems)
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
