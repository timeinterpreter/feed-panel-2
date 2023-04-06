import React, {useState} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import db from "../firebase";
import firebase from "firebase/compat/app";
import { useStateValue } from "../StateProvider";


function AddChannel({ handleClose, open }) {
  const [channelName, setchannelName] = useState(null);
  const [{ user }] = useStateValue();

  const addChannelIdtoUser = (channelId) => {
    db.collection("users").doc(user.uid).update({
      channels: firebase.firestore.FieldValue.arrayUnion(channelId) 
    });
  }
  const addUserIdtoRooms = (channelID) => {
    db.collection("rooms").doc(channelID).update({
      members: firebase.firestore.FieldValue.arrayUnion(user.uid) 
    });
  }

  const addChanneldata = () => {
    if (channelName) {
      db.collection("rooms").add({
        name: channelName
      }).then(docRef => {
        addChannelIdtoUser(docRef.id); // added groupId to specific user
        addUserIdtoRooms(docRef.id);
    });
    }
    handleClose();
  };

  
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Channel</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a new channel, please enter a channel name here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="#channel-name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setchannelName(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={!channelName} onClick={addChanneldata}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddChannel;
