import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Chart from './Chart';
import Description from './Description';

const SingleCrypto = () => {
  const { id } = useParams();
  const [state, setState] = useState([{
    img: "",
    data: {},
    description: "",
    supply: "",
    circulating_Supply: "",
    priceChange: ""
  }]);
  useEffect(() => {
    axios.get(`/crypto/${id}`) 
      .then((res) => {
        setState((prev)=>[{ ...prev,
          img:res.data.image.large,
          data: res.data,
          description: res.data.description.en,
          price: res.data.market_data.current_price.cad,
          circulatingSupply: res.data.market_data.circulating_supply,
          priceChange: res.data.market_data.price_change_24h
        }])
        }
      )
      .catch((err)=>console.log(err));
  },[id]);
  
  return (
    <div>
      
      <Chart/>
      <Description description = {state[0]}/>
    </div>
  )
}

export default SingleCrypto
