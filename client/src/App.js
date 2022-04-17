import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import SideBarList from './components/SideBar/SideBarList';
import WatchList from './components/WatchList';
import SingleCrypto from './components/SingleCrypto/SingleCrypto';
import Header from  './components/Header/Header'

function App() {
  return (
    <>
      <Header/>
      <SideBarList/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/> 
        <Route path="/watchlist" element={<WatchList/>}/>
        <Route path="/crypto/:id" element={<SingleCrypto/>}/>
      </Routes>
    </>

  );
}

export default App;
