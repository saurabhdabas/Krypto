import React from 'react'
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
const Description = (props) => {
  
  return (
    <div>
      <img src={props.description.img} alt={props.description.data.name}/>
      <p>{props.description.data.name}</p>
      <p>Genesis Date: {(props.description.data.genesis_date) ? props.description.data.genesis_date : 'N/A'} </p> 
      <p>Market Cap Rank: {(props.description.data.market_cap_rank) ? props.description.data.market_cap_rank : "N/A" }</p> 
      <p>Circulating Supply: {(props.description.circulatingSupply) ? props.description.circulatingSupply : "N/A"}</p> 
      <p>Current Price: ${(props.description.price) ? props.description.price : "N/A"}</p> 
      <p>Price Change (24h): {(props.description.priceChange) ? props.description.priceChange : "N/A"}</p> 
      <p>Analyst up sentiment: {(props.description.data.sentiment_votes_up_percentage) ? props.description.data.sentiment_votes_up_percentage : "N/A"}% </p>
      <p> Analyst down sentiment: {(props.description.data.sentiment_votes_down_percentage) ? props.description.data.sentiment_votes_down_percentage : "N/A"}%</p>
      <Fab  aria-label="like">
        <FavoriteIcon style={{ color: red[500] }}/>
      </Fab>
    </div>
  )
}

export default Description
