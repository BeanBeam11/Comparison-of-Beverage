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
//const db = firebase.database();
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

/*Lisen takefile */
const beverage = firebase.firestore().collection("beverage");
const beverageJson=beverage.doc("json");
const allComments=firebase.firestore().collection("allcomment");
const favorite = firebase.firestore().collection("favorite");
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

/*Lisen's edit comment*/ 
export const PublishComment =async (userComment) => {
  const commentRef = await allComments.doc();
  const id = commentRef.id;
  const date=new Date().getTime();
  const time= new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(date);
  await commentRef.set({ 
    ...userComment,
    id,
    date,
    time
  });
  return(userComment,id,date);
}

export const getComment=async ()=>{
  let allcomment =[];
  const comment =await allComments.get();
  comment.forEach((doc)=>{
    allcomment.push(doc.data());
  })
  const length = allcomment.length;
  for (let i = 0; i < length-1; i++) {
      for (let j = 0; j < length-1; j++) {
          if(allcomment[j].date < allcomment[j+1].date) {
              let temp = allcomment[j]
              allcomment[j] = allcomment[j+1];
              allcomment[j+1] = temp;
          }
      }
  }
  
  return allcomment;
}

export const addFavorite=async (userFavorite)=>{
  const favoriteRef = await favorite.doc();
  const favorites =await favorite.get();
  const id = favoriteRef.id;
  const date=new Date().getTime();
  let have=false;
  const same=(ref)=>{
    let bhave=false;
    favorites.forEach((doc)=>{
      if(doc.data().item==userFavorite.item)
      {
        bhave=true;
      }
    })
    return bhave;
  }
  have=same(userFavorite);
  if(have==false){
    await favoriteRef.set({ 
      ...userFavorite,
      id,
      date
    });
  }
  have=false;
  return(userFavorite);

}

export const getFavorite=async ()=>{
  let allfavorite =[];
  const favorites =await favorite.get();

  favorites.forEach((doc)=>{
    if(doc.data().useremail==auth.currentUser.email)
      allfavorite.push(doc.data());
  })
  const length = allfavorite.length;
  for (let i = 0; i < length-1; i++) {
      for (let j = 0; j < length-1; j++) {
          if(allfavorite[j].date < allfavorite[j+1].date) {
              let temp =allfavorite[j]
              allfavorite[j] = allfavorite[j+1];
              allfavorite[j+1] = temp;
          }
      }
  }
  return allfavorite;
}
export const getSingleFavorite=async (item)=>{
  let singlefavorite;
  const favorites =await favorite.get();
  favorites.forEach((doc)=>{
    if(item==doc.data().item)
    singlefavorite=doc.data();
  })
  return singlefavorite;
}

export const removeFavorite=async (resource)=>{
  let allfavorite =[];
  const favorites =await favorite.get();
  const favoriteRef = await favorite.doc();
  favorites.forEach((doc)=>{
    if(doc.data().item==resource.item){
      //firebase.database().ref("./favorite/"+doc.data().id).remove();
      store.collection("favorite").doc(doc.data().id).delete();
    }
  })
  favorites.forEach((doc)=>{
    if(doc.data().useremail==auth.currentUser.email)
      allfavorite.push(doc.data());
  })
  return allfavorite
}