// Tialwind Code

// import React, { useRef, useState } from 'react'
// import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
// import ImageIcon from '@mui/icons-material/Image';
// import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
// import { storage } from "../firebase";
// import db from '../firebase';
// import { addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore";
// // // import { useSession } from 'next-auth/react';
// import { ref, getDownloadURL, uploadString } from '@firebase/storage';
// import { useStateValue } from '../StateProvider';
// // import { modalState } from "../atoms/modalAtoms";
// // import { useRecoilState } from 'recoil';
// //import firebase from 'firebase/compat';
// //import Image from "next/image";
// import { getAuth } from 'firebase/auth';

// function InputBox() {
//   //const [session] = useSession();
//   const inputRef = useRef(null);
//   const [imageToPost, setImageToPost] = useState(null);
//   const filepickerRef = useRef(null);
//   const auth = getAuth()
//   const user = auth.currentUser;
//   const [message, setMessage] = useState("")


//   const[selectedFile, setSelectedFile] = useState(null)
  

//   const filePickerRef = useRef(null);
//   const captionRef = useRef(null);

//   const uploadPost = async (e) => {
//     e.preventDefault();
//     const caption = message;

//     const docRef = await addDoc(collection(db, 'posts'), {
//         username: user.displayName,
//         userImage: user.photoURL,
//         // caption: captionRef.current.value,
//         // profileImage: session.user.image,
//         message: caption,
//         timestamp: serverTimestamp()
//     })

//     setMessage('')
//     const imageRef = ref(storage, `posts/${docRef.id}/image`);

//     await uploadString(imageRef, selectedFile, "data_url")
//         .then(async (snapshot) => {
//             const downloadURL = await getDownloadURL(imageRef);

//             await updateDoc(doc(db, "posts", docRef.id), {
//                 image: downloadURL
//             })
//         });

//     //setOpen(false);
//     ;
    
//     setSelectedFile(null);
//   }
//   const addImageToPost = (e) => {
//     const reader = new FileReader();
//     if (e.target.files[0]) {
//       reader.readAsDataURL(e.target.files[0]);
//     }

//     reader.onload = (readerEvent) => {
//       setSelectedFile(readerEvent.target.result);
//     };
//   };

//   const removeImage = () => {
//     setSelectedFile(null);
//   };

//   return (
    
//     <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
//       <div className="flex space-x-4 p-4 items-center">
//         <img
//           className="rounded-full h-12"
//           src= {user.photoURL}
//         />
//         <form className="flex flex-1">
//           <input
//             className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
//             type="text"
//             onChange = {e => setMessage(e.target.value)}
//             value = {message}
//             placeholder='What is on your mind??'
//           />
//           <button 
//               type='submit' 
//               disabled={!message.trim()} 
//               onClick = {uploadPost}
//               className='font-semibold text-green-600 pl-2'
//             >
//             Submit
//           </button>
//         </form>

//         {selectedFile && (
//           <div
//             onClick={removeImage}
//             className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
//           >
//             <img className="h-10 object-contain " src={selectedFile} alt="" />
//             <p className="text-xs text-red-500 text-center">Remove</p>
//           </div>
//         )}
//       </div>

//       <div className="flex justify-evenly p-3 border-t">
//         <div className="inputIcon">
//           {/* <VideoCameraBackIcon className="h-7 text-red-500" />
//           <p className="text-xs sm:text-sm xl:text-base">Live Video</p> */}
//         </div>

//         <div
//           onClick={() => filepickerRef.current.click()}
//           className="inputIcon"
//         >
//           <ImageIcon className="h-7 text-green-400" />
//           <p className="text-xs sm:text-sm xl:text-base">Select Image</p>
//           <input
//             onChange={addImageToPost}
//             ref={filepickerRef}
//             type="file"
//             hidden
//           />
//         </div>

//         <div className="inputIcon">
//           {/* <EmojiEmotionsIcon className="h-7 text-yellow-300" />
//           <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default InputBox;

// Removing Tailwind

import React, { useRef, useState } from 'react'
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import ImageIcon from '@mui/icons-material/Image';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { storage } from "../firebase";
import db from '../firebase';
import { addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore";
// // import { useSession } from 'next-auth/react';
import { ref, getDownloadURL, uploadString } from '@firebase/storage';
import { useStateValue } from '../StateProvider';
// import { modalState } from "../atoms/modalAtoms";
// import { useRecoilState } from 'recoil';
//import firebase from 'firebase/compat';
//import Image from "next/image";
import { getAuth } from 'firebase/auth';

function InputBox() {
  //const [session] = useSession();
  const inputRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const filepickerRef = useRef(null);
  const auth = getAuth()
  const user = auth.currentUser;
  const [message, setMessage] = useState("")


  const[selectedFile, setSelectedFile] = useState(null)
  

  const filePickerRef = useRef(null);
  const captionRef = useRef(null);

  const uploadPost = async (e) => {
    e.preventDefault();
    const caption = message;

    const docRef = await addDoc(collection(db, 'posts'), {
        username: user.displayName,
        userImage: user.photoURL,
        // caption: captionRef.current.value,
        // profileImage: session.user.image,
        message: caption,
        timestamp: serverTimestamp()
    })

    setMessage('')
    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    await uploadString(imageRef, selectedFile, "data_url")
        .then(async (snapshot) => {
            const downloadURL = await getDownloadURL(imageRef);

            await updateDoc(doc(db, "posts", docRef.id), {
                image: downloadURL
            })
        });

    //setOpen(false);
    ;
    
    setSelectedFile(null);
  }
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setSelectedFile(null);
  };

  return (
    
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6 mx-4">
      <div className="flex space-x-4 p-4 items-center">
        <img
          className="rounded-full h-12"
          src= {user.photoURL}
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            onChange = {e => setMessage(e.target.value)}
            value = {message}
            placeholder='What is on your mind??'
          />
          <button 
              type='submit' 
              disabled={!message.trim()} 
              onClick = {uploadPost}
              className='font-semibold text-green-600 pl-2'
            >
            Submit
          </button>
        </form>

        {selectedFile && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img className="h-10 object-contain " src={selectedFile} alt="" />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          {/* <VideoCameraBackIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p> */}
        </div>

        <div
          onClick={() => filepickerRef.current.click()}
          className="inputIcon"
        >
          <ImageIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Select Image</p>
          <input
            onChange={addImageToPost}
            ref={filepickerRef}
            type="file"
            hidden
          />
        </div>

        <div className="inputIcon">
          {/* <EmojiEmotionsIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p> */}
        </div>
      </div>
    </div>
  );
}

export default InputBox;