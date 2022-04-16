import {React,useState,useEffect} from 'react';
import axios from 'axios';

import Crypto from './Crypto';

const CryptoList = () => {
  const [state, setState] = useState([{}]);
  useEffect(()=>{
    axios.get('/trending')
      .then((res)=> setState(res.data))
      .catch((err)=>console.log(err));
  },[]);
  const CryptoList = state.map((crypto)=>{
    return (
      <Crypto
      key = {crypto.id}
      image={crypto.image}
      name={crypto.name}
      price_change_percentage_24h={crypto.price_change_percentage_24h}
      current_price={crypto.current_price}
      last_updated={crypto.last_updated}
      />
    );
  });
  return (
    <div>
      {CryptoList}
    </div>
  )
}

export default CryptoList