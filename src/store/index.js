import { createContext } from "react";
import useReducerWithThunk from "use-reducer-thunk";
import menus from "../json/kebuke.json";
import {
  SET_MENU,
  ADD_TO_COMPARISON,
  REMOVE_COMPARISON_ITEM
} from "../utils/constants";

export const StoreContext = createContext();
let compareItems = localStorage.getItem("compareItems")
  ? JSON.parse(localStorage.getItem("compareItems"))
  :[];
// let compareItems;
const initialState = {
  menuList:{
    menus,
  },
  compareItems,
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
      const beverge = state.compareItems.find((x) => x.id === item.id);
      if (beverge) {
        compareItems = state.compareItems.map((x) =>
          x.id === beverge.id ? item : x
        );
        return { ...state, compareItems };
      }
      compareItems = [...state.compareItems, item];
      return { ...state, compareItems };
    case REMOVE_COMPARISON_ITEM:
      compareItems= state.compareItems.filter((x) => x.id !==action.payload);
      return { ...state, compareItems};
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
