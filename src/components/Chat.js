// import React, { useState, useEffect, useRef } from "react";
// import "./Chat.css";
// import { useParams } from "react-router-dom";
// import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
// import db from "../firebase";
// import Message from "./Message";
// import ChatInput from "./ChatInput";


// function Chat() {
//   const { roomId } = useParams();
//   const [roomDetails, setRoomDetails] = useState(null);
//   const [roomMessages, setRoomMessages] = useState([]);
//   const messagesEndRef = useRef(null); // create a ref for the container element that holds the messages

//   useEffect(() => {
//     if (roomId) {
//       db.collection("rooms")
//         .doc(roomId)
//         .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
//     }
//     db.collection("rooms")
//       .doc(roomId)
//       .collection("messages")
//       .orderBy("timestamp", "asc")  
//       .onSnapshot((snapshot) => {
//         setRoomMessages(snapshot.docs.map((doc) => doc.data()));
//       });
//   }, [roomId]);

//   useEffect(() => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [roomMessages]);

//   return (
//     <div className="chat">
//       {/* <Feed/> */}
//       <div className="chat_header">
//         <div className="chat_headerLeft">
//           <h4 className="chat_channelName">
//             <strong>#{roomDetails?.name}</strong>
//             <StarBorderOutlined />
//           </h4>
//         </div>
//         <div className="chat_headerRight">
//           <p>
//             <InfoOutlined /> Details
//           </p>
//         </div>
//       </div>

//       <div className="chat__messages">
//         {roomMessages.map(({message, timestamp, user, userImage}) =>(
//           <Message
//             message={message}
//             timestamp={timestamp}
//             user={user}
//             userImage={userImage}
//           />
//         ))}
//         <div ref={messagesEndRef} /> {/* add a div with the ref to the bottom of the container */}
//       </div>
//       <ChatInput channelName={roomDetails?.name} channelId={roomId}/>
//     </div>
//   );
// }

// export default Chat;


// new changes from here


import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import db from "../firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";
import firebase from "firebase/compat/app";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  const messagesEndRef = useRef(null); // create a ref for the container element that holds the messages
  const [emailID, setemailID] = useState("");
  const [sidebarrightOpen, setSidebarrightOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  function handleAddUserClick() {
    setSidebarrightOpen(!sidebarrightOpen);
    setShowSuccessMessage(true);
  }

  function handleAddButtonClick() {
    addUserIdtoRooms();
    setSidebarrightOpen(false);
  }


  // new line
  const addUserIdtoRooms = () => {
    db.collection("users")
      .where("email", "==", emailID)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id);
          db.collection("rooms")
            .doc(roomId)
            .update({
              members: firebase.firestore.FieldValue.arrayUnion(doc.id),
            });
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setRoomMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, [roomId]);

  useEffect(() => {
    const messageList = messagesEndRef.current;
    messageList.scrollTop = messageList.scrollHeight;
  }, [roomMessages]);

  return (
    <div className="chat">
      <div className="chat_header">
        <div className="chat_headerLeft">
          <h4 className="chat_channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlined />
          </h4>
        </div>
        <div className="chat_headerRight" onClick={handleAddUserClick}>
  <div className="headerRightContainer">
    <PersonAddAltIcon/>
    <p className="ml-2">Add New User</p>
  </div>
</div>
        
      </div>
      

      <div className={`sidebarright ${sidebarrightOpen ? 'active' : ''}`}
      >
      <input
        id="input"
        type="text"
        placeholder="Enter email"
        onChange={(e) => {
          setemailID(e.target.value);}}
          style={{ width: '1000px' }}
      />
      <button className="nice" onClick={handleAddButtonClick}>Add</button>  
</div>


      <div className="chat__messages" ref={messagesEndRef}>
        {roomMessages.map(({ message, timestamp, user, userImage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>
      {/* <input
        id="input"
        type="text"
        onChange={(e) => {
          setemailID(e.target.value);}}
      /> */}
      {/* <button onClick={addUserIdtoRooms}>click here</button>     */}
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;



