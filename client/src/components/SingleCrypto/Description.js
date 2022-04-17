import React from 'react'

const Description = (props) => {
  
  return (
    <div>
      <img src={props.description.img} alt={props.description.data.name}/>
      <p>{props.description.data.name}</p>
      <p>Genesis Date: {(props.description.data.genesis_date) ? props.description.data.genesis_date : 'N/A'} </p> 
      <p>Market Cap Rank: {props.description.data.market_cap_rank}</p> 
      <p>Circulating Supply: {props.description.circulatingSupply}</p> 
      <p>Current Price: ${props.description.price}</p> 
      <p>Price Change (24h): {props.description.priceChange}</p> 
      <p>Analyst up sentiment: {props.description.data.sentiment_votes_up_percentage}% </p>
      <p> Analyst down sentiment: {props.description.data.sentiment_votes_down_percentage}%</p>
    </div>
  )
}

export default Description
