import firebase from 'firebase/compat/app';
import "firebase/auth";




const app = firebase.initializeApp({
    apiKey: "AIzaSyAaFnBruq5uvygD217wHFvDlBoa_USm8Os",
    authDomain: "myfielapp.firebaseapp.com",
    projectId: "myfielapp",
    storageBucket: "myfielapp.appspot.com",
    messagingSenderId: "629867609168",
    appId: "1:629867609168:web:678f2cff1dad1121ee2555"
  });
  
  // Initialize Firebase
  //export const auth = app.auth();
  
  export default app;

  

  