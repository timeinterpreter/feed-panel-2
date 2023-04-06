//Tailwind Code
// import React, { useEffect, useState } from 'react'
// import {collection, onSnapshot, orderBy, query } from "firebase/firestore";  
// import db from '../firebase';
// import Post from './Post';
// // import {useColllection} from "react-firebase-hooks/firestore"
// function Posts() {
//     const [posts, setPosts] = useState([]);
    
//     useEffect(() => 
//          onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
//             setPosts(snapshot.docs);
//         }
//         ), 
//     [db]
//     )
//     console.log(posts)
//     return (
//     <div>
//         {posts.map((post) => (
//           <Post key = {post.id}
//             id = {post.id}
//             username = {post.data().username}
//             userImg = {post.data().userImage}
//             img = {post.data().image}
//             caption = {post.data().message}
//           />
//         ))}
//     </div>
//   )
// }

// export default Posts

// Removing  Taiwlind

import React, { useEffect, useState } from 'react'
import {collection, onSnapshot, orderBy, query } from "firebase/firestore";  
import db from '../firebase';
import Post from './Post';
// import {useColllection} from "react-firebase-hooks/firestore"
function Posts() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => 
         onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
            setPosts(snapshot.docs);
        }
        ), 
    [db]
    )
    console.log(posts)
    return (
    <div>
        {posts.map((post) => (
          <Post key = {post.id}
            id = {post.id}
            username = {post.data().username}
            userImg = {post.data().userImage}
            img = {post.data().image}
            caption = {post.data().message}
          />
        ))}
    </div>
  )
}

export default Posts