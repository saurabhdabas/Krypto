
import { Link } from 'react-router-dom';

import url from '../../helpers/urlDecoder';

import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import {useState, useEffect} from 'react';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import dateConvert from '../../helpers/dateConvert';
import ClearIcon from '@mui/icons-material/Clear';

import '../../index.css'

const Crypto = (props) => {
  console.log("props:",props);
  const decodedURL = url(props.id);
  const [textColor, setTextColor] = useState('black');
  useEffect(() => {
    if (props.mode === 'dark') {
      setTextColor('white');
    } else if (props.mode === 'light') {
      setTextColor('black');
    }
  }, [props.mode])

  return (


    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
    
      <TableCell component="th" scope="row">
        <Link to={`/crypto/${decodedURL.toLowerCase()}`}>
          <img src={props.image} alt={props.id} width="50"/>
        </Link>
      </TableCell>

      <TableCell align="left">
        <Link to={`/crypto/${decodedURL.toLowerCase()}`} style={{ textDecoration: 'none', color: textColor}}>{props.name}
        </Link>
      </TableCell>

      <TableCell align="left">
        <Link to={`/crypto/${decodedURL.toLowerCase()}`} style={{ textDecoration: 'none', color: textColor}}>$ {(props.current_price)}
        </Link>
      </TableCell>

      <TableCell align="left">
        <Link to={`/crypto/${decodedURL.toLowerCase()}`} style={{ textDecoration: 'none', color: (Math.round(props.price_change_percentage_24h) > 0) ? "green" : "red"}}>
          <div className='shiftdown'>
            {(Math.round(props.price_change_percentage_24h) > 0) ? 
            <div className='flexdown'>
              <FileUploadIcon/>
            </div> 
            : <div className='flexdown'>
              <FileDownloadIcon/>
              </div>
            }
          </div>
        </Link>
      </TableCell>

      <TableCell align="left">
        <Link to={`/crypto/${decodedURL}`} style={{ textDecoration: 'none', color: textColor}}>
          {dateConvert(props.last_updated)}
        </Link>
      </TableCell>

      {(props.dashboard === "watchlist") ?
        <TableCell>
          <Button aria-label="like"  onClick={() => props.setDeleted(props.id)}>
            <ClearIcon style={{ color: red[500] }}/>
          </Button>
        </TableCell>
      :
        <TableCell>
          <Button aria-label="like"  onClick={() => props.setFavorite([props.id, props.image])}>
            <FavoriteIcon style={{ color: red[500] }}/>
          </Button>
        </TableCell> 
        }

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