import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Chart from './Chart';
import Description from './Description';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';

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
      <Header/>
      <Navigation/>
      <Box m='auto' sx={{ width: '80%' }}>
        <Grid container>
          <Chart/>
        </Grid>
      </Box>
      <Description description = {state[0]}/>
    </div>
  )
}

export default SingleCrypto;
