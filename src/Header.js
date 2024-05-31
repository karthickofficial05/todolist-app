import React from 'react'

const Header = (porps) => {
  return (
  <header>
    <h1>{porps.title}</h1>
  </header>
  )
}

Header.defaultProps ={
  title : "To do List"
}
export default Header