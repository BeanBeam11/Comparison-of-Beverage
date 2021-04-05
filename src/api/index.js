import products from "../json/products.json";
import textile from "../json/textile.json";
import cookware from "../json/cookware.json";
import furniture from "../json/furniture.json";
import homeAccessories from "../json/home-accessories";
import lighting from "../json/lighting.json";
import tableware from "../json/tableware.json";
import kebuke from "../json/kebuke.json";
import fiftylan from "../json/50lan"; 
export const getJSON = (url) => {
  switch (url) {
    case "/kebuke":
      return kebuke;
    case "/fiftylan":
      return fiftylan;
  }
};
