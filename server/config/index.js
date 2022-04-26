const { initializeApp } = require("firebase/app");

const { getFirestore,where, collection, getDocs, getDoc , doc, query, setDoc, Timestamp ,addDoc} = require("firebase/firestore/lite")

const firebaseConfig = {
    apiKey: "AIzaSyD6-ruaaS51ao2F6iKwLwEprQCG5OssARQ",
    authDomain: "magiccoffee-e0a37.firebaseapp.com",
    projectId: "magiccoffee-e0a37",
    storageBucket: "magiccoffee-e0a37.appspot.com",
    messagingSenderId: "632108227199",
    appId: "1:632108227199:web:6cb7f65e1b55a1b7e4fd4a",
    measurementId: "G-JM3LWDXHBK"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  // const storage = getStorage(app);

  module.exports = {db, collection, getDocs,getDoc,doc , where, query, setDoc, Timestamp ,addDoc};