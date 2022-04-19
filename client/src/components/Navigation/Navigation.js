import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
const Navigation = () =>{

  const [value, setValue] = useState({});
  useEffect(() => {
    
    setValue(JSON.parse(localStorage.getItem('username')));
    
  }, []);

  return (
    <div>
      <div> 
        <img src={value.img} alt="avatar"/>
        <p>{`${value.name}`}</p>
      </div>
      <ul>
        <li>
        <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
        <Link to="/watchlist">Watchlist</Link>
        </li>
        <li>
        <Link to="/news">News</Link>
        </li>
        <li>
        <Link to="/chatrooms">Chat</Link>
        </li>
        <li>
        <Link to="/cryptotools">Tools</Link>
        </li>
        <li>
        <Link to="/">Logout</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navigation;


