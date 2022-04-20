import {React, useState } from 'react'
import { Link } from 'react-router-dom';
import url from '../../helpers/urlDecoder';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import axios from 'axios';

const Crypto = (props) => {
  // const color = red[500];
  const [Favorite, setFavorite] = useState({
    user:"",
    favorite:""
  });
  const handleClick = ()=> {
    const user = JSON.parse(localStorage.getItem('username'))
    setFavorite({...Favorite,user:user.name,favorite:props.id});
    console.log("Favorite:",Favorite);
    if(Favorite.favorite){
      axios.put('/user-fav', {data: Favorite}).then((response)=> {
        console.log("response",response);
      });
    }
  }
  
  const decodedURL = url(props.id);
  return (
      <li>
        <Link to={`/crypto/${decodedURL.toLowerCase()}`}>
          <img src={props.image} alt={props.name}></img>
        </Link>
        <div>
          <span>{props.name}</span>
          <span>{props.price_change_percentage_24h}</span>
        </div>
        <div>{props.current_price}</div>
        <div>{props.last_updated}</div>
        <Fab aria-label="like" onClick={handleClick}><FavoriteIcon  style={{ color: red[500] }}/></Fab>
      </li>
  )
}

export default Crypto