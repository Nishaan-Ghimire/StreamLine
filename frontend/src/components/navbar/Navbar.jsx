import React from 'react'
import { Link } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext'
import './navbar.scss'
const Navbar = () => {
  // const { isAuthenticated, logout } = useAuth();
  return (
    <div className='navbar'>
      <div className="navbarContainer">
        <div className="logo"><span>StreamLine</span></div>
        <div className="menuItems">
          <ul>
            <li>
            {/* {isAuthenticated() ? (
            <button onClick={logout}>Logout</button>
          ) : ( */}
            {/* <Link to="/login"> */}
              Login
              {/* </Link> */}
          {/* )} */}
            </li>
            <li>
              {/* {isAuthenticated() ? "":( */}
                {/* <Link to="/register"> */}
                  Register
                  {/* </Link> */}
              {/* )} */}
            </li>
          </ul>
        </div>
      </div>


    </div>
  )
}

export default Navbar