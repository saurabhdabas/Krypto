import {React, useState, useEffect} from 'react';
import axios from 'axios';
import News from './News'
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
const NewsList = () => {
  const [news, setNews] = useState([])
  const options = {
    method: 'GET',
    url: 'https://crypto-news14.p.rapidapi.com/news/cointelegraph',
    headers: {
      'X-RapidAPI-Host': 'crypto-news14.p.rapidapi.com',
      'X-RapidAPI-Key': 'dcbde3c064msh331872c8b653255p19625bjsn3814756331e3'
    }
  };
  useEffect(()=>{
    axios.request(options).then(function (response) {
      setNews(...news,response.data)
    }).catch(function (error) {
      console.error(error);
    });
  },[]);
  const newsList = news.map((article)=>{

    return (
      <News key={article.title}title={article.title} image={article.image} description={article.desc} date={article.date} source={article.url} />
    )
  })
  return (
    <div>
      <Header/>
      <Navigation/>
      {newsList}
    </div>
  )
}

export default NewsList
