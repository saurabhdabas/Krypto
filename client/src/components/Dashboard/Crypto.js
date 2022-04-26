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
import {dateConvert} from '../../helpers/dateConvert';
import ClearIcon from '@mui/icons-material/Clear';
import { styled } from '@mui/material/styles';

import '../../index.css'

const Crypto = (props) => {
  const StyledButton = styled(Button)(() => ({
    ':hover': {
      color:'white',
      transform: 'scale(1.2)',
      cursor:'pointer'
    },
  }));
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
    
      <TableCell component="th" scope="row" align='center'sx= {(props.mode === 'light') ? 
        {fontWeight: "bold", backgroundColor: "#FFFFFF"}:{fontWeight: "bold", backgroundColor: "rgb(35, 35, 35)"}
      } >
        <Link to={`/crypto/${decodedURL.toLowerCase()}`}>
          <img src={props.image} alt={props.id} width="50"/>
        </Link>
      </TableCell>

      <TableCell align="center" sx= {(props.mode === 'light') ? 
        {fontWeight: "bold", backgroundColor: "#FFFFFF"}:{fontWeight: "bold", backgroundColor: "rgb(35, 35, 35)"}
      }>
        <Link to={`/crypto/${decodedURL.toLowerCase()}`} style={{ textDecoration: 'none', color: textColor}}>{props.name}
        </Link>
      </TableCell>

      <TableCell align="center" sx= {(props.mode === 'light') ? 
        {fontWeight: "bold", backgroundColor: "#FFFFFF"}:{fontWeight: "bold", backgroundColor: "rgb(35, 35, 35)"}
      }>
        <Link to={`/crypto/${decodedURL.toLowerCase()}`} style={{ textDecoration: 'none', color: textColor}}>$ {(props.current_price)}
        </Link>
      </TableCell>

      <TableCell align="center" sx= {(props.mode === 'light') ? 
        {fontWeight: "bold", backgroundColor: "#FFFFFF"}:{fontWeight: "bold", backgroundColor: "rgb(35, 35, 35)"}
      }>
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

      <TableCell align="center" sx= {(props.mode === 'light') ? 
        {fontWeight: "bold", backgroundColor: "#FFFFFF"}:{fontWeight: "bold", backgroundColor: "rgb(35, 35, 35)"}
      }>
        <Link to={`/crypto/${decodedURL}`} style={{ textDecoration: 'none', color: textColor}}>
          {dateConvert(props.last_updated)}
        </Link>
      </TableCell>

      {(props.dashboard === "watchlist") ?
        <TableCell align='center' sx= {(props.mode === 'light') ? 
        {fontWeight: "bold", backgroundColor: "#FFFFFF"}:{fontWeight: "bold", backgroundColor: "rgb(35, 35, 35)"}
      }>
          <StyledButton aria-label="like"  onClick={() => props.setDeleted(props.id)}>
            <ClearIcon style={{ color: red[500] }}/>
          </StyledButton>
        </TableCell>
      :
        <TableCell align='center' sx= {(props.mode === 'light') ? 
        {fontWeight: "bold", backgroundColor: "#FFFFFF"}:{fontWeight: "bold", backgroundColor: "rgb(35, 35, 35)"}
      }>
       
        <StyledButton aria-label="like" onClick={() => props.setFavorite([props.id, props.image])}>
          <FavoriteIcon style={{ color: red[500] }}/>
        </StyledButton>
       
        </TableCell> 
        }

    </TableRow>

  )
}
export default Crypto;
