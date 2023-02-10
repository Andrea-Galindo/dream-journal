import React from 'react'
import logo from "../assets/logo.png"

const Logo = () => {
  return (
    <div>
      <img className="header-title" style={{width: "50px"}} src={logo} alt="logo" />
    </div>
  )
}

export default Logo