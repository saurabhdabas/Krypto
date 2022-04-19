import {React, useState, useEffect} from 'react';
import io from 'socket.io-client';
import Button from '@mui/material/Button';


import Chat from './Chat';

const socket = io.connect("http://localhost:8081");

const ChatRoom = (props) => {
  const [user, setUser] = useState({});

  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    
    setUser(JSON.parse(localStorage.getItem('username')));
    
  }, []);
  console.log("user:",user);
  const joinRoom = () => {
    if (user.name !== "" && props.roomId !== "") {
      socket.emit("join_room", props.roomId);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
    {!showChat ? (
      <div className="joinChatContainer">
        <h3>Join A Chat</h3>
        {/* <input
          type="text"
          placeholder="John..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        /> */}
        <Button onClick={joinRoom} variant="contained">
        Join A Room
        </Button>
      </div>
    ) : (
      <Chat socket={socket} user={user.name} img={user.img} room={props.roomId} />
    )}
  </div>
);
}

export default ChatRoom;