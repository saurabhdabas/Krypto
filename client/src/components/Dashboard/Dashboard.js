import {React, useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import CryptoList from './CryptoList';
import TrendingCryptoList from './TrendingCryptoList';
import SearchForm from './SearchForm';
import topFourTrending from '../../helpers/topFourTrending';
import searchFilter from '../../helpers/searchFilter';
import CircularProgress from '@mui/material/CircularProgress';
const Dashboard = () => {
  const [state, setState] = useState([{
    trending:[],
    market:[]
  }]);
  const[search, setSearch] = useState("");
  const[loading, setLoading] = useState(false)
  useEffect(() => {
    axios.get('/market') 
      .then((res) => {
        setState((prev)=>[{ ...prev,
          trending:topFourTrending(res.data),
          market:res.data}])
        },
        setTimeout(()=>{
          setLoading(true)
        }, 500)
      )
      .catch((err)=>console.log(err));
  },[]);
  const inputHandler = (event) => {
    setSearch(event.target.value);
  };
  const filteredRows = searchFilter(state[0].market, search)
  console.log("loading:",loading);
  return (
    <>
      <Header/>
      <Navigation/>

      {loading ? 
        (<div><TrendingCryptoList data={state[0].trending}/>
       <SearchForm search={search} onChange={inputHandler}/>
       <CryptoList data={filteredRows}/></div> )
       : <CircularProgress/>}
    </>
  )
}

export default Dashboard


