import React,{useEffect} from "react"
import "./Login.css"
import {Button} from "@material-ui/core"
import db, {auth, provider} from "../firebase"
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'



function Login() {

    
    
const [, dispatch] = useStateValue();

const addNewUser = (user) => {
  if(user) {
    console.log(user);
    db.collection("users").doc(user.uid).set({
      name: user.displayName,
      email: user.email,
      uid: user.uid,
      photoURL: user.photoURL
  }, {merge: true});
  }
}

const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithRedirect(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    auth
      .getRedirectResult()
      .then((result) => {
        if (result.user) {
          dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
          });
        }
        addNewUser(result.user); 
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [dispatch]);



  return (
    <div>
      
        <div className='login'>
          <div className="login_container">
            <img className="object-cover w-full" src="https://i.pinimg.com/474x/66/58/99/66589973c33f46c472d84a04c66009c5.jpg" alt="" />
            <h1>Sign in To Campus Connect</h1>
            <p>campusconnect.com</p>
            <Button onClick={signIn}>Sign In with Google</Button>
          </div>
        </div>
     
       
     
    </div>
  )
}

export default Login



// new code from here 


// import React, { useEffect } from "react";
// import "./Login.css";
// import { Button } from "@material-ui/core";
// import db, { auth, provider } from "../firebase";
// import { useStateValue } from "../StateProvider";
// import { actionTypes } from "../reducer";

// function Login() {
//   const [, dispatch] = useStateValue();

//   const addNewUser = (user) => {
//     if(user) {
//       console.log(user);
//       db.collection("users").doc(user.uid).set({
//         name: user.displayName,
//         email: user.email,
//         uid: user.uid,
//         photoURL: user.photoURL
//     }, {merge: true});
//     }
//   }

//   const signIn = (e) => {
//     e.preventDefault();
//     auth
//       .signInWithRedirect(provider)
//       .then((result) => {
//         // console.log(result);
//         dispatch({
//           type: actionTypes.SET_USER,
//           user: result.user,
//         });
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//   };

//   useEffect(() => {
//     auth
//       .getRedirectResult()
//       .then((result) => {
//         if (result.user) {
//           dispatch({
//             type: actionTypes.SET_USER,
//             user: result.user,
//             // uid : result.user.uid,
//           });
//         }
//         addNewUser(result.user);    //input user data in the database
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//   }, [dispatch]);

//   return (
//     <div>
//       <div className="login">
//         <div className="login_container">
//           <img
//             src="https://i.pinimg.com/474x/66/58/99/66589973c33f46c472d84a04c66009c5.jpg"
//             alt=""
//           />
//           <h1>Sign in To Campus Connect</h1>
//           <p>campusconnect.com</p>
//           <Button onClick={signIn}>Sign In with Google</Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
