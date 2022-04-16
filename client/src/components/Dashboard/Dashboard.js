import {React, useState, useEffect} from 'react';
import axios from 'axios';
import CryptoList from './CryptoList';
import TrendingCryptoList from './TrendingCryptoList';
import topFourTrending from '../../helpers/topFourTrending';

const Dashboard = () => {
  const [state, setState] = useState([{
    trending:[],
    market:[]
  }]);
  useEffect(()=>{
    axios.get('/market') 
      .then((res) => {
        setState([{
          trending:topFourTrending(res.data),
          market:res.data}])
        }
      )
      .catch((err)=>console.log(err));
  },[]);
  return (
    <>
      <TrendingCryptoList data={state[0].trending}/>
      <CryptoList data={state[0].market}/>
    </>
  )
}

export default Dashboard
