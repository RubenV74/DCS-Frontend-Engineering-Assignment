import React, { useState} from 'react'
import Button from '@mui/material/Button';
import {useAuth} from "../Auth/authProvider"
import userImg from "../images/login.png"

 const Header =()=>{

    const auth = useAuth();

    return(
        <Header>
            <img src={userImg} alt="user"/>
            <span> {auth.user}</span>
            <Button variant="contained" color="error" onClick={auth.logOut}>Logout</Button>
        </Header>
    )
}

export default Header;