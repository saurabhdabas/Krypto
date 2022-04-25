import React from 'react';
import { Link } from 'react-router-dom';
import url from '../../helpers/urlDecoder';
import { Grid } from '@mui/material';

import Typography from '@mui/material/Typography';

import Paper from '@mui/material/Paper';

import FileUploadIcon from '@mui/icons-material/FileUpload';
import {dateConvert} from '../../helpers/dateConvert';
import '../../index.css'
import './TrendingCrypto.scss'
import nameSlice from '../../helpers/nameSlice';
function TrendingCrypto(props) {
  let decodedURL = url(props.id)
  return (
        
    <div>
      <Grid   style={{flex: "wrap"}} p={1}>
      <Link style = {{textDecoration: 'none'}} to={`/crypto/${decodedURL.toLowerCase()}`}>
         <Paper
      sx={(props.mode === 'dark')?{
        p: 1,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: "rgb(35, 35, 35)",
        border: '2px solid rgb(35, 35, 35)'
      }:
      {
        p: 1,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: "rgb(200, 200, 200)",
        border: '2px solid #295A24'
      }}>
    
    
      <Grid container sx={{ width: 250, height: 115}} >
        {/* <Grid item xs={12} container> */}
        <div className='imgContainer' >
          <div className = "cryptoLogo" >
            <img src={props.image} alt={props.name}  />  
          </div>
        </div>
        {/* </Grid> */}
        <Grid item xs={15} sm container >
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
               {nameSlice(props.name)}
              </Typography>
              <Typography variant="body2" gutterBottom>
              Price: 
              ${(props.current_price)}
              </Typography>
            <Typography variant="body2" gutterBottom>
              {dateConvert(props.last_updated)}
              </Typography>
            </Grid>
          </Grid>

          <Grid item sx={{direction: "row", justifyContent: "center"}} >
            
            
            <Typography variant="subtitle1" component="div" style={{color: "green"}} >
            {Math.round(props.price_change_percentage_24h)}%  
             </Typography>


          </Grid>
          <FileUploadIcon style={{color: "green", mt:4}}/>
        </Grid>
      </Grid>
     
    
    </Paper>
    </Link>
      </Grid>
    </div>
  )
}
export default TrendingCrypto;
// import React from 'react'
// import { Link } from 'react-router-dom';
// import url from '../../helpers/urlDecoder';

// const TrendingCrypto = (props) => {
//   const decodedURL = url(props.id);
//   return (
//       <div>
//         <Link to={`/crypto/${decodedURL.toLowerCase()}`}>
//           <img src={props.image} width= "50" alt={props.name}></img>
//         </Link>
//         <div>
//           <span>{props.name}</span>
//           <span>{props.price_change_percentage_24h}</span>
//         </div>
//         <div>{props.current_price}</div>
//         <div>{props.last_updated}</div>
//       </div>
//   )
// }

// export default TrendingCrypto
