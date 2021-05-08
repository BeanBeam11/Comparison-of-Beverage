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

/*Login*/
const auth = firebase.auth();
// auth.createUserWithEmailAndPassword(email,password);
// auth.signInWithEmailAndPassword(email,password);
// auth.signout();
// auth.onAuthStateChanged(function(user){
//   if(user){
//     console.log("has logged in")
//   }
//   else{
//     console.log("not logged in")
//   }
// });

export const SignIn = (email,password) => {
  auth.signinWithEmailAndPassword(email,password).catch(function(e){})
    
}

const db=firebase.firestore();
const menubrand=db.collection("beverage");
const menujson=menubrand.doc("json");
let products=menujson.collection("kebuke");

export const getMenuById = async (menuId) => {
  // REFERENCE PRODUCTS COLLECTION
  const doc = await menujson.collection(menuId);
   let jsonProducts = [];
 doc.onSnapshot(querySnapshot => {
  querySnapshot.forEach(docs => {
    // console.log(docs.data());
    jsonProducts.push(docs.data());
  });
});
console.log(jsonProducts);
  return jsonProducts;
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

// INITIALIZE FIREBASE
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

var db = firebase.firestore();

var jsoncol =[]

//  jsoncol.forEach(function(obj) {
//     db.collection("beverage").doc("json").collection("").add({
//         id: obj.id,
//         company: obj.company,
//         name: obj.name,
//         price: obj.price,
//         image: obj.image,
//         grade: obj.grade
//     }).then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function(error) {
//         console.error("Error adding document: ", error);
//     });
// });
