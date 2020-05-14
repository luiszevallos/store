import React from 'react'
import './styles/navbar.css'
import { NavLink } from 'react-router-dom'
import { LocalGroceryStore, ExitToApp } from '@material-ui/icons'

function NavBar(props) {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <NavLink
            activeStyle={{
              borderBottom: 1, borderBottomStyle: 'solid', borderBlockColor: '#000'
            }}
            exact
            to="/">Store</NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{
              borderBottom: 1, borderBottomStyle: 'solid', borderBlockColor: '#000'
            }}
            exact
            to="/About">About</NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{
              borderBottom: 1, borderBottomStyle: 'solid', borderBlockColor: '#000'
            }}
            exact
            to="/Cart">
            <LocalGroceryStore style={{fontSize: 15}} />
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{
              borderBottom: 1, borderBottomStyle: 'solid', borderBlockColor: '#000'
            }}
            exact
            to="/Login">
            <ExitToApp style={{fontSize: 15}} />
            LogIn
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
