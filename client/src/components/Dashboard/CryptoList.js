import {React,useState, useEffect} from 'react';
import axios from 'axios';
import Crypto from './Crypto';
import { Grid } from "@mui/material";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import MarketCryptoHeader from '../Header/MarketCryptoHeader';

const CryptoList = (props) => {
  
  const [num, setNum] = useState(0);

  const [state, setState] = useState([{
    watchlist: []
  }]);

  const [deleted, setDeleted] = useState("");
  // const [render, setRender] = useState("");

  const handleSubmitWatchlist = () => {
    props.setRender(deleted);
    if (deleted) {
    axios.put(`/user-delete`, {data: deleted , user: JSON.parse(localStorage.getItem('username'))})
  }
}
  useEffect(() => {
    handleSubmitWatchlist();
  }, [deleted]);
  useEffect(() => {
    Promise.all([
      // axios.get('/market'),
      axios.put('/watchlist', {user: JSON.parse(localStorage.getItem('username'))} )
    ]).then((all)=> {
      console.log('This is what is returned from the api calls:', all);
      setState(prev => [{...prev,
        watchlist: all[0].data
      }])
    })

  },[props.render, props.dashboard]);
  
  const [fav, setFav] = useState([]);  

  const handleSubmit = () => {
    
    if (fav.length > 0) {
      console.log("axios call to the back end to store fav gets called")
      axios.put(`/insert-watchlist`, {
        id: fav[0], 
        img: fav[1], 
        user: JSON.parse(localStorage.getItem('username'))})
        .then((res) => 
        console.log("This is the responds from /insert-watchlist post: ", res))
        .catch((error) => console.log("from insert-watchlist error: ", error))
    }
  }
  
  useEffect(() => {
    handleSubmit();
  }, [fav]);

  const arr =[];
  const filter = state[0].watchlist.map((marketCrypto) => {
    props.data.map((crypto) => {
      if (marketCrypto.crypto_id === crypto.id) {
        return arr.push(crypto)
      }
    })
  });
  console.log("filter:",filter);

  const watchlistCrypto = arr.map((crypto)=>{
    return (
      <Crypto
      key={crypto.id}
      id={crypto.id}
      image={crypto.image}
      name={crypto.name}
      price_change_percentage_24h={crypto.price_change_percentage_24h}
      current_price={crypto.current_price}
      last_updated={crypto.last_updated}
      setFav={setFav}
      fav={fav}
      mode={props.mode} 
      setMode={props.setMode}
      dashboard={props.dashboard}
      setDeleted={setDeleted}
      />
    );
  });

  const marketCrypto = props.data.map((crypto)=>{
    return (
      <Crypto
      key = {crypto.name} 
      image={crypto.image}
      id={crypto.id}
      name={crypto.name}
      price_change_percentage_24h={crypto.price_change_percentage_24h}
      current_price={crypto.current_price}
      last_updated={crypto.last_updated}
      setFavorite = {setFav}
      favorite={fav}
      mode={props.mode} 
      setMode={props.setMode}
      dashboard={props.dashboard}
      setDeleted={setDeleted}
      setNum={setNum}
      num={num}
      />
    );
  });
  return (
<div >
            <Grid container direction={"column"} style={{maxHeight: '52.5vh', overflow: 'hidden'}} mb={2.8} 
           >         
            <TableContainer component={Paper}  sx= {
              {backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)', borderTop: "1px solid grey", borderBottom: "1px solid grey",
              mb: 4
              }
            }>
            <Table stickyHeader aria-label="sticky table" align="left">
              <MarketCryptoHeader dashboard={props.dashboard}/>
                    <TableBody>  
                        {(props.dashboard === "market") ? 
                        marketCrypto : watchlistCrypto}
                    </TableBody>
            </Table>
          </TableContainer>
       
        </Grid>
      </div>
  )
};

export default CryptoList;