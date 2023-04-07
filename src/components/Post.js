// Tailwind Code
// import React, { useEffect, useState } from 'react'
// import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
// import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
// import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
// import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore';
// import db from '../firebase';
// import { useStateValue } from '../StateProvider';
// import { async } from '@firebase/util';
// // import Moment from 'react-moment';
// // import { useSession } from "next-auth/react"
// import { getAuth } from "firebase/auth";

// function Post({id, username, userImg, img, caption}) {
//     const [comment, setComment] = useState("")
//     const [comments, setComments] = useState([]);
//     const [likes, setLikes] = useState([]);
//     const [hasLiked, setHasLiked] = useState(false)
//     // const [{user}] = useStateValue()
//     const auth = getAuth()
//     const user = auth.currentUser;

//     useEffect(() => onSnapshot(query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', 'desc')), 
//         snapshot => setComments(snapshot.docs)), [db, id])

//     const sendComment = async (e) => {
//         e.preventDefault();

//         const commentToSend = comment;
//         setComment('');

//         await addDoc(collection(db, 'posts', id, 'comments'), {
//             comment : commentToSend,
//             username : user.displayName,
//             userImg : user.photoURL,
//             timestamp : serverTimestamp(),
//         })
//     }
//     // console.log(comments);
//     useEffect(() =>
//         setHasLiked(likes.findIndex((like) => like.id === user?.uid) !== -1
//         ),
//      [likes])

//     const likePost = async () => {
//         if (hasLiked) {
//             await deleteDoc(doc(db, 'posts', id, 'likes', user.uid))
//         } else {
//             await setDoc(doc(db, 'posts', id, 'likes', user.uid), {
//                 username : user.displayName,
    
//             })            
//         }

//     }

//     useEffect(() => onSnapshot(collection(db, 'posts', id, 'likes'), 
//     snapshot => setLikes(snapshot.docs)), [db, id])

//   return (
//     <div className='bg-white my-7 border rounded-sm'>
//         {/* <h1>I'm a post</h1> */}
//         {/* Header */}
//         <div className='flex items-center p-5'>
//             <img  src = {userImg} 
//             className='rounded-full h-12 w-12 object-contain border p-1 mr-3' alt=''/>
//             <p className='flex-1 font-bold'>{username}</p>
//             <MoreHorizIcon className='h-5'/> 
//         </div>
//         {/* Img */}
//         <img
//             src={img}
//             className='object-cover w-full'
//         />
//         {/* Buttons */}
//         <div className='flex justify-between px-4 px-4'>
//             <div className='flex space-x-4'>
//                 {
//                     hasLiked ? (
//                         <FavoriteOutlinedIcon onClick={likePost} className='btn text-red-500' />
//                     ) : (
//                         <FavoriteBorderOutlinedIcon onClick={likePost} className='btn'/>
//                     )
//                 }
                
//                 <ChatOutlinedIcon className='btn'/>
//                 <SendOutlinedIcon className='btn'/>
//             </div>
//             <BookmarkBorderOutlinedIcon className='btn'/>
//         </div>
//         {/* Caption */}
//         <div>
//             <p className='p-5 truncate'>
//                 {likes.length > 0 && (
//                     <p className='font-bold mb-1'>{likes.length} likes</p>
//                 )}

//                 <span className='font-bold mr-1'>{username}</span>
//                 {caption}
//             </p>
//         </div>

//         {/* Comments */}
//         {comments.length > 0 && (
//             <div className='ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
//                 {comments.map(comment => (
//                     <div key = {comment.id} className='flex items-center space-x-2 nb-3'>
//                         <img className='h-7 rounded-full' src={comment.data().userImg} alt=""/>
//                         <p className='text-sm flex-1'>
//                             <span className='font-bold'>{comment.data().username}
//                             </span>{"   "}{comment.data().comment}
//                             </p>
//                         {/* <Moment/>  research*/}
//                     </div>
//                 ))}
//             </div>
//         )}

//         {/* Input */}
//         <form className='flex items-center p-4'>
//             <EmojiEmotionsIcon className='h-7'/>
//             <input 
//                 type='text'
//                 value={comment}
//                 onChange = {e => setComment(e.target.value)}
//                 placeholder='Add comment...'
//                 className='border-none flex-1 focus:ring-0 outline-none'
//             />
//             <button 
//                 type='submit' 
//                 disabled={!comment.trim()} 
//                 onClick = {sendComment}
//                 className='font-semibold text-blue-400'
//             >   Post
//                 </button>
//         </form>
//     </div>
//   )
// }

