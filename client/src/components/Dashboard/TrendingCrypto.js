import React from 'react'
import { Link } from 'react-router-dom';
import url from '../../helpers/urlDecoder';
const TrendingCrypto = (props) => {
  const decodedURL = url(props.id);
  return (
    <li>
      <Link to={`/crypto/${decodedURL.toLowerCase()}`}>
        <img src={props.image} alt={props.name}></img>
      </Link>
      <div>
        <span>{props.name}</span>
        <span>{props.price_change_percentage_24h}</span>
      </div>
      <div>{props.current_price}</div>
      <div>{props.last_updated}</div>
    </li>
  )
}

export default TrendingCrypto
