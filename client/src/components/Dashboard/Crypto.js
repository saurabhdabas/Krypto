import React from 'react';
import { Link } from 'react-router-dom';
import url from '../../helpers/urlDecoder';

import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';

const Crypto = (props) => {
  let decodedURL = url(props.id);
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
    
      <TableCell component="th" scope="row">
        <Link to={`/crypto/${decodedURL.toLowerCase()}`}><img src={props.image} alt={props.id} width="50"/></Link>
      </TableCell>
      <TableCell align="left">
        <Link to={`/crypto/${decodedURL.toLowerCase()}`}>{props.name}</Link>
      </TableCell>
      <TableCell align="left">
        <Link to={`/crypto/${decodedURL.toLowerCase()}`}>{props.current_price}</Link>
      </TableCell>
      <TableCell align="left">
        <Link to={`/crypto/${decodedURL.toLowerCase()}`}>{props.price_change_percentage_24h}</Link>
      </TableCell>
      <TableCell align="left">
        <Link to={`/crypto/${decodedURL.toLowerCase()}`}>{props.last_updated}</Link>
      </TableCell>
      <TableCell>
        {<Button aria-label="like"  onClick={() => props.setFav([props.id, props.image])}>
          <FavoriteIcon style={{ color: red[500] }}/>
        </Button>}
      </TableCell>

    </TableRow>
  )
}
export default Crypto;
// import {React } from 'react'
// import { Link } from 'react-router-dom';
// import url from '../../helpers/urlDecoder';
// import Fab from '@mui/material/Fab';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { red } from '@mui/material/colors';


// const Crypto = (props) =>{
  
//   const user = JSON.parse(localStorage.getItem('username'));
//   const decodedURL = url(props.id);
//   return (
//     <li>
//       <Link to={`/crypto/${decodedURL.toLowerCase()}`}>
//         <img src={props.image} width= "50" alt={props.name}></img>
//       </Link>
//       <div>
//         <span>{props.name}</span>
//         <span>{props.price_change_percentage_24h}</span>
//       </div>
//       <div>{props.current_price}</div>
//       <div>{props.last_updated}</div>
//       <Fab aria-label="like" onClick={(prev)=>props.setFavorite(
//         ({...prev,
//         username:user.name,
//         email:user.email,
//         fav:props.name,
//         img:props.image
//         }))}>
//           <FavoriteIcon  style={{ color: red[500] }}/>
//       </Fab>
//     </li>
//   )
// }

// export default Crypto