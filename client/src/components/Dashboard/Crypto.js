import React from 'react'
import { Link } from 'react-router-dom';
import url from '../../helpers/urlDecoder';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';

const Crypto = (props) => {
  // const color = red[500];
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
        <Fab aria-label="like"><FavoriteIcon style={{ color: red[500] }}/></Fab>
      </li>
  )
}

export default Crypto