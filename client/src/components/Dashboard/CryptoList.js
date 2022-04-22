import {React,useState, useEffect} from 'react';
import axios from 'axios';
import Crypto from './Crypto';
import { Grid } from "@mui/material";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import MarketCryptoHeader from '../Header/MarketCryptoHeader';

const CryptoList = (props) => {
  
  const [favorite, setFavorite]= useState({
    username:"",
    email:"",
    fav:"",
    img:""
  });
  
  const handleClick = () => {
    if(favorite.username && favorite.fav ){
      console.log("fav:",favorite);
      axios.put('/user-fav',{data:{
        username:favorite.username,
        email:favorite.email,
        fav:favorite.fav,
        img:favorite.img
      }})
      .then((res) => console.log("This is the responds from /user-fav post: ", res)).catch((error) => console.log("from user-fav error: ", error))
    }
  }
  useEffect(()=>{
    handleClick();
    console.log("favorite has changed:",favorite)
  },[favorite]);

  const CoinsList = props.data.map((crypto)=>{
    return (
      <Crypto
      key = {crypto.name} 
      image={crypto.image}
      id={crypto.id}
      name={crypto.name}
      price_change_percentage_24h={crypto.price_change_percentage_24h}
      current_price={crypto.current_price}
      last_updated={crypto.last_updated}
      setFavorite = {setFavorite}
      favorite={favorite}
      />
    );
  });
  return (
  <Grid container direction={"column"} style={{maxHeight: '50vh', overflow: 'hidden' }}>      
            
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="sticky table" align="left">
        <MarketCryptoHeader/>
        <TableBody>  
            {CoinsList}
        </TableBody>
      </Table>
    </TableContainer>
  </Grid>
  )
};

export default CryptoList;