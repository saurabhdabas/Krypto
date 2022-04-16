import React from 'react';

import Crypto from './Crypto';

const CryptoList = (props) => {
  const CoinsList = props.data.map((crypto)=>{
    return (
      <Crypto
      key = {crypto.name}
      image={crypto.image}
      name={crypto.name}
      price_change_percentage_24h={crypto.price_change_percentage_24h}
      current_price={crypto.current_price}
      last_updated={crypto.last_updated}
      />
    );
  });
  return (
    <div>
      {CoinsList}
    </div>
  )
}

export default CryptoList