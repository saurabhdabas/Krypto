import React from 'react'

import { Grid,Box, Paper } from '@mui/material';

const Description = (props) => {
  console.log("propsss:",props);
  return (
  <div>
    <Grid container >
      <Box direction={'row'} alignItems="center" justifyContent="center" m={2} display="grid" gridTemplateColumns="repeat(12, 1fr)" columngap="3" rowgap="3">
      <Box gridColumn="span 10">
        <Paper sx={{
          p: 1,
          m:3,
          backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)' }}>
          <Grid item >
          <p>Genesis Date: {(props.description.data.genesis_date) ? props.description.data.genesis_date : 'N/A'} </p> 
          </Grid>
        </Paper>
        <Paper sx={{
          p: 1,
          m:3,
          backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)' }}>
          <Grid item>
          <p>Market Cap Rank: {(props.description.data.market_cap_rank) ? props.description.data.market_cap_rank : "N/A" }</p> 
          </Grid>
        </Paper>
        <Paper sx={{
          p: 1,
          m:3,
          backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)' }}>
          <Grid item>
          <p>Current Price: ${(props.description.price) ? props.description.price : "N/A"}</p> 
          </Grid>
        </Paper>
        <Paper sx={{
          p: 1,
          m:3,
         
          backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)' }}>
            <Grid item>
            <p>Price Change (24h): {(props.description.priceChange) ? props.description.priceChange : "N/A"}</p> 
            </Grid>
        </Paper>     
  
      <Paper sx={{
          p: 1,
          m:3,
          mt:-3,
          backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)' }}>
          <Grid item>
          <p>Circulating Supply: {(props.description.circulatingSupply) ? props.description.circulatingSupply : "N/A"}</p> 
          </Grid>
        </Paper>
        <Paper sx={{
          p: 1,
          m:3,
          mt:-3,
          backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)' }}>
            <Grid item>
            <p>Analyst up sentiment: {(props.description.data.sentiment_votes_up_percentage) ? props.description.data.sentiment_votes_up_percentage : "N/A"}% </p>
            </Grid>
        </Paper>
        <Paper sx={{
          p: 1,
          m:3,
          mt:-3,
          backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)' }}>
            <Grid item>
            <p> Analyst down sentiment: {(props.description.data.sentiment_votes_down_percentage) ? props.description.data.sentiment_votes_down_percentage : "N/A"}%</p>
            </Grid>
        </Paper>
        </Box>
      </Box>
    </Grid>
  </div>
 
  )
  
}

export default Description
