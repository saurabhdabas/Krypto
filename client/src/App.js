import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';

import WatchList from './components/WatchList';
import SingleCrypto from './components/SingleCrypto/SingleCrypto';

import ChatRooms from './components/Chat/ChatRooms';
import Login from './components/Login';


function App() {
  return (
    <>

      <Routes>
        
        <Route path="/" element={<Login/>}/> 
        <Route path="/dashboard" element={<Dashboard/>}/> 
        <Route path="/watchlist" element={<WatchList/>}/>
        <Route path="/crypto/:id" element={<SingleCrypto/>}/>
        <Route path="/chatrooms" element={<ChatRooms/>}/>

      </Routes>
      
    </>

  );
}

export default App;
