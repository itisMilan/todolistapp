// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const app =firebase.initializeApp({

    
    apiKey: "AIzaSyCPL-Z5s45NJckaqphd5RUGkiFi1_U1mK4",
    
    authDomain: "todolist-ac9c1.firebaseapp.com",
    
    projectId: "todolist-ac9c1",
    
    storageBucket: "todolist-ac9c1.appspot.com",
    
    messagingSenderId: "494162749379",
    
    appId: "1:494162749379:web:09d14ba06c5dfdf052bf76"
    
}
) 
;


// Initialize Firebase

//  const app = initializeApp(firebaseConfig);
export const auth=app.auth();
export default app;