import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC0X5JR1KTs3PZ82NEqGaWXn5kmXoGDxZ8",
  authDomain: "campusconnect-36a0f.firebaseapp.com",
  databaseURL: "https://campusconnect-36a0f.firebaseio.com",
  projectId: "campusconnect-36a0f",
  storageBucket: "campusconnect-36a0f.appspot.com",
  messagingSenderId: "247089200988",
  appId: "1:247089200988:web:44f4261ac59316c4b64b99",
  // measurementId: "G-9HJH3Y4DJ5"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);  //-default-rtdb
  const db = firebaseApp.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  export const auth = firebase.auth();
  const storage = getStorage(firebaseApp);

  
  
  const redirectUri = "http://localhost:3000/";

  provider.setCustomParameters({
    login_hint: "user@example.com",
    redirect_uri: redirectUri,
  });
  
  export { storage, provider, redirectUri };



  export default db;


  

