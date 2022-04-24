import { Routes, Route } from 'react-router-dom';
import {useState} from 'react';
import Dashboard from './components/Dashboard/Dashboard';


import SingleCrypto from './components/SingleCrypto/SingleCrypto';
import  {Chat } from './components/chat/Chat';

import Login from './components/Login';
import NewsList from './components/News/NewsList';

import ProtectedRoutes from './components/Hooks/userAuth';

import CurrencyConverter from './components/CurrencyConverter';

function App(){
  const [mode, setMode] = useState("light")
  return (
    <div className={mode}>
      <Routes>

          <Route path="/" element={<Login/>}/> 

          <Route path='/' element={<ProtectedRoutes/>}>
            <Route path="/dashboard" element={<Dashboard mode={mode} setMode={setMode}/>}/>         
                    
            <Route path="/news" element={<NewsList mode={mode} setMode={setMode}/>}/>

          
            <Route path="/crypto/:id" element={<SingleCrypto mode={mode} setMode={setMode}/>}/>
          
          
            <Route path="/chatrooms" element={<Chat mode={mode} setMode={setMode}/>}/>

            <Route path="/calculators" element={<CurrencyConverter mode={mode} setMode={setMode}/>}/>
          </Route>
      
      </Routes>    
    </div>
  );
}

export default App;
