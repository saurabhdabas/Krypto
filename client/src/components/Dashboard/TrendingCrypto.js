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
        
    <div >
      <Grid   style={{flex: "wrap"}} p={1}>
      <Link style = {{textDecoration: 'none'}} to={`/crypto/${decodedURL.toLowerCase()}`}>
         <Paper 
      sx={(props.mode === 'dark')?{
        p: 1,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        boxShadow:5,
        border: '1px solid #ffffff',
        borderRadius:5

      }:
      {
        p: 1,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
       boxShadow:5,
       background:'#f8f8ff',
       borderRadius:5

      }}>
    
    
      <Grid container sx={{ width: 250, height: 115}} >
        {/* <Grid item xs={12} container> */}
        <div className='imgContainer'  >
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
              <Typography variant="body2" gutterBottom color={props.mode === 'dark'? 'white':'#5E5F6E'}>
              Price: 
              $ {(props.current_price)}
              </Typography>
            <Typography variant="body2" gutterBottom color={props.mode === 'dark'? 'white':'#5E5F6E'}>
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
