import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
const Navigation = () =>{

  const [value, setValue] = useState(null);
  useEffect(() => {
    
    setValue(localStorage.getItem('username'));
    
  }, [value]);

  return (
    <div>
      <div> 
        <img src="https://pickaface.net/gallery/avatar/20160625_050020_889_FAKE.png" alt="avatar"/>
        <p>{`${value}`}</p>
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


