import {React, useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import CryptoList from './CryptoList';
import TrendingCryptoList from './TrendingCryptoList';
import SearchForm from './SearchForm';
import topFourTrending from '../../helpers/topFourTrending';
import searchFilter from '../../helpers/searchFilter';

const Dashboard = () => {
  const [state, setState] = useState([{
    trending:[],
    market:[]
  }]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios.get('/market') 
      .then((res) => {
        setState((prev)=>[{ ...prev,
          trending:topFourTrending(res.data),
          market:res.data}])
        }
      )
      .catch((err)=>console.log(err));
  },[]);
  const inputHandler = (event) => {
    setSearch(event.target.value);
  };
  const filteredRows = searchFilter(state[0].market, search)
  return (
    <>
      <Header/>
      <Navigation/>
      <TrendingCryptoList data={state[0].trending}/>
      <SearchForm search={search} onChange={inputHandler}/>
      <CryptoList data={filteredRows}/>
    </>
  )
}

export default Dashboard

