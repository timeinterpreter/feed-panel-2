import React from 'react'
import "./Header.css"
import {Avatar} from "@material-ui/core"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import {useStateValue} from "../StateProvider"

function Header() {

  const[{user}] = useStateValue();
  return (
    <div className="header" >
        <div className="header__left">
            <Avatar className="header_avatar" alt={user?.displayName} src={user?.photoURL} />
            <AccessTimeIcon/>
            </div>
        <div className="header_search">
        <SearchIcon/>
        <input placeholder='Search' />

        </div>
        <div className="header__right">
            <HelpOutlineIcon/>

        </div>

    </div>
  )
}

export default Header
