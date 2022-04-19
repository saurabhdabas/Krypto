import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
const Navigation = () =>{

  const [value, setValue] = useState({});
  useEffect(() => {
    
    setValue(JSON.parse(localStorage.getItem('username')));
    
  }, []);

  const handleClick = () => {
    setValue(localStorage.removeItem('username'));
  }
  return (
    <div>
      <div> 
      <Avatar
        alt="Remy Sharp"
        src={value.img}
        sx={{ width: 80, height: 80 }}
        />
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
        <Link to="/calculators">Calculators</Link>
        </li>
        <li>
        <Link to="/" onClick ={handleClick}>Logout</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navigation;


