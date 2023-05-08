import { createContext, useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set,push, update,get,child} from "firebase/database";

import { getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    GoogleAuthProvider,
    signInWithRedirect, 
} from "firebase/auth";

// import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAk0pRlxHeKNCWw8_7PH3pJQv64n7_kE9I",
    authDomain: "treasure-hunt-elitmus.firebaseapp.com",
    projectId: "treasure-hunt-elitmus",
    storageBucket: "treasure-hunt-elitmus.appspot.com",
    messagingSenderId: "1036579027692",
    appId: "1:1036579027692:web:5265ad9a63b21485db03c9",
    measurementId: "G-Y07VSHEV90",
    databaseURL : "https://treasure-hunt-elitmus-default-rtdb.asia-southeast1.firebasedatabase.app/"
  
};

const firebaseapp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseapp);
const database = getDatabase(firebaseapp);
const googleProvider = new GoogleAuthProvider();

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }; 
    const putData = (key,data) => {
        return update(ref(database, key),data);
    };


    const fetchData = async (key) => {
        const snapshot = await get(child(ref(database), key));
        // setpodData(snapshot.val());
        console.log("data is fetched",snapshot.val());
        return (snapshot.val());
      };
      
      

    const signinUser = (email2, password2) => {
        return signInWithEmailAndPassword(auth, email2, password2)
    };
    const signinwithGoogle = () =>{
        return signInWithRedirect(auth, googleProvider);
    }

    return (
        <FirebaseContext.Provider value ={{createUser, putData, signinUser,signinwithGoogle,fetchData}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}
