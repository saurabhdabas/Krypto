import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Chart from './Chart';
import Description from './Description';

import Navigation from '../Navigation/Navigation';

import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const SingleCrypto = (props) => {
  const darkTheme = createTheme({
    palette: {
      mode: props.mode,
    },
  });
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
    <ThemeProvider theme={darkTheme}>
      <Grid container direction={'column'}  alignItems="center" justifyContent="center">
      
         <Navigation mode={props.mode} setMode={props.setMode}/>
      
         <Grid item mb={0} >
           <img src = {state[0].img} width={100} alt="logo"></img>
           <div>{state[0].data.name}</div>
         </Grid>
      
         <Grid item mt={5}  width={800}>
           <Chart id={props.id} />
         </Grid>
      
         <Grid item >
           <Description details={state[0]} id ={id}/>
         </Grid>
        
       </Grid>
    </ThemeProvider>
  )
}

export default SingleCrypto;
