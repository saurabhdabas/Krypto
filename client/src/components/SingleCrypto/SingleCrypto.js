import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Chart from './Chart';
import Description from './Description';
import { Typography } from '@mui/material';
import Navigation from '../Navigation/Navigation';

import Grid from '@mui/material/Grid';
import {createTheme } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';
import '../Dashboard/TrendingCrypto.scss'

const SingleCrypto = (props) => {
  const darkTheme = createTheme({
    palette: {
      mode: props.mode,
    },
  });
  const[loading, setLoading] = useState(false)
  const { id } = useParams();
  const [state, setState] = useState([{
    img: "",
    data: {},
    description: "",
    supply: "",
    circulating_Supply: "",
    priceChange: ""
  }]);

  useEffect(() => {
    axios.get(`/crypto/${id}`) 
    .then((res) => {
      setState((prev)=>[{ ...prev,
        img:res.data.image.large,
        data: res.data,
        description: res.data.description.en,
        price: res.data.market_data.current_price.cad,
        circulatingSupply: res.data.market_data.circulating_supply,
        priceChange: res.data.market_data.price_change_24h
      }])
      }, setTimeout(()=>{
        setLoading(true)
      }, 500)
    )
    .catch((err)=>console.log(err));
},[id]);

  console.log(state[0])
  let name = state[0].data.name
  return (

<div>
      {(loading) ? 
   <Grid container direction={'column'}  alignItems="center" justifyContent="center">

      <Navigation mode={props.mode} setMode={props.setMode}/>

      <Grid item  mt={-1} align="center" >
        <img className = 'singleCryptoImg' src = {state[0].img} width={100} alt = "crypto" ></img>
        <Typography>{state[0].data.name}</Typography>
      </Grid>

      <Grid item mt={5}  width={850}>
        <Chart id={props.id} />
      </Grid>

      <Grid item>
      <Description description={state[0]} id ={id}/>
      </Grid>
     
    </Grid>:
       <Grid container direction={'column'}  alignItems="center" justifyContent="center">

       <Navigation mode={props.mode} setMode={props.setMode}/>
 
       <Grid item mb={0} align="center">
        <Skeleton variant="circular" width={90} height={90} />
        <Skeleton width="60%" />
       </Grid>
 
       <Grid item mt={5} mb={5}  width={800} align="center">
       <Skeleton variant="rectangular" animation="wave" width={750} height={400} />
       </Grid>
 

       <Skeleton variant="rectangular" animation="wave" width={700} height={150} />

      
     </Grid>
}

</div>
  )

}

export default SingleCrypto;

// setState((prev)=>[{ ...prev,
//   market:res.data,
//   trending:topFourTrending(res.data),
//   isLoading: false
// }])


// import {React, useState, useEffect} from 'react'
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// import Chart from './Chart';
// import Description from './Description';

// import Navigation from '../Navigation/Navigation';

// import Grid from '@mui/material/Grid';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { Typography } from '@mui/material';

// const SingleCrypto = (props) => {
//   const darkTheme = createTheme({
//     palette: {
//       mode: props.mode,
//     },
//   });
//   const { id } = useParams();
//   const [state, setState] = useState([{
//     img: "",
//     data: {},
//     description: "",
//     supply: "",
//     circulating_Supply: "",
//     priceChange: ""
//   }]);
//   useEffect(() => {
//     axios.get(`/crypto/${id}`) 
//       .then((res) => {
//         console.log("res:",res);
//         setState((prev)=>[{ ...prev,
//           img:res.data.image.large,
//           data: res.data,
//           description: res.data.description.en,
//           price: res.data.market_data.current_price.cad,
//           circulatingSupply: res.data.market_data.circulating_supply,
//           priceChange: res.data.market_data.price_change_24h
//         }])
//         }
//       )
//       .catch((err)=>console.log(err));
//   },[id]);
//   console.log("state:",state);
//   return (
//     <ThemeProvider theme={darkTheme}>
//       <Grid container direction={'column'}  alignItems="center" justifyContent="center">
      
//          <Navigation mode={props.mode} setMode={props.setMode}/>
      
//          <Grid item mb={0} >
//            <img src = {state[0].img} width={80} alt="logo"></img>
//            <Typography mb={3}fontSize={20} textAlign='center'>{state[0].data.name.toUpperCase()}</Typography>
//          </Grid>
      
//          <Grid item mt={5}  width={800}>
//            <Chart id={props.id} />
//          </Grid>
      
//          <Grid item >
//            <Description description={state[0]} id ={id}/>
//          </Grid>
        
//        </Grid>
//     </ThemeProvider>
//   )
// }

// export default SingleCrypto;
