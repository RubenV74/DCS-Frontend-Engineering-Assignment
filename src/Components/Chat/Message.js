import React from 'react';
import Avatar from "@mui/material/Avatar";
import {useAuth} from "../../Auth/authProvider";


 const Message = ({senderName, text}) => {
     const {user} = useAuth();

     return (
            <div className={`chat-bubble ${senderName === user.username ? "right" : ""}`}>
                <Avatar/>
                <div className="chat-bubble__right">
                    <p className="user-name">{senderName}</p>
                    <p className="user-message">{text}</p>
                </div>
            </div>
        )

 }

export default Message;