import {React} from 'react';

import TrendingCrypto from './TrendingCrypto';

const TrendingCryptoList = (props) => {
  console.log("props:",props.data);
  const TrendingCryptoList = props.data.map((crypto)=>{
    return (
      <TrendingCrypto
      key = {crypto.id}
      id= {crypto.id}
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
      {TrendingCryptoList}
    </div>
  )
}

export default TrendingCryptoList
