import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import kebuke from "../json/kebuke_1.json";
import fiftylan from "../json/50lan"; 
import milkshop from "../json/milkshop.json";
import macu from "../json/macu.json";
import chingshin from "../json/chingshin.json";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};
firebase.initializeApp(firebaseConfig);

const productsCollectionRef = firebase.firestore().collection("beverage");
const productsDocRef = productsCollectionRef.doc("json");
const allProductsCollectionRef = productsDocRef.collection("allProducts");

export const getProductById = async (productId) => {
  // REFERENCE PRODUCTS COLLECTION
  const doc = await productsDocRef.collection(productId).get();
  console.log(doc);
  return doc.data()
}

// export const getProducts = async (url) => {
//   const collection = jsonInfo.find(element => element.url === url);
//   const collectionName = collection.name || "allProducts";
//   console.log(collectionName)
//   let jsonProducts = [];

//   // QUERY PRODUCTS
//   let querySnapshot;
//   if (collectionName === "allProducts")
//     querySnapshot = await allProductsCollectionRef.get();
//   else
//     querySnapshot = await allProductsCollectionRef.where("category", "==", collectionName).get();
//   querySnapshot.forEach((doc) => {
//     jsonProducts.push(doc.data());
//   });
//   return jsonProducts;
// }

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
