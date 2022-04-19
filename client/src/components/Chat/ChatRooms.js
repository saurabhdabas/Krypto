import { React, useState} from 'react';
import Button from '@mui/material/Button';
import ChatRoom from './ChatRoom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
const ChatRooms = () => {
  const [room, setRoom] = useState("");
  const button = () => {
    console.log('this is the value of room', room)
    if (room === "") {
      return (
        <div>
          <Button variant="contained" onClick={()=> {setRoom('trending')}}># Trending Crypto</Button>
          <Button variant="contained" onClick={()=> {setRoom('investment')}}># Investments</Button>
          <Button variant="contained"onClick={()=> {setRoom('general')}}># General</Button>
          <Button variant="contained" onClick={()=> {setRoom('events')}}># Events</Button>
        </div>
      );
    } else {
      return (
        <div>
          <Button variant="contained"onClick={()=> {setRoom('')}}>Leave Room</Button>
          <ChatRoom roomId={room}/>
        </div>
      );
    }
  }

  return (
    <div>
      <Header/>
      <Navigation/>
      {button()}
      
    </div>
  )
}

export default ChatRooms;