// export default Post

// Removing Tailwind

import React, { useEffect, useState } from 'react'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore';
import db from '../firebase';
import { useStateValue } from '../StateProvider';
import { async } from '@firebase/util';
// import Moment from 'react-moment';
// import { useSession } from "next-auth/react"
import { getAuth } from "firebase/auth";
// import "./Post.css"

function Post({id, username, userImg, img, caption}) {
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);
    const [hasLiked, setHasLiked] = useState(false)
    // const [{user}] = useStateValue()
    const auth = getAuth()
    const user = auth.currentUser;

    useEffect(() => onSnapshot(query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', 'desc')), 
        snapshot => setComments(snapshot.docs)), [db, id])

    const sendComment = async (e) => {
        e.preventDefault();

        const commentToSend = comment;
        setComment('');

        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment : commentToSend,
            username : user.displayName,
            userImg : user.photoURL,
            timestamp : serverTimestamp(),
        })
    }
    // console.log(comments);
    useEffect(() =>
        setHasLiked(likes.findIndex((like) => like.id === user?.uid) !== -1
        ),
     [likes])

    const likePost = async () => {
        if (hasLiked) {
            await deleteDoc(doc(db, 'posts', id, 'likes', user.uid))
        } else {
            await setDoc(doc(db, 'posts', id, 'likes', user.uid), {
                username : user.displayName,
    
            })            
        }

    }

    useEffect(() => onSnapshot(collection(db, 'posts', id, 'likes'), 
    snapshot => setLikes(snapshot.docs)), [db, id])

  return (
    <div className='bg-white my-4 border rounded-sm ml-60'>
        {/* <h1>I'm a post</h1> */}
        {/* Header */}
        <div className='flex items-center p-5'>
            <img  src = {userImg} 
            className='rounded-full h-12 w-12 object-contain border p-1 mr-3' alt=''/>
            <p className='flex-1 font-bold'>{username}</p>
            <MoreHorizIcon className='h-5'/> 
        </div>
        {/* Img */}
        <img
            src={img}
            className='object-cover w-full'
        />
        {/* Buttons */}
        <div className='flex justify-between px-4 px-4'>
            <div className='flex space-x-4'>
                {
                    hasLiked ? (
                        <FavoriteOutlinedIcon onClick={likePost} className='btn text-red-500' />
                    ) : (
                        <FavoriteBorderOutlinedIcon onClick={likePost} className='btn'/>
                    )
                }
                
                {/* <ChatOutlinedIcon className='btn'/>
                <SendOutlinedIcon className='btn'/> */}
            </div>
            {/* <BookmarkBorderOutlinedIcon className='btn'/> */}
        </div>
        {/* Caption */}
        <div>
            <p className='p-5 truncate'>
                {likes.length > 0 && (
                    <p className='font-bold mb-1'>{likes.length} likes</p>
                )}

                <span className='font-bold mr-1'>{username}</span>
                {caption}
            </p>
        </div>

        {/* Comments */}
        {comments.length > 0 && (
            <div className='ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
                {comments.map(comment => (
                    <div key = {comment.id} className='flex items-center space-x-2 nb-3'>
                        <img className='h-7 rounded-full' src={comment.data().userImg} alt=""/>
                        <p className='text-sm flex-1'>
                            <span className='font-bold'>{comment.data().username}
                            </span>{"   "}{comment.data().comment}
                            </p>
                        {/* <Moment/>  research*/}
                    </div>
                ))}
            </div>
        )}

        {/* Input */}
        <form className='flex items-center p-4'>
            <EmojiEmotionsIcon className='h-7'/>
            <input 
                type='text'
                value={comment}
                onChange = {e => setComment(e.target.value)}
                placeholder='Add comment...'
                className='border-none flex-1 focus:ring-0 outline-none'
            />
            <button 
                type='submit' 
                disabled={!comment.trim()} 
                onClick = {sendComment}
                className='font-semibold text-blue-400'
            >   Post
                </button>
        </form>
    </div>
  )
}

export default Post