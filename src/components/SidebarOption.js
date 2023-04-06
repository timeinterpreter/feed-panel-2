import React, {useState} from 'react';
import { useNavigate } from 'react-router';
import './SidebarOption.css';
import AddChannel from './AddChannel';

function SidebarOption({Icon , title, id, addChannelOption}) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    if(!open){
      setOpen(true);
    }
  }

  const handleClose = () => {
    setOpen(false);
  }

  const selectChannel = () => {
    if (id) {
      navigate(`/room/${id}`);
     } //else {
    //   navigate(title);
    // }
  };

  const addChannel = () => {
     handleClickOpen();
  };


  return (
    <div className='sidebarOption' onClick={addChannelOption ? addChannel : selectChannel}>
      <AddChannel handleClose={handleClose} open={open}/>
        {Icon && <Icon className="sidebarOption__icon"/> }
        {Icon ?(
            <h3>{title}</h3>
        ) : (
            <h3 className='sidebarOption__channel'>
            <span className="sidebarOption_hash"># </span>
                 {title}
            </h3>
        )}
    </div>
  )
}

export default SidebarOption

