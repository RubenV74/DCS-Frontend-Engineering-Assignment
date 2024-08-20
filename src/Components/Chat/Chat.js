import React, {useState, useEffect} from 'react';
import MessagesPanel from './MessagesPanel';
import socketClient from "socket.io-client";
import {getAllMessages} from "../../Requests/messageRequests";


const Chat =()=> {

    const [messages, setMessages] = useState([]);
    const [socket, setSocket] = useState(null);

    const configureSocket = () => {
        const  s = socketClient("http://127.0.0.1:3003");
        s.on('connection', () => {
        });
        s.on('message', message => {
            setMessages(prevState => [...prevState, message])
            });
        setSocket(s);
    }

    useEffect(() => {
        getAllMessages().then( msgs =>{
            setMessages(msgs)
        });
        configureSocket()
    }, []);

   const  handleSendMessage = (text) => {
        socket.emit('send-message', {...text, time: Date.now() });
    }


        return (
            <div className='chat-app'>
                <MessagesPanel onSendMessage={handleSendMessage} messages={messages} />
            </div>
        );

}

export default Chat;