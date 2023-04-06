import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import FeedIcon from '@mui/icons-material/Feed';
import AddIcon from "@mui/icons-material/Add";
import db from "../firebase";
import {auth, } from "../firebase"
import {useStateValue} from "../StateProvider";
import { useNavigate } from "react-router";
import { actionTypes } from '../reducer'
import { Link } from "react-router-dom";
import Feed from "./Feed";



function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{user}, dispatch] = useStateValue(true);
  const navigate = useNavigate();
  

  

  useEffect(() => {
    //Run this code once when the sidebar component loads
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);


  const signOut = () => {
    auth.signOut()
      .then(() => {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
        navigate("/Sign Out");

      }) 
      .catch((error) => {
        console.log(error.message);
      });
      user(false);
      
  };

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar__info">
          <h2>CAMPUS CONNECT</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>
      {/* <SidebarOption Icon={InsertCommentIcon} title="Threads" /> */}
      {/* <SidebarOption Icon={InboxIcon} title="Mentions & reactions" /> */}
      {/* <SidebarOption Icon={DraftsIcon} title="Saved items" /> */}
      {/* <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="showless" /> */}
      
      {/* <SidebarOption Icon={ExpandMoreIcon} title="channels" /> */}
      
      <SidebarOption Icon={AddIcon} addChannelOption title="Add channel" />
    
      {/* Connnect to database and list all the channels */}
      {/* <SidebarOption ... /> */}

      {channels.map((channel) => (
        <SidebarOption title={channel.name} id={channel.id}  />
        
      ))}
      <hr></hr>
      <Link to="/Feed" style={{color : "white" , textDecoration: 'none'}}>
      <SidebarOption Icon={FeedIcon} title="Feed" onClick={"./Feed"}/>
      </Link>
      <hr></hr>
      {user && (
          <Link to="/Sign Out" onClick={signOut} style={{color : "white" , textDecoration: 'none'}}>
         <SidebarOption 
    Icon={ExitToAppIcon}
        
    title="Sign out"
    onClick={signOut}
  />
        </Link>
  
 
)}
    </div>
  );
}

export default Sidebar;