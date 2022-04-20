import { Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';

import WatchList from './components/WatchList';
import SingleCrypto from './components/SingleCrypto/SingleCrypto';

import ChatRooms from './components/Chat/ChatRooms';
import Login from './components/Login';
import NewsList from './components/News/NewsList';

import ProtectedRoutes from './components/Hooks/userAuth';

import CurrencyConverter from './components/CurrencyConverter';

function App() {

  return (
    

      <Routes>

          <Route path="/" element={<Login/>}/> 

          <Route path='/' element={<ProtectedRoutes/>}>
            <Route path="/dashboard" element={<Dashboard/>}/> 
          
          
            <Route path="/watchlist" element={<WatchList/>}/>
          
            <Route path="/news" element={<NewsList/>}/>

          
            <Route path="/crypto/:id" element={<SingleCrypto/>}/>
          
          
            <Route path="/chatrooms" element={<ChatRooms/>}/>

            <Route path="/calculators" element={<CurrencyConverter/>}/>
          </Route>
      
      </Routes>
      
    

  );
}

export default App;
