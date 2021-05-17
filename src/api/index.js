import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import kebuke from "../json/kebuke_1.json";
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

const auth = firebase.auth();

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

/*Lisen edition */
const beverage = firebase.firestore().collection("beverage");
const beverageJson=beverage.doc("json");

export const getFireJSON=(menuId)=>{
  let jsonMenu=[];
  beverageJson.collection(menuId).get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      jsonMenu.push(doc.data());
    });
  });
  console.log(jsonMenu);
  return jsonMenu;
}
export const initialMenu=()=>{
  let jsoninitMenu=[];
  beverageJson.collection("kebuke").get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      jsoninitMenu.push(doc.data());
    });
  });
  console.log(jsoninitMenu);
  return jsoninitMenu;
}

export const signInWithEmailPassword = async (email, password) => {
  return await auth.signInWithEmailAndPassword(email, password);
}
export const checkLoginApi = () => {
  const user = auth.currentUser;
  if(user.uid==true){
    alert("sucess");
  }
  return user.uid?  true : false;
}
export const registerWithEmailPassword = async (email, password, displayName) => {
  await auth.createUserWithEmailAndPassword(email, password);
  const user = auth.currentUser;
  await user.updateProfile({ displayName })
  return user;
}
