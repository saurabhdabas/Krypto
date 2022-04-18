import React from 'react'
import { Link } from 'react-router-dom';
const sideBarList = () => {

  const logout = () => {
    window.open("http://localhost:3002/logout", "_self");

  };
  return (
    <div>
      <div> 
        <img src="https://pickaface.net/gallery/avatar/20160625_050020_889_FAKE.png" alt="avatar"/>
        <p>Saurabh</p>
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
        <Link to="/logout" onClick={logout}>Logout</Link>
        </li>
      </ul>
    </div>
  )
}

export default sideBarList


