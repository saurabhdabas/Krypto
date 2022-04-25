import React from 'react'

import { Grid, Paper} from '@mui/material';

import DateRangeIcon from '@mui/icons-material/DateRange';

import ShowChartIcon from '@mui/icons-material/ShowChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CachedIcon from '@mui/icons-material/Cached';
import PriceChangeIcon from '@mui/icons-material/PriceChange';

import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import EqualizerIcon from '@mui/icons-material/Equalizer';

import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'; 
import SentimentVeryDissatisfiedIcon from'@mui/icons-material/SentimentVeryDissatisfied';
import './singleCrypto.scss';

const Description = (props) => {
console.log(props.description)
  return (
    <div>
      {/* <img src={props.Description.img} alt={props.Description.data.name} width ={100}/>
      <p>{props.Description.data.name}</p> */}
    <Grid container  >
    
      <Grid container direction={'row'} alignItems="center" justifyContent="center" mb={2}>
      
        <Paper  sx={{
          p: 1,
          m:3,
          width:200,
          }}>
          <Grid container direction={'column'} alignItems={'center'}>
            <div className='iconContainer'>
               <div className='icon'>
                  <DateRangeIcon sx={{fontSize:40}} />
                </div>
            </div>
            <Grid item>Genesis Date </Grid> 
            <Grid item>{(props.description.data.genesis_date) ? props.description.data.genesis_date : 'N/A'} </Grid>  
          </Grid>
        </Paper>
        <Paper sx={{
            p: 1,
            m:3,
            width:200,
          }}>
            <Grid container direction={'column'} alignItems={'center'}>
            <div className='iconContainer'>
               <div className='icon'>
                 <ShowChartIcon sx={{fontSize:40}}/>  
                </div>
            </div>
              <Grid item>Community Score</Grid>
              <Grid item>{(props.description.data.community_score) ? props.description.data.community_score: "N/A"} </Grid>
            </Grid>

        </Paper>
        <Paper sx={{
          p: 1,
          m:3,

          width:200,
          }}>
          <Grid container direction={'column'} alignItems={'center'}>
              <div className='iconContainer'>
                <div className='icon'>
                  <EqualizerIcon sx={{fontSize:40}}/> 
               </div>
            </div>
            <Grid item> Market Cap Rank </Grid>
            <Grid item> {(props.description.data.market_cap_rank) ? props.description.data.market_cap_rank : "N/A" }</Grid>
          </Grid>
        </Paper>
       
        <Paper sx={{
          p: 1,
          m:3,
          width:200,
          }}>
          <Grid container direction={'column'} alignItems={'center'}>
             <div className='iconContainer'>
                <div className='icon'>
                  <CachedIcon sx={{fontSize:40}}/> 
                </div>
              </div>
            <Grid item>Circulating Supply</Grid>
            <Grid item>$ {(props.description.circulatingSupply) ? Math.round(props.description.circulatingSupply) : "N/A"}</Grid>
          </Grid>
        </Paper>

      </Grid>
      
      <Grid container direction={'row'} alignItems="center" justifyContent="center">
      <Paper sx={{
            p: 1,
            m:3,
            mt:-1,
            width:200,
          }}>
          <Grid container direction={'column'} alignItems={'center'}>
              <div className='iconContainer'>
                <div className='icon'>
                   <AttachMoneyIcon sx={{fontSize:40}}/> 
                  </div>
              </div>
            <Grid item> Current Price </Grid>
            <Grid item> $ {(props.description.price) ?props.description.price: "N/A"}</Grid>
          </Grid>
        </Paper>
        <Paper sx={{
          p: 1,
          m:3,
          mt:-1,
          width:200,
          }}>
            <Grid container direction={'column'} alignItems={'center'}>
            <div className='iconContainer'>
                <div className='icon'>
                  <PriceChangeIcon sx={{fontSize:40}}/> 
                </div>
              </div>
              <Grid item>Price Change (24h) </Grid>
              <Grid item>${(props.description.priceChange) ? props.description.priceChange : "N/A"}</Grid>
            
            </Grid>
        </Paper>
   
        <Paper sx={{
          p: 1,
          m:3,
          mt:-1,
          width:200,
          }}>
            <Grid container direction={'column'} alignItems={'center'}>
              <div className='iconContainer'>
                <div className='icon'>
                  < SentimentSatisfiedAltIcon sx={{fontSize:40}}/>  
                  </div>
              </div>
              <Grid item> Analyst up sentiment: </Grid>
              <Grid item>  {(props.description.data.sentiment_votes_up_percentage) ? props.description.data.sentiment_votes_up_percentage : "N/A"}% </Grid>
            </Grid>
        </Paper>
        <Paper sx={{
          p: 1,
          m:3,
          mt:-1,
          width:200,
          }}>
            <Grid container direction={'column'} alignItems={'center'}>
              <div className='iconContainer'>
                <div className='icon'>
                  <SentimentVeryDissatisfiedIcon sx={{fontSize:40}}/>  
                </div>
              </div>
              <Grid item> Analyst down sentiment:</Grid>
              <Grid item>  {(props.description.data.sentiment_votes_down_percentage) ? props.description.data.sentiment_votes_down_percentage : "N/A"}% </Grid>
            </Grid>
        </Paper>
     
      </Grid>

    </Grid>
 

 
    </div>
  )
}

