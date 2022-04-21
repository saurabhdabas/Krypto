import {React,useState, useEffect} from 'react';
import axios from 'axios';
import Crypto from './Crypto';

const CryptoList = (props) => {

  const [favorite, setFavorite]= useState({
    user:"",
    fav:""
  });
  
  const handleClick = () => {
    if(favorite.user && favorite.fav){
      axios.put('/user-fav', {data:{user:favorite.user,fav:favorite.fav}})
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
    <div>
      {CoinsList}
    </div>
  )
};

export default CryptoList;