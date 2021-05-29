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

/* PWA */
const store = firebase.firestore();
/* promise: */
// store.enablePersistence()
// .catch(function(err) {
//     if (err.code == 'failed-precondition') {
//         // Multiple tabs open, persistence can only be enabled
//         // in one tab at a a time.
//         // ...
//         console.log(err.code);
//     } else if (err.code == 'unimplemented') {
//         // The current browser does not support all of the
//         // features required to enable persistence
//         // ...
//         console.log(err.code);
//     }
// });
/* async await: */
const enableFireStoreDataPersistance = async () =>{
  try {
    await store.enablePersistence();
  } catch (err) {
    if (err.code == 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        // ...
        console.log(err.code);
    } else if (err.code == 'unimplemented') {
        // The current browser does not support all of the
        // features required to enable persistence
        // ...
        console.log(err.code);
    }
  }
}
enableFireStoreDataPersistance();

/*Lisen edition */
const beverage = firebase.firestore().collection("beverage");
const beverageJson=beverage.doc("json");

export const getFireJSON= async (menuId)=>{
  let jsonMenu=[];
  const querySnapshot=await beverageJson.collection(menuId).get();
    querySnapshot.forEach((doc) => {
      jsonMenu.push(doc.data());
    });


  return  jsonMenu;
}
export const initialMenu= async ()=>{
  let jsoninitMenu=[];
  const querySnapshotinit=await beverageJson.collection("kebuke").get();
 
    querySnapshotinit.forEach((doc) => {
      jsoninitMenu.push(doc.data());
   
  });
  
  return  jsoninitMenu;
}

export const signInWithEmailPassword = async (email, password) => {
  return await auth.signInWithEmailAndPassword(email, password);
}
export const signOut = () => {
  auth.signOut();
}
export const checkLoginApi = () => {
  const user = auth.currentUser;
  console.log(user);
  if(user==null){
    return(false);
  }
  else{
    return(true);
  }
  // return user.uid?  true : false;
}
export const updateUserInfoApi = async (email, password, displayName) => {
  const user = auth.currentUser;
  if(displayName)
    await user.updateProfile({ displayName });
  if(email)
    await user.updateEmail(String(email));
  if(password)
    await user.updatePassword(password);
  return user;
}
export const registerWithEmailPassword = async (email, password, displayName) => {
  await auth.createUserWithEmailAndPassword(email, password);
  const user = auth.currentUser;
  await user.updateProfile({ displayName })
  return user;
}