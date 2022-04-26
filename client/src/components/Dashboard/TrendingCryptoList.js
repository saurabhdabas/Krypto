import {React} from 'react';
import { Grid } from "@mui/material";
import TrendingCrypto from './TrendingCrypto';

export default function TrendingCryptoList(props) {

  const trendingCrypto = props.data.map((crypto)=>{
    return (
      <TrendingCrypto
      key = {crypto.id}
      id={crypto.id}
      image={crypto.image}
      name={crypto.name}
      price_change_percentage_24h={crypto.price_change_percentage_24h}
      current_price={crypto.current_price}
      last_updated={crypto.last_updated}
      mode={props.mode}
      />
    );
  });

  return (
    <Grid container direction={"row"}>
      {trendingCrypto}
    </Grid>
  )
}
// import {React} from 'react';

// import TrendingCrypto from './TrendingCrypto';
// import Box from '@mui/material/Box';
// const TrendingCryptoList = (props) => {

//   const TrendingCryptoList = props.data.map((crypto)=>{
//     return (

//         <TrendingCrypto
//         key = {crypto.id}
//         id= {crypto.id}
//         image={crypto.image}
//         name={crypto.name}
//         price_change_percentage_24h={crypto.price_change_percentage_24h}
//         current_price={crypto.current_price}
//         last_updated={crypto.last_updated}
//         />
//     );
//   });
//   return (
//     <Box gridColumn="span">
//       {TrendingCryptoList}
//     </Box>
//   )
// }

// export default TrendingCryptoList
