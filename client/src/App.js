import { Routes, Route } from 'react-router-dom';
import {useState} from 'react';
import Dashboard from './components/Dashboard/Dashboard';


import SingleCrypto from './components/SingleCrypto/SingleCrypto';
import  {Chat } from './components/chat/Chat';

import Login from './components/Login';
import NewsList from './components/News/NewsList';

import ProtectedRoutes from './components/Hooks/userAuth';

import CurrencyConverter from './components/CurrencyConverter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey,common} from '@mui/material/colors';


function App() {
  const [mode, setMode] = useState("light")

  const darkTheme = createTheme({
    palette: {
      ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {  main: "#f5eeee" },
          background: {
            default: "#f5eeee",
            paper: "#C5C0CD",
          },
          divider: common.black,
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: {main: "#07060D"},
          divider: common.white,
          background: {
            default: "#48374D",
            paper: "rgb(60, 35, 60)",
          },
          text: {
            primary: '#fff',
            secondary: grey[100],
          },
        }),
  },
});
  return (
    <ThemeProvider theme={darkTheme}>
    <div className={mode}>
      <Routes>
          
        <Route path="/" 
          element={
            <Login/>
          }
        /> 

        <Route path='/' 
          element={
            <ProtectedRoutes/>
          }
        >

        <Route path="/dashboard" 
          element={
            <Dashboard 
              mode={mode} 
              setMode={setMode}
            />
          }
        /> 

        <Route path="/news" 
          element={
            <NewsList 
              mode={mode} 
              setMode={setMode}
            />
          }
        />

        <Route path="/crypto/:id" 
          element={
            <SingleCrypto 
              mode={mode} 
              setMode={setMode}
            />
          }
        />   

        <Route path="/chatrooms" 
          element={
            <Chat 
              mode={mode} 
              setMode={setMode}
            />
          }
        />

        <Route path="/calculators" 
          element={
            <CurrencyConverter 
              mode={mode} 
              setMode={setMode}
            />
          }
        />
        
        </Route>

      </Routes>

    </div>
</ThemeProvider>
  );
}

export default App;