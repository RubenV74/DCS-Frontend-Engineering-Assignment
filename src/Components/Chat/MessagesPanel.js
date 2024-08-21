import React, {useRef, useState} from 'react';
import Message from './Message';
import { useAuth } from "../../Auth/authProvider";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
 const MessagesPanel =({onSendMessage, messages}) => {
    const[ input, setInput] =useState('')

     const {user} = useAuth();
    const scroll = useRef();
     const send = () => {
        if (input && input !== '') {
            onSendMessage({content: input ,senderId: user._id});
           setInput('');
            scroll.current.scrollIntoView({ behavior: "smooth" });
        }
    }
    const handleInput = e => {
         setInput(e.target.value );
    }
     console.log(messages)
     let list = <div>There is no messages to show</div>;
     if (messages.length > 0) {
         list = messages.map(m => {
             console.log(m)
             return <Message key={m._id} id={m._id} senderName={m.senderId.username} text={m.content}/>
         });
     }
        return (
            <div>
                <Box
                sx={{
                    overflowY:'auto',
                    position:'fixed',
                    bottom:42,
                    right:5,
                    width: 1230
                }}>
                    {list}
                </Box>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: 1160},
                        position:"fixed",
                        bottom:0,
                        right: 0,
                        display: 'flex',
                        backgroundColor: 'DeepSkyBlue'
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <span ref={scroll}></span>
                    <TextField
                        id="standard-multiline-flexible"
                        value={input}
                        multiline
                        maxRows={4}
                        variant="standard"
                        onChange={handleInput}
                    />
                    <Button onClick={send}
                    sx={{backgroundColor: 'DarkSlateGrey',
                    color: 'white',
                    borderRadius : 2}}><b>Send</b></Button>
                </Box>
            </div>);


}

export default MessagesPanel;