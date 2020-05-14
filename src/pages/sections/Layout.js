import React from 'react';
import NavBar from '../components/NavBar';
import './styles/layout.css'

function Layout(props) {
  return (
    <>
      <header className='Header'>
        <NavBar />
      </header>
      {props.children}
    </>
  )
}

export default Layout