import React from 'react';
import { Link } from 'react-router-dom';
import url from '../../helpers/urlDecoder';
import { Grid } from '@mui/material';

import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Paper from '@mui/material/Paper';

function TrendingCrypto(props) {
  let decodedURL = url(props.id)
  return (
        
  <div>
    <Grid  style={{flexWrap: 'wrap'}} >
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}>
        <Grid container spacing={0}>
          <Grid item>
            <ButtonBase sx={{ width: 50, height: 100 }}>
            <Link to={`/crypto/${decodedURL}`}><img src={props.image} alt={props.name} width="50"/>  </Link>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                 {props.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                ${props.current_price}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                {props.last_updated}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
              {Math.round(props.price_change_percentage_24h)}%
              </Typography>
            </Grid> 
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  </div>
  );
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
