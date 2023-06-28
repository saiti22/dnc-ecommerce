import React from 'react'
import dncLogo from "../../assets/logo.svg";
import "./index.scss";

const Header = () => {
  return (
    <div className='header'>
      <img src={dncLogo} alt="dnc logo" />
    </div>
  )
}

export default Header