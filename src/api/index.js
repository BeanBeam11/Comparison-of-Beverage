import kebuke from "../json/kebuke.json";
import fiftylan from "../json/50lan"; 
import milkshop from "../json/milkshop.json";
import macu from "../json/macu.json";
import chingshin from "../json/chingshin.json";

export const getJSON = (url) => {
  switch (url) {
    case "/kebuke":
      return kebuke;
    case "/fiftylan":
      return fiftylan;
    case "/milkshop":
      return milkshop;
    case "/macu":
      return macu;
    case "/chingshin":
      return chingshin;
  }
};