export default Description;

// import React from 'react'

// import { Grid,Box, Paper } from '@mui/material';

// const Description = (props) => {
//   console.log("propsss:",props);
//   return (
//   <div>
//     <Grid container >
//       <Box direction={'row'} alignItems="center" justifyContent="center" m={2} display="grid" gridTemplateColumns="repeat(12, 1fr)" columngap="3" rowgap="3">
//       <Box gridColumn="span 10">
//         <Paper sx={{
//           p: 1,
//           m:3,
//           backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)' }}>
//           <Grid item >
//           <p>Genesis Date: {(props.description.data.genesis_date) ? props.description.data.genesis_date : 'N/A'} </p> 
//           </Grid>
//         </Paper>
//         <Paper sx={{
//           p: 1,
//           m:3,
//           backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)' }}>
//           <Grid item>
//           <p>Market Cap Rank: {(props.description.data.market_cap_rank) ? props.description.data.market_cap_rank : "N/A" }</p> 
//           </Grid>
//         </Paper>
//         <Paper sx={{
//           p: 1,
//           m:3,
//           backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)' }}>
//           <Grid item>
//           <p>Current Price: ${(props.description.price) ? props.description.price : "N/A"}</p> 
//           </Grid>
//         </Paper>
//         <Paper sx={{
//           p: 1,
//           m:3,
         
//           backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)' }}>
//             <Grid item>
//             <p>Price Change (24h): {(props.description.priceChange) ? props.description.priceChange : "N/A"}</p> 
//             </Grid>
//         </Paper>     
  
//       <Paper sx={{
//           p: 1,
//           m:3,
//           mt:-3,
//           backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)' }}>
//           <Grid item>
//           <p>Circulating Supply: {(props.description.circulatingSupply) ? props.description.circulatingSupply : "N/A"}</p> 
//           </Grid>
//         </Paper>
//         <Paper sx={{
//           p: 1,
//           m:3,
//           mt:-3,
//           backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)' }}>
//             <Grid item>
//             <p>Analyst up sentiment: {(props.description.data.sentiment_votes_up_percentage) ? props.description.data.sentiment_votes_up_percentage : "N/A"}% </p>
//             </Grid>
//         </Paper>
//         <Paper sx={{
//           p: 1,
//           m:3,
//           mt:-3,
//           backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)' }}>
//             <Grid item>
//             <p> Analyst down sentiment: {(props.description.data.sentiment_votes_down_percentage) ? props.description.data.sentiment_votes_down_percentage : "N/A"}%</p>
//             </Grid>
//         </Paper>
//         </Box>
//       </Box>
//     </Grid>
//   </div>
 
//   )
  
// }

// export default Description
