import { Routes, Route } from 'react-router-dom';
import TrendingCryptoList from './components/Dashboard/TrendingCryptoList';

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard/" element={<TrendingCryptoList/>}/>  
      </Routes>
    </>

  );
}

export default App;
